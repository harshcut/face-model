import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, Alert, Loading, Anchor } from "../../components";
import { alertSnippets, reduxState, clarifaiResponse } from "../../utils";
import { login, logout } from "../../actions";
import { getImageDetection } from "../../api";

const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const user = useSelector((state: reduxState) => state.user.data);
  const dispatch = useDispatch();
  const outputImage = useRef<HTMLImageElement>(null);
  const [badImage, setBadImage] = useState(false);
  const [image, setImage] = useState("");
  const [faceCount, setFaceCount] = useState(0);
  const [validity, setValidity] = useState(true);
  const [loading, setLoading] = useState(false);
  const [boundingBoxes, setBoundingBoxes] = useState<Array<React.ReactNode>>(
    []
  );

  const getBoundingBox = useCallback((clarifai: clarifaiResponse) => {
    try {
      const data = clarifai.outputs[0].data.regions;
      let stash: Array<React.ReactNode> = [];
      data.forEach((data, index: number) => {
        const width = Number(outputImage.current!.width);
        const height = Number(outputImage.current!.height);
        stash.push(
          <div
            key={index}
            className="bounding-box"
            style={{
              left: data.region_info.bounding_box.left_col * width,
              top: data.region_info.bounding_box.top_row * height,
              right: width - data.region_info.bounding_box.right_col * width,
              bottom:
                height - data.region_info.bounding_box.bottom_row * height,
            }}
          />
        );
      });
      setBoundingBoxes(stash);
      setFaceCount(clarifai.outputs[0].data.regions.length);
    } catch {
      setBoundingBoxes([]);
      setFaceCount(0);
    }
  }, []);

  useEffect(() => {
    if (user.entries >= 21) {
      setValidity(false);
    }
    if (outputImage.current && image) {
      outputImage.current.onload = () => {
        setBadImage(false);
        setLoading(true);
        setBoundingBoxes([]);
        setFaceCount(0);
        getImageDetection(image)
          .then(({ response, status }) => {
            if (status === 200) {
              if (response.entries <= 21) {
                dispatch(login({ ...user, entries: response.entries }));
                getBoundingBox(response.clarifai);
              } else {
                setValidity(false);
              }
            } else {
              setBadImage(true);
              setLoading(false);
              setBoundingBoxes([]);
              setFaceCount(0);
            }
          })
          .catch(() => dispatch(logout()))
          .finally(() => setLoading(false));
      };
    }
  }, [dispatch, getBoundingBox, image, user]);

  return (
    <div className="pt-6 px-5 pb-6 w-full sm:max-w-xl grid gap-3">
      <div className="flex justify-between">
        <span>
          {user.first_name.toUpperCase() + " " + user.last_name.toUpperCase()}
        </span>
        <Link
          to="/"
          className="text-custom-200"
          onClick={() => dispatch(logout())}
        >
          LOGOUT
        </Link>
      </div>
      {validity ? (
        <React.Fragment>
          <form
            onSubmit={handleSubmit((data) => setImage(data.image))}
            className="text-base grid sm:flex gap-3"
            noValidate
          >
            <div className="sm:flex-1">
              <Input
                placeholder="Image Source"
                type="text"
                name="image"
                ref={register({ required: true })}
              />
            </div>
            <div className="sm:w-32">
              <Button>DETECT</Button>
            </div>
          </form>
          <Alert>
            <div className="grid gap-3">
              <div className="flex justify-between">
                <span>STATUS: ACTIVE</span>
                <span>{user.entries}/20</span>
              </div>
              <hr style={{ color: "#4dbb5fd3" }} />
              <p>
                {alertSnippets.demo} Click{" "}
                <span
                  onClick={() =>
                    setImage(
                      "https://portal.clarifai.com/cms-assets/20180320221615/face-002.jpg"
                    )
                  }
                  className="border-b cursor-pointer"
                >
                  here
                </span>{" "}
                for demo.
              </p>
            </div>
          </Alert>
        </React.Fragment>
      ) : (
        <Alert type="warning">{alertSnippets.exceeded}</Alert>
      )}
      {badImage && <Alert type="warning">{alertSnippets.image}</Alert>}
      {loading && <Loading type="linear" />}
      <div className="rounded-md relative">
        <img ref={outputImage} src={image} alt="" className="rounded w-full" />
        {boundingBoxes}
      </div>
      {image && <div>Total Face Count {faceCount}</div>}
      <Anchor />
    </div>
  );
};

export default Dashboard;

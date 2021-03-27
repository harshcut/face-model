import { Fragment } from "react";

const Anchor = () => {
  return (
    <Fragment>
      <hr style={{ color: "#333" }} />
      <div className="flex flex-wrap gap-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://status.clarifai.com"
        >
          API Status
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/harshcut"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/harshcut/face-model"
        >
          Source
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/harshcut/face-model/issues"
        >
          Issues
        </a>
      </div>
    </Fragment>
  );
};

export default Anchor;

import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dashboard, Register, SignIn } from "./pages";
import { Loading, PrivateRoute } from "./components";
import { verifyLocalStorage } from "./api";
import { login, logout } from "./actions";

const App = () => {
  const dispatch = useDispatch();
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    try {
      const user =
        JSON.parse(localStorage.getItem("state") as string).user ?? undefined;
      if (user.auth) {
        verifyLocalStorage()
          .then(({ status }) => {
            if (status === 200) {
              dispatch(login(user.data));
              setVerified(true);
            } else {
              dispatch(logout());
            }
          })
          .catch(() => {
            dispatch(logout());
          });
      } else {
        dispatch(logout());
      }
    } catch {
      dispatch(logout());
    }
  });

  return (
    <Switch>
      <PrivateRoute
        auth={useSelector(
          (state: { user: { auth: boolean } }) => state.user.auth
        )}
        path="/dashboard"
        redirect="/register"
      >
        {verified ? (
          <div className="base-card sm:max-w-2xl">
            <Dashboard />
          </div>
        ) : (
          <Loading type="circular" />
        )}
      </PrivateRoute>
      <Route exact path="/register">
        <div className="base-card">
          <Register setVerified={setVerified} />
        </div>
      </Route>
      <Route path="/">
        <div className="base-card">
          <SignIn setVerified={setVerified} />
        </div>
      </Route>
    </Switch>
  );
};

export default App;

import React from "react";
import { Route, Redirect } from "react-router-dom";

interface Props {
  auth?: boolean;
  children?: React.ReactNode;
  redirect: string;
  path: string;
}

const PrivateRoute = ({ auth, children, redirect, path }: Props) => {
  return (
    <Route
      path={path}
      render={() => {
        return auth ? children : <Redirect to={redirect} />;
      }}
    />
  );
};

export default PrivateRoute;

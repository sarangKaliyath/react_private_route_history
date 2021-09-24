import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ to, exact, path, children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Redirect exact={exact} to={to}></Redirect>;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

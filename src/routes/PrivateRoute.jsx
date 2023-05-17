import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { children } = props;

  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;

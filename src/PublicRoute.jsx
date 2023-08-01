import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  // const isuser = useSelector((state) => state.userAuth.isUser);

  // if (isuser) {
  //   return <Navigate to="/home" />;
  // }
  return children;
};

export default PublicRoute;

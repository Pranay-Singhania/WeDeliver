// AuthenticatedRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIsModalVisible } from "../../store/ModalSlice";

const AuthenticatedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    // Dispatch an action to open the login modal
    dispatch(setIsModalVisible(true));
    // Redirect to the home page or another appropriate page
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default AuthenticatedRoute;

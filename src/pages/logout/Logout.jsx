import React from "react";
import { Navigate } from "react-router-dom";
const Logout = ({ setUser }) => {
  setUser("");
  return (
    <>
      <Navigate to="/login" />
    </>
  );
};

export default Logout;

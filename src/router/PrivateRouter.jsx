import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const PrivateRouter = ({ user, setUser }) => {
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("USER")));
  }, []);

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;

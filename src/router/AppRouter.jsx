import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  const [user, setUser] = useState([]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route
          path="/register"
          element={<Register user={user} setUser={setUser} />}
        ></Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/detail/:id"
          element={<PrivateRouter setUser={setUser} user={user} />}
        >
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="/logout" element={<Logout setUser={setUser} />} />
      </Routes>
    </div>
  );
};

export default AppRouter;

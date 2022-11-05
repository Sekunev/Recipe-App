import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    let users = localStorage.getItem("users");
    users = users ? JSON.parse(users) : [];
    const findedUser = users.find(
      (item) =>
        item.username === user.username && item.password === user.password
    );

    console.log(findedUser);

    if (findedUser) {
      localStorage.setItem("USER", JSON.stringify(users));
      navigate(-1);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="wrapper">
      <Form className="into">
        <h3>You must be a member and login to see recipe details.</h3>
        <input
          type="text"
          placeholder="name"
          required
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button type="button" className="btn btn-success" onClick={handleClick}>
          Login
        </Button>

        <Button
          type="button"
          className="btn btn-danger"
          onClick={() => navigate("/register")}
        >
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Login;

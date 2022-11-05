import React from "react";

import { useNavigate } from "react-router-dom";

const Register = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    let users = localStorage.getItem("users");

    if (users) {
      users = JSON.parse(users);
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      var data = [user];
      localStorage.setItem("users", JSON.stringify(data));
    }
    navigate("/");
  };

  console.log(user);

  return (
    <div className="register">
      <div className="d-flex container flex-column ">
        <input
          className="rounded-2 m-2 p-2"
          type="text"
          placeholder="username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          className="rounded-2 m-2 p-2"
          type="password"
          placeholder="password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button className="rounded-2 m-2 p-2" onClick={() => handleClick()}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;

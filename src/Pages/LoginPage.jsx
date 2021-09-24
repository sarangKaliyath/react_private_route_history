import React from "react";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const [loginData, setLoginData] = useState({});
  const { token, handleTokenChange } = useContext(AuthContext);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleClick = async () => {
    axios.post("https://reqres.in/api/login", loginData).then((res) => {
      console.log(res.data.token);
      handleTokenChange(res.data.token);
      history.push("/dashboard");
    });
  };
  if (token) {
  }

  return (
    <div>
      <h1>Login</h1>
      <div className="login">
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="password"
        />
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

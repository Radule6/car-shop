//TODO
//CSS
//Data validation & sanitization
//authorization, user/admin
// sessions
//site redirect

import React from "react";
import { useNavigate } from "react-router-dom";

const API = "https://422backend.cyclic.app";

const Login = () => {
  const navigate = useNavigate();

  //see onSubmit vs formaction for validation/sanitization
  const displayLogin = () => (
    <div>
      <form onSubmit={verifyLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username"></input>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" is="password"></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );

  function verifyLogin(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const data = { username: username, password: password };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(API + "/checkLogin", options).then((value) => {
      value.json().then((value) => {
        if (value != false) {
          console.log(value);
          navigate("/admin");
        } else {
          alert("false");
        }
      });
    });
  }

  return displayLogin();
};

export default Login;

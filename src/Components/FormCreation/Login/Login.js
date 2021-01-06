import React from "react";
import "./login.css";
function Login() {
  return (
    <div>
      <form className="box" method="post">
        <h1>Login</h1>
        <input type="text" name="" placeholder="Username" />
        <input type="password" name="" placeholder="password" />
        <input type="submit" name="" value="Login" />
      </form>
    </div>
  );
}

export default Login;

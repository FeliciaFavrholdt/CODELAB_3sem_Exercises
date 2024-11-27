import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <NavLink to="/register">Register</NavLink>
      </p>
    </div>
  );
}

export default Login;

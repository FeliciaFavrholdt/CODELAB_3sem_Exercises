import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:3002/users");
      const users = await response.json();

      // Find the user in the fetched data
      const user = users.find(
        (u) => u.login === username && u.password === password
      );

      if (user) {
        setSuccess(`Welcome back, ${user.login}!`);
        setError(""); // Clear error if login is successful
      } else {
        setError("Invalid username or password. Please try again.");
        setSuccess(""); // Clear success message if login fails
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <p>
        Don't have an account? <NavLink to="/register">Register</NavLink>
      </p>
    </div>
  );
}

export default Login;

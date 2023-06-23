import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userCredentials from "../components/usernames"; // Update the path based on the file location
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSuccessfulLogin = (username) => {
    // Call this function to set the logged-in username in the navigation bar
    navigate("/", { state: { loggedInUsername: username } });
  };

  const handleSignUp = () => {
    // Navigate to the sign-up page
    navigate("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered username and password match any user credentials
    const user = userCredentials.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Successfully signed in
      console.log("Signed in:", user.username);
      // Reset the form
      setUsername("");
      setPassword("");
      setLoginError(false);
      // Call the handleSuccessfulLogin function to set the logged-in username
      handleSuccessfulLogin(user.username);
    } else {
      // Incorrect username or password
      console.log("Login error");
      setLoginError(true);
    }
  };

  return (
    <>
      <div className="container2">
        <img
          src="restaurant.jpg"
          alt="restaurant"
          id="imagesss"
          className="img-fluid"
        />
        <form onSubmit={handleSubmit}>
          <div id="user">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              required
              minLength={4}
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div id="user">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              required
              minLength={4}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            id="submit"
            style={{
              width: "150px",
              height: "50px",
              fontSize: "15px",
              margin: "30px",
              justifyContent: "center",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Submit
          </button>
          {loginError && (
            <div>
              <div class="alert alert-danger" role="alert">
                Incorrect username or password
              </div>
              <button
                type="button"
                onClick={handleSignUp}
                style={{
                  width: "150px",
                  height: "50px",
                  fontSize: "15px",
                  margin: "30px",
                  justifyContent: "center",
                  backgroundColor:"black"
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

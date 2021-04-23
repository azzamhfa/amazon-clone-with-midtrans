import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //FireBase Login thing.
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // If success
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      //If error
      .catch((error) => alert(error.message));

    //FireBase Register..
  };
  return (
    <div className="login">
      {/* <Link */}
      <Link to="/">
        <img
          className="login_image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button type="submit" onClick={signIn} className="login_signInButton">
            Sign In
          </button>
        </form>

        <p>By Signin-in you agree to the AMAZON FAKE CLONE etc...</p>

        <button onClick={register} className="login_registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

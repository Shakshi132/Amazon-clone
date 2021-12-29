import React, { useState } from "react";
import "./Login.css";
import {
  Link,
  useNavigate,
} from "react-router-dom"; /*in video, useHistory has been used instead of useNavigate */
import { auth } from "./firebase";
import logo from "./images/logo.svg";
import bg from "./images/girl.svg";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const navigate =
    useNavigate(); /*with useNavigate, we can PROGRAMMATICALLY change the url to land somewhere else */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); /*to prevent it from refreshing */

    //firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //firebase
    createUserWithEmailAndPassword(
      auth,
      email,
      password
    ) /*this creates a user with email & password*/
      .then((auth) => {
        /* if that's a success, it comes back with a 'auth' obj.*/

        if (auth) {
          /*if auth obj. is returned, navigate the user to home page */
          navigate("/home");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src={logo}></img>
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h2>email</h2>
          <input
            type="text"
            value={email}
            onChange /*tracking email */={(e) => setEmail(e.target.value)}
          />{" "}
          {/*this acts like a cirle, some value->trigerring the event-> setting value to entered input->some value... */}
          <h2>password</h2>
          <input
            type="password"
            value={password}
            onChange /*tracking the password */={(e) =>
              setPassword(e.target.value)
            }
          />{" "}
          {/*when type is set to password, at the time of entering it, it shows up as asterrisk symbol */}
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign-in
          </button>
        </form>

        <p>By signing in, you agree to Thrifty's conditions of use & sale.</p>

        <button className="login_registerButton" onClick={register}>
          Create your thrifty account
        </button>
      </div>
      <img className="login_bg" src={bg} />
    </div>
  );
}

export default Login;

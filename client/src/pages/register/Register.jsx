import { useContext, useRef } from "react";
import { RegisterCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (ev) => {
    ev.preventDefault();
    if (passwordAgain.current.value != password.current.value) {
      password.current.setCustomValidity("passwords don't match!");
    } else {
      RegisterCall(
        {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          passwordAgain: passwordAgain.current.value,
        },
        dispatch
      );
    }
  };

  console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">THEsocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on THEsocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              placeholder="Email"
              ref={email}
              required
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              ref={password}
              className="loginInput"
              required
              type="password"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              required
              type="password"
            />
            <button className="loginButton" type="submit" style={{backgroundColor:"#2d2a2a"}}>
              {isFetching ? (
                <CircularProgress color="#e3f2fd" size="20px" />
              ) : (
                "Sign Up"
              )}
            </button>
            <Link to={"/login"}>
            <button className="loginRegisterButton" style={{backgroundColor:"#2d2a2a"}}>
              {isFetching ? (
                <CircularProgress color="#e3f2fd" size="20px" />
              ) : (
                "Log into account"
              )}
              </button>
              </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

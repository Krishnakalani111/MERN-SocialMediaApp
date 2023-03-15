import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (ev) => {
    ev.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
              autoComplete={true}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching} style={{backgroundColor:"#2d2a2a"}}>
              {isFetching ? (
                <CircularProgress color="#e3f2fd" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            {error && <span style={{color:"red"}}>Wrong User Credentials</span>}
            <span className="loginForgot">Forgot Password?</span>
            <Link to={"/register"}>
            <button className="loginRegisterButton" style={{backgroundColor:"#2d2a2a"}}>
              {isFetching ? (
                <CircularProgress color="#e3f2fd" size="20px" />
              ) : (
                "Create An Account"
              )}
              </button>
              </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

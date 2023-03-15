import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

export const RegisterCall = async (userCredential, dispatch) => {
  dispatch({ type: "REGISTRATION_START" });
  try {
    const res = await axios.post("/auth/register", userCredential);
    dispatch({ type: "REGISTRATION_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "REGISTRATION_FAILURE", payload: err });
  }
};


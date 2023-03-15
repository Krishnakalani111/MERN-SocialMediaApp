export const RegisterStart = (userCredentials) => ({
  type: "REGISTRATION_START",
});

export const RegisterSuccess = (user) => ({
  type: "REGISTRATION_SUCCESS",
  payload: user,
});

export const RegisterFailure = (userCredentials) => ({
  type: "REGISTRATION_FAILURE",
});

export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Follow = (user) => ({
  type: "FOLLOW",
  payload: user,
});

export const Unfollow = (user) => ({
  type: "UNFOLLOW",
  payload: user,
});
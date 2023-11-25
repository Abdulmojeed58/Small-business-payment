// import jwt_decode from "jwt-decode";
import { authInstance } from "./axios";

// ----------------------------------------------------------------------

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  // @ts-ignore
  const decoded = jwt_decode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
  let expiredTimer;

  window.clearTimeout(expiredTimer);
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;
  // console.log(timeLeft);
  expiredTimer = window.setTimeout(() => {
    // console.log('expired');
    // You can do what ever you want here, like show a notification
    // TODO: ADD a modal to show logout
  }, timeLeft);
};

const setSession = (accessToken?: string) => {
  if (accessToken) {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("accessToken", accessToken);
      // set token to axiosInstance
      //   axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      // set token to authInstance
      authInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      // This function below will handle when token is expired
      // @ts-ignore
      const { exp } = jwt_decode(accessToken);
      handleTokenExpired(exp);
    }
  } else {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("accessToken");
    }

    // delete from the two instance
    // delete axios.defaults.headers.common.Authorization;
    delete authInstance.defaults.headers.common.Authorization;
  }
};

const getSession = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("accessToken");
  }

  return null;
};

export { isValidToken, setSession, getSession };

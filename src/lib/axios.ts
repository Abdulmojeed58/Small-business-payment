import { PATHS } from "@/routes/path";
import { config } from "@/utils/constant";
import axios from "axios";

export const handleUnauthorizedRequest = (error: any) => {
    if (error && (error.status === 401 || error.statusCode === 401)) {
        // setSession();
        // push to log in immediately when not auth path, token is not valid
        if (!window.location.pathname.includes('auth')) {
            window.location.replace(PATHS.auth.login);
        }
    }
};

export const authInstance = axios.create({
  baseURL: "https://payments-dashboard-hackathonn.onrender.com",
  timeout: 10000,
});

authInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    handleUnauthorizedRequest(error.response || error);
    return Promise.reject(error);
  }
);

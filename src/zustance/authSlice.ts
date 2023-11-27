import { create } from "zustand";
import { isValidToken, setSession, getSession } from "../lib/jwt";
import { authInstance as axios } from "@/lib/axios";

// interface AuthState {
//     token: string | null;
//     isInitialized: boolean;
//     isAuthenticated: boolean;
//     loading: boolean;
//     user: any; // Replace 'any' with the actual user type
//     error: any; // Replace 'any' with the actual error type
//     message: any; // Replace 'any' with the actual message type
//   }

//   interface AuthActions {
//     setIsInitialized: () => void;
//     setLoading: (value: boolean) => void;
//     clearError: () => void;
//     clearMessage: () => void;
//   }

export const useAuth = create<any>((set: any, get: any) => ({
  auth: {
    token: getSession(),
    isInitialized: false,
    isAuthenticated: !!getSession(),
    isRegister: false,
    isOtpSuccess: false,
    currentEmail: null,
    loading: false,
    user: null,
    error: null,
    message: null,
    setIsInitialized: () =>
      set((state: any) => ({
        ...state,
        auth: { ...state.auth, isInitialized: true },
      })),
    setLoading: (value: boolean) =>
      set((state: any) => ({
        ...state,
        auth: { ...state.auth, loading: value },
      })),
    clearError: () =>
      set((state: any) => ({ ...state, auth: { ...state.auth, error: null } })),
    clearMessage: () =>
      set((state: any) => ({
        ...state,
        auth: { ...state.auth, message: null },
      })),
  },
  login: async (data: { email: string; password: string }) => {
    get().auth.setLoading(true);

    const payload = { login: data.email, password: data.password };

    try {
      const res = await axios.post("/api/v1/auth/login", payload);
      console.log(res.data.data.access_token);

      setSession(res.data.data.access_token);
      console.log(res);

      set((state: any) => ({
        ...state,
        auth: {
          ...state.auth,
          token: res.data.data.access_token,
          isAuthenticated: true,
          user: res.data.user,
          loading: false,
        },
      }));
    } catch (error) {
      setSession();
      set((state: any) => ({
        ...state,
        auth: {
          ...state.auth,
          error: handleError(error),
          token: null,
          isAuthenticated: false,
          loading: false,
        },
      }));
    } finally {
      get().auth.setLoading(false);
    }
  },
  register: async (data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    age: string;
    password: string;
  }) => {
    get().auth.setLoading(true);

    const { firstName, lastName, email, phoneNumber, age, password } = data;

    const payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
      age,
      password,
    };

    try {
      const res = await axios.post("api/v1/user/register", payload);
      // console.log(res.data.data.access_token);

      // setSession(res.data.data.access_token);
      console.log(res);

      set((state: any) => ({
        ...state,
        auth: {
          ...state.auth,
          isRegister: true,
          currentEmail: email,
          loading: false,
        },
      }));
    } catch (error) {
      setSession();
      set((state: any) => ({
        ...state,
        auth: {
          ...state.auth,
          error: handleError(error),
          isRegister: false,
          token: null,
          isAuthenticated: false,
          loading: false,
        },
      }));
    } finally {
      get().auth.setLoading(false);
    }
  },
  otp: async (data: string) => {
    get().auth.setLoading(true);
    const mail = get().auth.currentEmail;

    const payload = { otp: data, email: mail };

    try {
      const res = await axios.post("api/v1/auth/activate", payload);
      console.log(res.data.data.access_token);

      setSession(res.data.data.access_token);
      console.log(res.data.data.user.firstName);

      set((state: any) => ({
        ...state,
        auth: {
          ...state.auth,
          // token: res.data.data.access_token,
          // isAuthenticated: true,
          isRegister: false,
          currentEmail: null,
          isOtpSuccess: !!res.data.data.user.firstName,
          // user: res.data.user,
          loading: false,
        },
      }));
    } catch (error) {
      setSession();
      console.log(error);
      set((state: any) => ({
        ...state,
        auth: {
          ...state.auth,
          error: handleError(error),
          token: null,
          isAuthenticated: false,
          isOtpSuccess: false,
          // isRegister: false,
          // currentEmail: null,
          loading: false,
        },
      }));
    } finally {
      get().auth.setLoading(false);
    }
  },
}));

export const handleError = (error: any) => {
  const message = error?.data?.message;

  //   if (message?.includes("")) {
  //     return "";
  //   }

  if (message) {
    return message;
  }

  return "An error occurred";
};

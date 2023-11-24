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
      console.log("done")
      setSession("Mjay" as string);

      set((state: any) => ({
        ...state,
        auth: {
          ...state.auth,
          token: res.data.token,
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

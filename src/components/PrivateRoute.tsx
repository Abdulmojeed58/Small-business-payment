import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/zustance/authSlice";
import { getSession, setSession } from "@/lib/jwt";
import { PATHS } from "@/routes/path";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const { auth } = useAuth();

  const { isInitialized, setIsInitialized } = auth;

  useEffect(() => {
    const initialize = async () => {
      // initialize application
      setIsInitialized();

      const accessToken = getSession();

      if (accessToken) {
        setSession(accessToken);
      } else {
        setSession();
        if (!window.location.pathname.includes("auth")) {
          window.location.replace(PATHS.auth.login);
        }
      }
    };

    initialize();

    // eslint-disable-next-line
  }, []);

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  // Render the children (the protected content) if authenticated
  return <>{children}</>;
};

export default PrivateRoute;

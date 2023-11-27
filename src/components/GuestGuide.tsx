import React from "react";
import { useEffect } from "react";
// next
import { useRouter } from "next/router";
import { useAuth } from "@/zustance/authSlice";
import { PATHS } from "@/routes/path";
// hooks
// routes
// import { PATHS } from '../routes/path';
// import { useAuth } from '../zustand/store';

// ----------------------------------------------------------------------

export default function GuestGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useRouter();

  const {
    auth: { isAuthenticated },
  } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return <>{children}</>;
}

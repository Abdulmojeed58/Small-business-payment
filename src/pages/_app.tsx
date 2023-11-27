import AuthLayout from "@/components/AuthLayout";
import DashboardLayout from "@/components/DashboardLayout";
import PrivateRoute from "@/components/PrivateRoute";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

// Layouts

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname.includes("auth")) {
    return (
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    );
  }

  if (router.pathname.includes("dashboard")) {
    return (
      <PrivateRoute>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </PrivateRoute>
    );
  }
  return (
    <PrivateRoute>
      <Component {...pageProps} />
    </PrivateRoute>
  );
}

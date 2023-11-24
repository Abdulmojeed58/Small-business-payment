import AuthLayout from "@/components/AuthLayout";
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
  return (
    <PrivateRoute>
      <Component {...pageProps} />
    </PrivateRoute>
  );
}

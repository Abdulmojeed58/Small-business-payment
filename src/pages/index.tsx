// import { PATHS } from "@/routes/path";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
      if (router.pathname === '/') {
          router.push("/dashboard");
      }
  });

  return null;
}

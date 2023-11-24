import { PATHS } from "@/routes/path";

export const nav = [
  {
    name: "Home",
    path: PATHS.root,
  },
  {
    name: "About us",
    path: PATHS.root,
  },
  {
    name: "Contact us",
    path: PATHS.root,
  },
  {
    name: "How it works",
    path: PATHS.root,
  },
  {
    name: "FAQ",
    path: PATHS.root,
  },
];

export const config = {
  authApiBaseUrl: process.env.AUTH_API_BASE_URL,
};

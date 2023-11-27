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

export const invoice = [
  {
    transactionId: "#12415346512",
    date: "2/5/2022 06:24 AM",
    from: "Chidinma",
    amount: "45,000",
    status: "canceled",
  },
  {
    transactionId: "#12415346512",
    date: "2/5/2022 06:24 AM",
    from: "Abdulmojeed",
    amount: "45,000",
    status: "completed",
  },
  {
    transactionId: "#12415346512",
    date: "2/5/2022 06:24 AM",
    from: "FaithFull",
    amount: "45,000",
    status: "failed",
  },
  {
    transactionId: "#12415346512",
    date: "2/5/2022 06:24 AM",
    from: "Runner",
    amount: "45,000",
    status: "pending",
  },
];

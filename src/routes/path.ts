const path = (root: string, subLink: string) => `${root}${subLink}`;

const ROOTS = "/";
const ROOTS_AUTH = "/auth";

export const PATHS = {
  root: ROOTS,

  auth: {
    root: ROOTS_AUTH,
    login: path(ROOTS_AUTH, "/login"),
    register: path(ROOTS_AUTH, "/register"),
    forgotPassword: path(ROOTS_AUTH, "/forgot_password"),
  },
};

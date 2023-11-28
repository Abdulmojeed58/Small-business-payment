import React from "react";

import Link from "next/link";
import { nav } from "@/utils/constant";
import { PATHS } from "@/routes/path";
import Modal from "./Modal";
import useNav from "@/zustance/navSlice";

const Drawer = () => {
  const { setToggleNav, isNavOpen } = useNav();
  return (
    <Modal className={`${isNavOpen ? "visible" : "hidden"}`}>
      <aside className="block lg:hidden fixed bg-white right-0 top-0 bottom-0 h-full w-[500px] max-w-full px-7 z-40">
        <header className="py-5 flex justify-end mb-5">
          <button onClick={() => setToggleNav(false)}>
            <CloseSvg />
          </button>
        </header>
        <nav>
          <ul className="flex flex-col gap-[20px]">
            {nav.map(({ name, path }, i) => (
              <li key={i}>
                <Link
                  className="text-secondary font-Montserrat text-[20px] font-[500] leading-normal"
                  href={path}
                  onClick={() => setToggleNav(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-[20px]">
          <Link
            className="block text-secondary text-[20px] font-[500] leading-normal mb-[30px]"
            href={PATHS.auth.login}
            onClick={() => setToggleNav(false)}
          >
            Login
          </Link>
          <Link
            className="py-[8px] px-[24px] bg-primary rounded-[8px] flex h-[60px] justify-center items-center"
            href={PATHS.auth.register}
            onClick={() => setToggleNav(false)}
          >
            <span className="font-Montserrat text-[20px] font-[600] leading-normal whitespace-nowrap">
              Get Started
            </span>
          </Link>
        </div>
      </aside>
    </Modal>
  );
};

export default Drawer;

export const CloseSvg = () => {
  return (
    <svg
      style={{ width: "15px", height: "15px", strokeWidth: "1.25px" }}
      className="Icon Icon--close "
      role="presentation"
      viewBox="0 0 16 14"
    >
      <path
        d="M15 0L1 14m14 0L1 0"
        stroke="currentColor"
        fill="none"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};

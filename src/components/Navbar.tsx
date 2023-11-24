import React from "react";
// import { nav } from "../features/auth/components/constant";
import Link from "next/link";
// import { PATHS } from "@/routes/path";
import Image from "next/image";
import Drawer from "./Drawer";
import { nav } from "@/utils/constant";
import { PATHS } from "@/routes/path";
// import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="font-Montserrat py-[30px] px-[40px] lg:pt-[64px] lg:pb-[21px] xl:px-[80px] shadow-md sticky top-0 z-[200] bg-white">
      <div className="flex items-center justify-center">
        <Link className=" flex-1 flex items-end" href="/">
          <span className=" text-primary text-[27px] font-[700] leading-normal tracking-[-2.16px] uppercase ">
            farjo
          </span>
          <span className="block -translate-y-2">
            <Image
              src="/icons/ic_circle.svg"
              alt="circle"
              width={9}
              height={9}
            />
          </span>
        </Link>

        <div className="lg:hidden">
          {/* <FiMenu /> */}
        </div>
        {/* Mobile Nav */}

        <Drawer />

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center justify-center gap-[20px] xl:gap-[32px]">
            {nav.map(({ name, path }, i) => (
              <li key={i}>
                <Link
                  className="text-secondary font-Montserrat text-[16px] font-[500] leading-normal"
                  href={path}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden flex-1 text-right lg:flex items-center justify-end">
          <Link
            className="text-secondary text-[20px] font-[600] leading-normal mr-[24px]"
            href={PATHS.auth.login}
          >
            Login
          </Link>
          <Link
            className="py-[8px] px-[24px] bg-primary rounded-[8px] flex h-[60px] justify-center items-center"
            href="/"
          >
            <span className="font-Montserrat text-[20px] font-[600] leading-normal whitespace-nowrap">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

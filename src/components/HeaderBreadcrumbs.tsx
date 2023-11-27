import useNav from "@/zustance/navSlice";
import Image from "next/image";
import React from "react";

const HeaderBreadcrumbs = ({ children }: { children: React.ReactNode }) => {
  const { setSidebar } = useNav();
  return (
    <div className="relative pb-[30px]">
      <header className="flex items-center justify-between py-[8px] px-[16px] lg:pt-[24px] lg:pb-[5px] lg:px-[48px] gap-[16px] md:gap-[30px] lg:gap-[80px] xl:gap-[133px] bg-white sticky top-0 left-0 right-0">
        <button className="lg:hidden" onClick={() => setSidebar(true)}>
          <MenuSvg />
        </button>
        <div className="hidden lg:block">
          <h1 className="text-dark text-[24px] font-[700] leading-[31.2px] mb-[4px]">
            Dashboard
          </h1>
          <p className="text-greyPrimary text-[14px] font-[400] leading-[22.4px]">
            Let&apos;s check your store today
          </p>
        </div>
        <div className="border border-[#D0D5DD] px-[14px] py-[8px] rounded-[8px] text-darkGreyPrimary flex items-center gap-[8px] flex-1 bg-[#FAFAFA] max-w-[412px]">
          <SearchIcon />
          <input
            type="search"
            placeholder="Search"
            className="bg-transparent outline-none border-none text-darkGreyPrimary flex-1"
          />
        </div>
        <div className="flex items-center gap-[50px] xl:gap-[94px]">
          <div className="flex lg:border-r border-[#D0D5DD] items-center">
            <div className="hidden lg:block p-[12px]">
              <MessageIcon />
            </div>
            <div className="p-[12px]">
              <NotificationIcon />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-[16px]">
            <div className="">
              <Image
                src="/images/Avatar.png"
                alt="profile"
                width={48}
                height={48}
              />
            </div>
            <div>
              <h3 className="text-dark text-[16px] font-[700] leading-[24px] tracking-[0.3px]">
                John Dumelo
              </h3>
              <p className="text-greyPrimary text-[12px] font-[400] leading-[19.2px]">
                Digital Creator
              </p>
            </div>
          </div>
        </div>
      </header>
      <section>{children}</section>
    </div>
  );
};

export default HeaderBreadcrumbs;

const MessageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
    >
      <path
        d="M17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1Z"
        stroke="#111827"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 3L10 9L19 3"
        stroke="#111827"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const NotificationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
    >
      <path
        d="M7 3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.8321 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0753 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.4551 14.6914 17 15H1C1.54494 14.6914 2.00981 14.2592 2.35719 13.7381C2.70457 13.2171 2.92474 12.6217 3 12V9C3.05956 7.73107 3.4633 6.50227 4.16795 5.4453C4.8726 4.38833 5.85159 3.54303 7 3"
        stroke="#111827"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15V16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7956 12 16V15"
        stroke="#111827"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MenuSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="#101828"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z"
        stroke="#667085"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

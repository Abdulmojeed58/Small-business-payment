import useNav from "@/zustance/navSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdDashboard } from "react-icons/md";
import { CloseSvg } from "./Drawer";

const sideLinks = [
  { name: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
  { name: "Invoice", path: "/", icon: <MdDashboard /> },
  { name: "Analytics", path: "/", icon: <MdDashboard /> },
  { name: "Settings", path: "/", icon: <MdDashboard /> },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isSidebar, setSidebar } = useNav();

  return (
    <section>
      <div className="lg:grid grid-cols-8 h-screen">
        <aside
          className={`${
            isSidebar ? "block" : "hidden lg:block"
          } lg:block fixed top-0 left-0 z-10 w-[400px] max-w-[90vw] h-full lg:w-auto lg:max-w-auto lg:static overflow-y-auto overflow-x-hidden bg-darkGreen px-[8px] pt-[204px]`}
        >
          <button
            onClick={() => setSidebar(false)}
            className="absolute right-5 top-5 lg:hidden"
          >
            <CloseSvg />
          </button>
          <ul className="grid gap-[12px]">
            {sideLinks.map((link, index) => (
              <li key={index} className="">
                <Link
                  href={link.path}
                  className={`flex items-center gap-[12px] px-[10px] py-[5px] ${
                    router.asPath === link.path ? "bg-darkPrimary" : ""
                  }`}
                >
                  <span
                    className={`text-[24px]  ${
                      router.asPath === link.path
                        ? "text-primary"
                        : "text-light"
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span
                    className={`font-Montserrat text-[16px] leading-normal  text-white ${
                      router.asPath === link.path ? "font-[700]" : "font-[400]"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <main className="col-span-7 h-full overflow-auto bg-[#F6F4F4]">
          {children}
        </main>
      </div>
    </section>
  );
};

export default DashboardLayout;

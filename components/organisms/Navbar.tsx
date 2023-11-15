import React, { useEffect, useRef, useState } from "react";
import Logo from "@/components/organisms/Logo";
import HomeLinks from "@/components/organisms/HomeLinks";
import { PaySubscription } from "@/components/organisms/NavbarActions";
import { stripeConfig } from "stripe.config.js";

type NavbarProps = {
  navbarShadow?: boolean;
  navbarStatic?: boolean;
  activePage?: string;
  redirectNavbar?: boolean;
};
const Navbar = ({
  navbarShadow,
  navbarStatic,
  activePage,
  redirectNavbar,
}: NavbarProps) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const toggleNavbar = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setToggleNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector(".maqraa-navbar");
    const body = document.querySelector("body");
    if (navbar && body && !navbarStatic) {
      const navbarRect = navbar.getBoundingClientRect();
      body.style.paddingTop = `${navbarRect.height}px`;
    }
    if (body && navbarStatic) {
      body.style.paddingTop = "0px";
    }
  }, [windowWidth]);

  const closeNavbar = () => {
    setToggleNav(false);
  };

  return (
    <>
      <nav
        className={`maqraa-navbar bg-transparent bg-white py-2 ${
          navbarStatic && "!static"
        } ${navbarShadow && "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]"}`}
      >
        <div className="container relative">
          <div className="mx-auto flex items-center justify-between">
            <div className="navbar-item-wrapper flex items-center justify-between lg:w-[76px] lg:min-w-[76px]">
              <Logo />
            </div>

            <button
              onClick={() => toggleNavbar()}
              data-collapse-toggle="navbar-default"
              type="button"
              className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 xl:hidden"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only"></span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className={` absolute left-[0.5%] top-[110px] z-50 mt-3 max-h-[0px] w-[99%]
                max-w-full items-center justify-start overflow-hidden rounded-md bg-white xl:static xl:mt-0 xl:!flex xl:max-h-[100%] xl:w-[calc(100%-65px)] xl:w-full xl:grow xl:overflow-visible xl:rounded-none  
                ${
                  toggleNav
                    ? "!max-h-[999px] overflow-auto shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),4px_0px_4px_0px_rgba(0,0,0,0.04)] transition-[max-height] duration-500 ease-in-out"
                    : ""
                }`}
            >
              <div
                className=" w-full grow items-center justify-between gap-3 xl:flex xl:w-auto"
                id="navbar-default"
              >
                <div className="block w-full items-center justify-center p-4 xl:flex xl:p-0 xl:pr-0">
                  {/* <div className=""></div> */}
                  <HomeLinks
                    closeNavbar={closeNavbar}
                    redirectNavbar={redirectNavbar}
                  />
                  {/* <div className="navbar-item-wrapper mt-4 xl:mt-0">
                    <PaySubscription
                      onClick={() => window.open(stripeConfig.url)}
                    />
                  </div> */}
                </div>
                <div className="lg:w-[76px] lg:min-w-[76px]"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GLOBAL } from "@/constants/i18n/ar";
import { Button } from "antd";
import { useRouter } from "next/router";

const SPACE = -20;

type HomeLinksPros = {
  closeNavbar: () => void;
  redirectNavbar?: boolean;
  withHome?: boolean;
};
const HomeLinks = ({
  closeNavbar,
  redirectNavbar,
  withHome,
}: HomeLinksPros) => {
  const activeNavbarItemRef = useRef<HTMLElement>();
  const [currentPath, setCurrentPath] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let navbarHeight = 0;
      const navbar = document.querySelector(".maqraa-navbar");
      if (navbar) {
        const navbarRect = navbar.getBoundingClientRect();
        // navbarHeight = navbarRect?.height;
      }

      const sections = document?.querySelectorAll(
        "section"
      ) as NodeListOf<HTMLElement>;

      sections?.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const navbarItem = document.querySelector(
          `[data-section-id="${sectionId}"]`
        );

        if (
          scrollY >= section.offsetTop - navbarHeight - SPACE &&
          scrollY <=
            section.offsetTop + section.offsetHeight - navbarHeight - SPACE
        ) {
          navbarItem?.classList.add("active");
        } else {
          navbarItem?.classList.remove("active");
        }
      });

      if (window && navbar) {
        if (
          currentPath === "/" &&
          (window?.scrollY <= navbarHeight ||
            window?.scrollY === 0 ||
            !window?.scrollY)
        ) {
          const navbarItem = document.querySelector(
            `[data-section-id="header-section"]`
          );
          navbarItem?.classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeNavbarItemRef]);

  const handleClick = async (href: string) => {
    closeNavbar();
    if (!redirectNavbar) {
      const sectionHref = document.getElementById(href) as HTMLElement;
      if (window && sectionHref) {
        const sectionRect = sectionHref.getBoundingClientRect();
        let scrollTo = sectionRect.top + window.scrollY;
        const navbar = document.querySelector(".maqraa-home-navbar");
        if (navbar) {
          const navbarRect = navbar.getBoundingClientRect();
          if (href === "header-section") {
            scrollTo = 0;
          } else {
            scrollTo = scrollTo - navbarRect.height - SPACE;
          }
        }

        await window.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      }
    } else {
      router.push(`/#${href}`);
    }
  };

  useEffect(() => {
    if (router.pathname === "/") {
      const navbarItem = document.querySelector(
        `[data-page-id="${router.asPath.slice(2)}"]`
      ) as HTMLButtonElement;
      if (navbarItem) {
        setTimeout(() => {
          navbarItem?.click();
        }, 310);
      }
    }
    setCurrentPath(router.pathname || "");
  }, [router, router.pathname, router.asPath]);
  return (
    <ul className="flex flex-col gap-1 font-medium xl:flex-row xl:gap-3">
      {withHome && (
        <li>
          <Button
            data-section-id="header-section"
            data-page-id="header-section"
            type="text"
            onClick={() => {
              handleClick("header-section");
            }}
            className={`nav-item-link block h-auto rounded-xl !border-none !bg-white p-2 py-3 text-base !text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px] ${
              currentPath === "/" && "active"
            }`}
            aria-current="page"
          >
            {GLOBAL.NAVBAR.HOME}
          </Button>
        </li>
      )}

      <li>
        <Button
          data-section-id="whatTeach-parent"
          data-page-id="whatTeach-section"
          type="text"
          onClick={() => {
            handleClick("whatTeach-section");
          }}
          className="nav-item-link block h-auto rounded-xl !border-none !bg-white p-2 py-3 text-base !text-maqraaDarkBlue-200 !shadow-none  !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px]"
        >
          {GLOBAL.NAVBAR.WHAT_WE_TEACH}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="howTeach-parent"
          data-page-id="howTeach-section"
          type="text"
          onClick={() => {
            handleClick("howTeach-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-base text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px]"
        >
          {GLOBAL.NAVBAR.HOW_WE_TEACH}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="ourSecret-parent"
          data-page-id="ourSecret-section"
          type="text"
          onClick={() => {
            handleClick("ourSecret-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-base text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px]"
        >
          {GLOBAL.NAVBAR.OUR_DISTINCTION}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="ourWindow-parent"
          data-page-id="ourWindow-section"
          type="text"
          onClick={() => {
            handleClick("ourWindow-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-base text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px]"
        >
          {GLOBAL.NAVBAR.WINDOW}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="ourClasses-parent"
          data-page-id="ourClasses-section"
          type="text"
          onClick={() => {
            handleClick("ourClasses-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-base text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px]"
        >
          {GLOBAL.NAVBAR.CLASSES}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="ourTeachers-parent"
          data-page-id="ourTeachers-section"
          type="text"
          onClick={() => {
            handleClick("ourTeachers-section");
          }}
          className={`nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-base text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px] ${
            currentPath?.includes("/teachers") && "active"
          }`}
        >
          {GLOBAL.NAVBAR.TEACHERS}
        </Button>
      </li>
      {/* <li>
        <Button
          data-section-id="achievements-parent"
          data-page-id="achievements-section"
          type="text"
          onClick={() => {
            handleClick("achievements-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-base text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px]"
        >
          {GLOBAL.NAVBAR.ACHIEVEMENTS}
        </Button>
      </li> */}
      <li>
        <Button
          data-section-id="faq-parent"
          data-page-id="faq-section"
          type="text"
          onClick={() => {
            handleClick("faq-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-base text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px]"
        >
          {GLOBAL.NAVBAR.FAQ}
        </Button>
      </li>
      <li>
        <Button
          data-section-id="testimonials-parent"
          data-page-id="testimonials-section"
          type="text"
          onClick={() => {
            handleClick("testimonials-section");
          }}
          className="nav-item-link block h-auto rounded-xl
          !border-none !bg-white p-2 py-3 text-base text-maqraaDarkBlue-200 !shadow-none !outline-none transition-all duration-500 hover:!bg-maqraaDarkBlue hover:!text-white xl:text-[17px]"
        >
          {GLOBAL.NAVBAR.TESTIMONIALS}
        </Button>
      </li>
    </ul>
  );
};
export default HomeLinks;

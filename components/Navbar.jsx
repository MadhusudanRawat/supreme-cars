"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { Menu } from "lucide-react";

export const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Brand New",
      path: "/brand-new",
    },
    {
      id: 2,
      title: "Pre-Loved",
      path: "/pre-loved",
    },
    {
      id: 3,
      title: "Workshop",
      path: "/workshop",
    },
    {
      id: 4,
      title: "About Us",
      path: "/about-us",
    },
    {
      id: 5,
      title: "Services",
      path: "/services",
    },
  ];

  const [navbarClassName, setNavbarClassName] = useState(
    "bg-transparent lg:py-6"
  );
  const [show, setShow] = useState(false);

  const handleToggleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handleSetNavbarClassName = () => {
      const scroll = window.scrollY;

      if (scroll > 50) setNavbarClassName("bg-black lg:py-3");
      else setNavbarClassName("bg-transparent lg:py-6");
    };

    window.addEventListener("scroll", handleSetNavbarClassName);

    return () => window.removeEventListener("scroll", handleSetNavbarClassName);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-40 w-full transition-all ${navbarClassName}`}
    >
      <div className="container">
        <div
          className={`relative flex items-center justify-between p-4 xl:p-0 ${
            show ? "bg-black lg:bg-transparent" : ""
          }`}
        >
          <Link href="/">
            <Image src="/images/logo.webp" alt="logo" width={137} height={49} />
          </Link>
          <button
            type="button"
            onClick={handleToggleShow}
            className="text-white md:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          <ul
            className={`absolute md:relative top-full lg:top-auto p-4 md:p-0 transition-all ${
              show ? "scale-y-100" : "scale-y-0"
            } md:scale-y-100 origin-top right-0 h-[95svh] md:h-auto w-full md:w-max bg-black md:bg-transparent flex flex-col md:flex-row items-start md:items-center gap-[25px]`}
          >
            {links.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  onClick={handleToggleShow}
                  className="text-base leading-[19px] text-white transition-colors lg:hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

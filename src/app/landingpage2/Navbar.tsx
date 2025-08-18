"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const [open, setOpen] = useState(false); // state for hamburger click menu open or close

  //^2 nd  Better  way - to apply dark mode using next-themes package , useTheme hook
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  //^ 1 st way to implement dark mode and light mode
  // const handleThemeChange = () => {
  //   const currentTheme = document.documentElement.classList.contains("dark")
  //     ? "light"
  //     : "dark";

  //   document.documentElement.classList.toggle("dark");
  //   localStorage.setItem("theme", currentTheme);
  // };

  return (
    <div className="relative z-50">
      <div className="md:shadow-rock relative mx-auto flex w-full max-w-6xl items-center justify-between overflow-hidden bg-neutral-50 px-6 py-2 md:mt-4 md:rounded-full dark:bg-neutral-700">
        <Image
          src="https://ui.aceternity.com/logo.png"
          alt="logo"
          width={30}
          height={30}
          className="rounded-full"
        />
        <div className="mr-10 hidden items-center gap-4 text-sm font-semibold text-neutral-500 transition duration-200 ease-out md:flex dark:text-neutral-400">
          {links.map((link, index) => (
            <Link
              className="hover:text-neutral-900 dark:hover:text-neutral-50"
              href={link.href}
              key={index}
            >
              {link.name}
            </Link>
          ))}

          {/* dark mode and light mode switch */}
          <button
            onClick={handleThemeChange}
            className="shadow-rock rounded-full border border-neutral-400 bg-white px-2 py-1.5 font-bold hover:scale-x-105 dark:bg-neutral-800"
          >
            {/* switch dark/light */}
            {theme === "light" ? "🌞" : "🌛"}
          </button>
        </div>

        {/* hamburger button */}
        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden">
          <IconMenu2 />
        </button>
        {/* for mobile screen */}
        {open && (
          <div className="fixed inset-x-0 top-15 z-50 mx-auto max-w-[95%] rounded-md bg-white shadow-lg md:hidden dark:bg-neutral-700">
            <div className="flex flex-col items-start gap-4 p-4 text-sm font-semibold text-neutral-500">
              {links.map((link, index) => (
                <Link
                  className="hover:text-neutral-900 dark:hover:text-neutral-50"
                  href={link.href}
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

//! System preference theme show first time also toggle and change dark and light mode

"use client";
import React, { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/app/assets/AllSvgIcon";
import { useTheme } from "next-themes";

export const ModeToggle = () => {
  const { theme, setTheme } = useTheme(); //next-theme

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light"); // state which store systemTheme

  //? prefers-color-scheme - it helps to detect user come from which color theme (dark/light)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // if user system theme is dark (means media Query match) then initialTheme dark else light
    const initialTheme = mediaQuery.matches ? "dark" : "light";
    setSystemTheme(initialTheme);

    // when user change
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  //^ fun - 1st using if else and check theme
  // const SWITCH_THEME = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else if (theme === "dark") {
  //     setTheme("light");
  //   } else {
  //     setTheme(systemTheme === "dark" ? "light" : "dark");
  //   }
  // };

  //^ fun - 2nd way using switch case
  const SWITCH_THEME = () => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }
      case "dark": {
        setTheme("light");
        return;
      }
      case "system": {
        setTheme(systemTheme === "dark" ? "light" : "dark");
        return;
      }
    }
  };

  return (
    <button
      onClick={SWITCH_THEME}
      aria-label="Toggle theme"
      title="Toggle Dark/Light Mode"
      className="relative flex items-center justify-center rounded-full border border-neutral-200 p-4 dark:border-neutral-800"
    >
      <SunIcon className="absolute inset-0 m-auto size-4 shrink-0 scale-100 text-neutral-500 transition-all duration-300 dark:scale-0 dark:rotate-45" />
      <MoonIcon className="absolute inset-0 m-auto size-4 shrink-0 scale-0 rotate-45 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:text-neutral-200" />
    </button>
  );
};

"use client";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <MdLightMode />
      <label className="relative inline-flex items-center cursor-pointer">
        {mounted &&
          (currentTheme === "dark" ? (
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={() => setTheme("dark")}
            />
          ))}
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600"></div>
      </label>
      <BsFillMoonFill />
    </>
  );
}

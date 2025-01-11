"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@headlessui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Switch
      checked={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative inline-flex items-center h-8 w-16 rounded-full
        transition-colors duration-200 ease-in-out
        ${isDark ? "bg-amber-600" : "bg-gray-200"}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-opacity-75
      `}
    >
      <span className="sr-only">Toggle theme</span>

      {/* Icons container */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <MdLightMode
          className={`w-4 h-4 transition-opacity duration-200 
            ${isDark ? "opacity-0" : "opacity-100 text-amber-600"}`}
        />
        <MdDarkMode
          className={`w-4 h-4 transition-opacity duration-200 
            ${isDark ? "opacity-100 text-white" : "opacity-0"}`}
        />
      </div>

      {/* Sliding thumb */}
      <div
        className={`
          bg-white rounded-full w-6 h-6 shadow-md transform transition-transform duration-200
          flex items-center justify-center
          ${isDark ? "translate-x-9" : "translate-x-1"}
        `}
      >
        {isDark ? (
          <MdDarkMode className="w-4 h-4 text-amber-600" />
        ) : (
          <MdLightMode className="w-4 h-4 text-amber-600" />
        )}
      </div>
    </Switch>
  );
}

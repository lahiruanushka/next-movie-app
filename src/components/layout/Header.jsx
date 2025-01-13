"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import ThemeSwitch from "../ThemeSwitch";
import { FiFilm } from "react-icons/fi";
import SearchBox from "../SearchBox";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link
      href={address}
      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors dark:text-gray-200 dark:hover:bg-gray-800"
    >
      <Icon className="text-lg" />
      <span className="capitalize font-medium">{title}</span>
    </Link>
  );
};

const MobileMenuItem = ({ title, address, Icon }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link
          href={address}
          className={`flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-200 ${
            active
              ? "bg-amber-50 text-amber-600 dark:bg-gray-800 dark:text-amber-500"
              : ""
          }`}
        >
          <Icon className="text-lg" />
          <span className="capitalize font-medium">{title}</span>
        </Link>
      )}
    </Menu.Item>
  );
};

const Header = () => {
  const menuItems = [
    { title: "home", address: "/", Icon: AiFillHome },
    { title: "about", address: "/about", Icon: AiFillInfoCircle },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b dark:bg-gray-900 dark:border-gray-800">
        <nav className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg transform group-hover:-rotate-6 transition-transform">
                <FiFilm className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-xl font-bold text-amber-500">
                MovieFinder
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.title}
                  title={item.title}
                  address={item.address}
                  Icon={item.Icon}
                />
              ))}
              <ThemeSwitch />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Menu as="div" className="relative inline-block text-left">
                <div className="flex items-center gap-2">
                  <ThemeSwitch />
                  <Menu.Button className="p-2 hover:bg-gray-100 rounded-lg transition-colors dark:hover:bg-gray-800">
                    {({ open }) =>
                      open ? (
                        <AiOutlineClose className="text-2xl dark:text-gray-200" />
                      ) : (
                        <AiOutlineMenu className="text-2xl dark:text-gray-200" />
                      )
                    }
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-lg shadow-lg border focus:outline-none dark:bg-gray-900 dark:border-gray-800 z-[60]">
                  <div className="py-1">
                    {menuItems.map((item) => (
                      <MobileMenuItem
                        key={item.title}
                        title={item.title}
                        address={item.address}
                        Icon={item.Icon}
                      />
                    ))}
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>

          {/* Search Box */}
          <div className="pb-4">
            <SearchBox />
          </div>
        </nav>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-28" />
    </>
  );
};

export default Header;

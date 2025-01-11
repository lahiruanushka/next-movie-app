"use client";

import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillVideoCamera,
} from "react-icons/ai";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link
      href={address}
      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors"
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
          className={`flex items-center gap-2 px-4 py-2 text-gray-700 ${
            active ? "bg-amber-50 text-amber-600" : ""
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-amber-500 p-2 rounded-lg transform group-hover:-rotate-6 transition-transform">
              <AiFillVideoCamera className="text-xl text-white" />
            </div>
            <span className="text-xl font-bold text-amber-500">
              MovieFinder
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                address={item.address}
                Icon={item.Icon}
              />
            ))}
          </div>

          {/* Mobile Menu */}
          <Menu as="div" className="relative md:hidden">
            <Menu.Button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              {({ open }) =>
                open ? (
                  <AiOutlineClose className="text-2xl" />
                ) : (
                  <AiOutlineMenu className="text-2xl" />
                )
              }
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-lg shadow-lg border focus:outline-none">
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
      </nav>
    </header>
  );
};

export default Header;

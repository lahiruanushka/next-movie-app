"use client";

import React from "react";
import { Tab } from "@headlessui/react";
import { BiTrendingUp, BiStar, BiCameraMovie } from "react-icons/bi";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const MovieFilterNavigation = () => {
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get("genre");

  const filterOptions = [
    {
      title: "Trending",
      param: "fetchTrending",
      icon: BiTrendingUp,
      description: "Most popular content this week",
    },
    {
      title: "Top Rated",
      param: "fetchTopRated",
      icon: BiStar,
      description: "Highest rated movies of all time",
    },
  ];

  // Find the index of the current tab
  const defaultIndex =
    filterOptions.findIndex((option) => option.param === currentGenre) || 0;

  return (
    <nav className="sticky top-16 z-40 w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 mb-10 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Tab.Group defaultIndex={defaultIndex}>
          <Tab.List className="flex flex-wrap gap-2 justify-center">
            {filterOptions.map((option) => (
              <Tab key={option.param} as={React.Fragment}>
                {({ selected }) => (
                  <Link
                    href={`/?genre=${option.param}`}
                    className={`
                      relative group flex items-center gap-2 px-6 py-3 rounded-full
                      font-medium text-sm transition-all duration-300 outline-none
                      ${
                        selected
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/20 scale-105"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }
                    `}
                  >
                    <option.icon
                      className={`text-xl transition-transform duration-300 
                        ${selected ? "animate-pulse" : "group-hover:scale-110"}
                      `}
                    />
                    <span className="relative">
                      {option.title}
                      {selected && (
                        <span
                          className="absolute -bottom-1 left-0 w-full h-0.5 
                          bg-white/50 rounded-full"
                        />
                      )}
                    </span>

                    {/* Tooltip */}
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      pointer-events-none z-50 transform-gpu"
                    >
                      <div
                        className="bg-gray-900 dark:bg-gray-700 text-white px-3 py-2 
                        rounded-lg text-xs text-center shadow-lg whitespace-nowrap
                        relative"
                      >
                        {option.description}
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-[1px]
                          border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"
                        />
                      </div>
                    </div>
                  </Link>
                )}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    </nav>
  );
};

export default MovieFilterNavigation;

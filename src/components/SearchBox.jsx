// components/SearchBox.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch, FiX } from "react-icons/fi";
import { Transition } from "@headlessui/react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    setIsLoading(true);
    router.push(`/search/${encodeURIComponent(search.trim())}`);
    setIsLoading(false);
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="relative group">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-14 pl-12 pr-12 rounded-2xl 
                     bg-white dark:bg-gray-800 
                     border border-gray-200 dark:border-gray-700
                     focus:border-amber-500 dark:focus:border-amber-500
                     focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-500/20
                     outline-none transition-all duration-200
                     text-gray-900 dark:text-gray-100
                     placeholder-gray-500 dark:placeholder-gray-400"
          />

          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 
                            w-5 h-5 text-gray-400 dark:text-gray-500"
          />

          <Transition
            show={search.length > 0}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-20 top-1/2 -translate-y-1/2 
                       p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
                       text-gray-400 dark:text-gray-500
                       transition-colors duration-200"
            >
              <FiX className="w-4 h-4" />
            </button>
          </Transition>

          <button
            type="submit"
            disabled={!search.trim() || isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2
                     px-4 py-2 rounded-xl
                     bg-amber-500 hover:bg-amber-600 
                     disabled:bg-gray-300 dark:disabled:bg-gray-700
                     text-white disabled:text-gray-500
                     transition-all duration-200
                     text-sm font-medium"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Search"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

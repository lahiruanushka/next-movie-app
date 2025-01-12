import React from "react";
import { FiLoader, FiFilm } from "react-icons/fi";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <div className="p-2 rounded-lg transform group-hover:-rotate-6 transition-transform">
            <FiFilm className="w-6 h-6 text-amber-500" />
          </div>
          <span className="text-xl font-bold text-amber-500">MovieFinder</span>
        </div>

        {/* Loading Animation */}
        <div className="relative flex justify-center">
          <FiLoader className="w-16 h-16 animate-spin text-amber-500" />
          <div className="absolute inset-0 animate-ping opacity-50">
            <FiLoader className="w-16 h-16 text-amber-500/50" />
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white animate-pulse">
            Loading Amazing Content
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we fetch the latest movies for you
          </p>
        </div>

        {/* Loading Progress */}
        <div className="w-full max-w-xs mx-auto">
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-500 animate-[loading_1s_ease-in-out_infinite]"
              style={{ width: "75%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

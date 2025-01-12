"use client";

import React from "react";
import Link from "next/link";
import { FiAlertCircle, FiHome, FiRefreshCcw } from "react-icons/fi";

export default function ErrorPage({ error, reset }) {
  // Extract error message safely
  const errorMessage =
    error?.message || error?.toString() || "Something went wrong";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
            <FiAlertCircle className="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Oops! Something Went Wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-400">{errorMessage}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 
                     rounded-lg bg-amber-500 hover:bg-amber-600 text-white 
                     transition-colors duration-200"
          >
            <FiHome className="w-5 h-5" />
            Back to Home
          </Link>

          {reset && (
            <button
              onClick={() => {
                try {
                  reset();
                } catch (e) {
                  console.error("Reset failed:", e);
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 
                       rounded-lg border border-gray-300 dark:border-gray-600 
                       text-gray-700 dark:text-gray-300 hover:bg-gray-100 
                       dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <FiRefreshCcw className="w-5 h-5" />
              Try Again
            </button>
          )}
        </div>

        {/* Support Link */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          If the problem persists, please{" "}
          <Link
            href="/contact"
            className="text-amber-500 hover:text-amber-600 dark:text-amber-400 
                     dark:hover:text-amber-300"
          >
            contact support
          </Link>
        </p>
      </div>
    </div>
  );
}

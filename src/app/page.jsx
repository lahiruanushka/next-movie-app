import MovieFilterNavigation from "@/components/MovieFilterNavigation";
import React, { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieFilterNavigation />
      </Suspense>

      <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Welcome to MovieFinder
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Find your favorite movies and TV shows here.
        </p>
      </div>
    </>
  );
};

export default HomePage;

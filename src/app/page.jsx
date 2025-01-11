"use client";

import React, { Suspense } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiLoader, FiFilm, FiAlertCircle, FiX } from "react-icons/fi";
import MovieFilterNavigation from "@/components/MovieFilterNavigation";
import Results from "@/components/Results";

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center h-32 gap-4">
    <FiLoader className="w-10 h-10 animate-spin text-amber-500" />
    <p className="text-gray-600 dark:text-gray-300 animate-pulse">
      Loading amazing content...
    </p>
  </div>
);

const ErrorDialog = ({ isOpen, setIsOpen, message }) => (
  <Transition show={isOpen} as={React.Fragment}>
    <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
      <Transition.Child
        as={React.Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
              <div className="flex items-start gap-3">
                <FiAlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div className="flex-1">
                  <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                    Error Loading Movies
                  </Dialog.Title>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {message}
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

const WelcomeHeader = () => (
  <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800/50 dark:to-gray-800">
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-start gap-4">
        <FiFilm className="w-12 h-12 text-amber-500 animate-bounce" />
        <div>
          <h1 className="text-4xl font-bold text-amber-500">
            Welcome to MovieFinder
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Discover the latest trending movies and top-rated classics. Your
            gateway to endless entertainment starts here.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const HomePage = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const [isErrorOpen, setIsErrorOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ErrorDialog
          isOpen={isErrorOpen}
          setIsOpen={setIsErrorOpen}
          message={errorMessage}
        />

        <Suspense fallback={<LoadingSpinner />}>
          <MovieFilterNavigation />
        </Suspense>

        <main>
          <WelcomeHeader />

          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <Results results={results} />
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    setErrorMessage(error.message);
    setIsErrorOpen(true);
    return null;
  }
};

export default HomePage;

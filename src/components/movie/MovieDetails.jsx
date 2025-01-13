"use client";

import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  FiCalendar,
  FiStar,
  FiClock,
  FiHeart,
  FiShare2,
  FiPlayCircle,
  FiImage,
} from "react-icons/fi";

const MovieDetails = ({ movie }) => {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  // Fallback image component when no backdrop/poster is available
  const ImageFallback = ({ className }) => (
    <div
      className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${className}`}
    >
      <FiImage className="w-12 h-12 text-gray-400 dark:text-gray-500" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section with Backdrop */}
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
        {movie.backdrop_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={`${movie.title} backdrop`}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <ImageFallback className="h-full w-full" />
        )}

        {/* Floating Action Buttons */}
        <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
          <button
            className="p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Add to favorites"
          >
            <FiHeart className="w-6 h-6 text-red-500" />
          </button>
          <button
            className="p-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Share movie"
          >
            <FiShare2 className="w-6 h-6 text-blue-500" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Poster */}
            <div className="flex-shrink-0">
              {movie.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                  width={300}
                  height={450}
                  className="rounded-lg shadow-lg"
                />
              ) : (
                <div className="w-[300px] h-[450px] rounded-lg shadow-lg">
                  <ImageFallback className="w-full h-full rounded-lg" />
                </div>
              )}

              <button
                onClick={() => setIsTrailerOpen(true)}
                className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
                aria-label="Watch trailer"
              >
                <FiPlayCircle className="w-5 h-5" />
                Watch Trailer
              </button>
            </div>

            {/* Details */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {movie.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <FiCalendar className="w-5 h-5" />
                  <span>
                    {movie.release_date
                      ? new Date(movie.release_date).getFullYear()
                      : "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <FiClock className="w-5 h-5" />
                  <span>
                    {movie.runtime ? formatRuntime(movie.runtime) : "N/A"}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-amber-500">
                  <FiStar className="w-5 h-5" />
                  <span>
                    {movie.vote_average
                      ? `${movie.vote_average.toFixed(1)} / 10`
                      : "N/A"}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {movie.overview || "No overview available."}
              </p>

              {/* Additional Details */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <DetailCard
                  title="Genre"
                  content={
                    movie.genres?.length > 0
                      ? movie.genres.map((g) => g.name).join(", ")
                      : "N/A"
                  }
                />
                <DetailCard
                  title="Language"
                  content={
                    movie.original_language
                      ? movie.original_language.toUpperCase()
                      : "N/A"
                  }
                />
                <DetailCard title="Status" content={movie.status || "N/A"} />
                <DetailCard
                  title="Budget"
                  content={
                    movie.budget
                      ? `$${(movie.budget / 1000000).toFixed(1)}M`
                      : "N/A"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      <Transition appear show={isTrailerOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsTrailerOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl rounded-lg bg-white dark:bg-gray-800 p-6">
                  <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    {movie.title} - Official Trailer
                  </Dialog.Title>
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg">
                    {/* Add actual trailer embed here */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400">
                        Trailer placeholder
                      </span>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

const DetailCard = ({ title, content }) => (
  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
      {title}
    </h3>
    <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">
      {content}
    </p>
  </div>
);

export default MovieDetails;

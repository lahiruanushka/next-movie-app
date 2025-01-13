import React from "react";
import { FiFilm } from "react-icons/fi";
import MovieFilterNavigation from "@/components/MovieFilterNavigation";
import Results from "@/components/movie/Results";
import ClientErrorBoundary from "@/components/ClientErrorBoundary";

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

async function getMovies(genre) {
  const apiEndpoint =
    genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`;

  const res = await fetch(
    `https://api.themoviedb.org/3${apiEndpoint}?api_key=${process.env.API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  return data.results;
}

export default async function HomePage({ searchParams }) {
  const genre = searchParams?.genre || "fetchTrending";
  const results = await getMovies(genre);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ClientErrorBoundary>
        <MovieFilterNavigation />
        <main>
          <WelcomeHeader />
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <Results results={results} />
            </div>
          </div>
        </main>
      </ClientErrorBoundary>
    </div>
  );
}

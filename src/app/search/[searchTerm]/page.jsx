// app/search/[searchTerm]/page.jsx
import { Suspense } from "react";
import Results from "@/components/movie/Results";
import { FiAlertCircle, FiLoader } from "react-icons/fi";

async function fetchSearchResults(searchTerm) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }

  return res.json();
}

export default async function SearchPage({ params }) {
  const searchTerm = decodeURIComponent(params.searchTerm);
  const data = await fetchSearchResults(searchTerm);
  const results = data.results;

  return (
    <div className="min-h-[50vh] bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Search Results
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Found {results.length} results for "{searchTerm}"
          </p>
        </div>

        {/* Results */}
        <Suspense fallback={<LoadingState />}>
          {results.length === 0 ? (
            <EmptyState searchTerm={searchTerm} />
          ) : (
            <Results results={results} />
          )}
        </Suspense>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex items-center justify-center py-12">
      <FiLoader className="w-8 h-8 text-amber-500 animate-spin" />
    </div>
  );
}

function EmptyState({ searchTerm }) {
  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-full">
          <FiAlertCircle className="w-8 h-8 text-amber-500" />
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        No results found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        We couldn't find any movies matching "{searchTerm}". Try checking your
        spelling or using different keywords.
      </p>
    </div>
  );
}

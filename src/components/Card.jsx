import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <Link href={`/movie/${result.id}`}>
      <div className="aspect-video relative">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt={result.title || result.name}
          fill
          className="object-cover group-hover:opacity-75 transition-opacity duration-300"
        />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white truncate">
          {result.title || result.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {result.overview}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{result.release_date || result.first_air_date}</span>
          <div className="flex items-center space-x-1">
            <FiThumbsUp className="w-4 h-4" />
            <span>{result.vote_count}</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
  );
}

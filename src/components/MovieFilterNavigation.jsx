// MovieFilterNavigation.js
'use client';

import { BiTrendingUp, BiStar } from 'react-icons/bi';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

// FilterNavItem component
const FilterNavItem = ({ title, param, icon: Icon }) => {
  const searchParams = useSearchParams();
  const currentGenre = searchParams.get('genre');
  const isActive = currentGenre === param;
  
  return (
    <Link
      href={`/?genre=${param}`}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-full transition-all
        hover:bg-amber-200 dark:hover:bg-gray-700
        ${isActive ? 
          'bg-amber-500 text-white dark:bg-amber-600 dark:text-white shadow-md transform scale-105' : 
          'text-gray-700 dark:text-gray-200'
        }
      `}
    >
      <Icon className={`text-lg ${isActive ? 'animate-pulse' : ''}`} />
      <span className="font-medium">{title}</span>
    </Link>
  );
};

// Main component
export default function MovieFilterNavigation() {
  const filterOptions = [
    {
      title: 'Trending',
      param: 'fetchTrending',
      icon: BiTrendingUp
    },
    {
      title: 'Top Rated',
      param: 'fetchTopRated',
      icon: BiStar
    }
  ];

  return (
    <nav className="sticky top-16 z-40 backdrop-blur-sm bg-amber-50/80 dark:bg-gray-900/80 border-b border-amber-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4 py-3">
          {filterOptions.map((option) => (
            <FilterNavItem
              key={option.param}
              title={option.title}
              param={option.param}
              icon={option.icon}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
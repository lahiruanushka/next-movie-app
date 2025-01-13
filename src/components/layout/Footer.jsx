import React from "react";
import Link from "next/link";
import {
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiFilm,
  FiHeart,
  FiTrendingUp,
  FiStar,
  FiClock,
} from "react-icons/fi";

const Footer = () => {
  const navigation = [
    { name: "Trending", href: "/?genre=fetchTrending", icon: FiTrendingUp },
    { name: "Top Rated", href: "/?genre=fetchTopRated", icon: FiStar },
  ];

  const social = [
    { name: "Twitter", href: "www.twitter.com", icon: FiTwitter },
    { name: "Instagram", href: "www.instagram.com", icon: FiInstagram },
    { name: "GitHub", href: "www.github.com", icon: FiGithub },
    { name: "Email", href: "mailto:example@mail.com", icon: FiMail },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg transform group-hover:-rotate-6 transition-transform">
                <FiFilm className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-xl font-bold text-amber-500">
                MovieFinder
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Your gateway to discovering amazing movies and TV shows.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 
                    hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-500 
                  dark:hover:text-amber-400 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FiClock className="w-4 h-4" />
              <span>Updated hourly • Powered by TMDB API</span>
            </div>

            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              Made with <FiHeart className="w-4 h-4 text-red-500" /> by
              MovieFinder Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

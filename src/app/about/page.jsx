'use client';

import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { BiMoviePlay, BiSearch, BiHeart } from 'react-icons/bi';

export default function About() {
  const features = [
    {
      icon: <BiMoviePlay className="w-6 h-6" />,
      title: "Extensive Movie Database",
      description: "Access to thousands of movies with detailed information, ratings, and reviews from our comprehensive database."
    },
    {
      icon: <BiSearch className="w-6 h-6" />,
      title: "Smart Search",
      description: "Find exactly what you're looking for with our intelligent search system that understands your preferences."
    },
    {
      icon: <BiHeart className="w-6 h-6" />,
      title: "Personalized Recommendations",
      description: "Get movie suggestions tailored to your taste based on your watching history and preferences."
    }
  ];

  const socialLinks = [
    {
      icon: <AiFillGithub className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com"
    },
    {
      icon: <AiFillLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com"
    },
    {
      icon: <AiFillMail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:email@example.com"
    }
  ];

  return (
    <main className="min-h-screen pt-20 px-4 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
          About MovieFinder
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          MovieFinder is your ultimate destination for discovering and exploring films. 
          Our platform helps movie enthusiasts find their next favorite film with ease.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-amber-500 dark:hover:border-amber-500 transition-colors"
            >
              <div className="text-amber-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto py-12">
        <div className="bg-amber-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We believe that every great movie deserves to be discovered. Our mission is to connect 
            movie lovers with films that resonate with them, making the journey of finding the 
            perfect movie as enjoyable as watching it. Whether you're a casual viewer or a 
            dedicated cinephile, MovieFinder is designed to enhance your movie-watching experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">
          Connect With Us
        </h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors group"
            >
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-amber-500">
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
// components/HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://twomonkeystravelgroup.com/wp-content/uploads/2020/03/Basic-Filipino-Phrases-You-Need-To-Learn-before-Traveling-to-the-Philippines.jpg)" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4 sm:px-6 text-center">
        {/* Title and Subtitle */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 px-2">Discover Your Next Destination</h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 px-4 max-w-3xl">Explore the world's most beautiful places with Infinite Journeys</p>

        {/* Search Bar */}
        <div className="w-full max-w-lg px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
            <input
              type="text"
              className="w-full px-4 py-3 text-gray-800 focus:outline-none text-sm sm:text-base"
              placeholder="Where do you want to go?"
            />
            <button className="px-6 py-3 bg-blue-950 text-white font-semibold hover:bg-blue-800 transition duration-300 whitespace-nowrap text-sm sm:text-base">
              Search
            </button>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-6 sm:mt-8 px-4">
          <a href="#" className="inline-block bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:from-blue-800 hover:to-blue-950 transition duration-300 text-sm sm:text-base">
            Explore Popular Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

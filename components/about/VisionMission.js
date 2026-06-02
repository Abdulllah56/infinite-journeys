// components/MissionVision.js
"use client"
import React from 'react';

const CompassIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

const SmileHeartIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    <path d="M15 9h.01M9 9h.01M10 13a3 3 0 0 0 4 0"></path>
  </svg>
);

const TagIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const VisionEyeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 3v1M12 20v1M4 5l1.5 1.5M18.5 17.5L20 19M4 19l1.5-1.5M18.5 6.5L20 5"></path>
  </svg>
);

const ShieldCheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <path d="M9 12l2 2 4-4"></path>
  </svg>
);

const NetworkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const MountainSparkIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3l4 8 5-5 5 15H2L8 3z"></path>
    <circle cx="18" cy="5" r="1.5"></circle>
  </svg>
);

const CrownIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="2 20 22 20 19 6 15 12 12 4 9 12 5 6 2 20"></polygon>
  </svg>
);

const FlameIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
  </svg>
);

const UsersIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const MissionVision = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50 to-white py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Our Mission & Vision
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            What Drives Us Forward Every Day
          </p>
        </div>

        {/* Mission and Vision Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-90"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-blue-100 transform group-hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mr-6">
                  <CompassIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  Our Mission
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Infinite Journeys, our mission is simple: to create extraordinary travel experiences that
                inspire and uplift. We strive to make the world's most breathtaking destinations accessible to all,
                without compromising on quality or service.
              </p>

              {/* Mission Points */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <SmileHeartIcon className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Your happiness and comfort are our top priorities</span>
                </div>
                <div className="flex items-center">
                  <TagIcon className="w-6 h-6 text-yellow-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Committed to providing affordable, unforgettable journeys</span>
                </div>
                <div className="flex items-center">
                  <GlobeIcon className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Making breathtaking destinations accessible to everyone</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-90"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-purple-100 transform group-hover:scale-105 transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mr-6">
                  <VisionEyeIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">
                  Our Vision
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our vision is to become the most trusted travel partner for explorers around the globe. We aim to
                redefine what it means to travel, offering personalized and enriching experiences that connect
                people to the world and to each other.
              </p>

              {/* Vision Points */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <ShieldCheckIcon className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Most trusted travel partner globally</span>
                </div>
                <div className="flex items-center">
                  <NetworkIcon className="w-6 h-6 text-pink-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Connecting people through transformative experiences</span>
                </div>
                <div className="flex items-center">
                  <MountainSparkIcon className="w-6 h-6 text-indigo-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">Inspiring journeys of discovery and growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <CrownIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Excellence</h4>
              <p className="text-blue-200 leading-relaxed">
                We strive for excellence in every aspect of our service, ensuring each journey exceeds expectations.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <FlameIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Passion</h4>
              <p className="text-blue-200 leading-relaxed">
                Our passion for travel and exploration drives us to create meaningful and memorable experiences.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Community</h4>
              <p className="text-blue-200 leading-relaxed">
                We believe in building lasting relationships and creating a community of passionate travelers.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white py-4 px-12 rounded-full text-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl cursor-pointer group">
            
            <span>Join Our Mission Today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
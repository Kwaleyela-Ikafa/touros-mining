import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pb-10" aria-label="Hero section">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3064BD 1px, transparent 1px), radial-gradient(circle at 75% 75%, #3064BD 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#3064BD] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-[#3064BD] rounded-full opacity-40 animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 left-20 w-1.5 h-1.5 bg-[#3064BD] rounded-full opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-[#3064BD]/10 text-[#3064BD] rounded-full text-sm font-semibold tracking-wide uppercase" role="text">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Trusted QA Partner
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Testing
              <span className="block text-[#3064BD]">The Future</span>
              <span className="block text-[#1a1a1a]">Of Software</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#4a4a4a] mb-10 max-w-2xl leading-relaxed">
              Expert software testing and quality assurance services in Lusaka, Zambia.
              We ensure your software meets the highest standards of performance, security, and reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16" role="group" aria-label="Call to action buttons">
              <Link
                to="/services"
                className="group bg-[#3064BD] hover:bg-[#2554a8] text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#3064BD]/25 hover:transform hover:-translate-y-1 text-center focus:outline-none focus:ring-4 focus:ring-[#3064BD]/50"
                aria-label="View our QA testing services"
              >
                <span>View Services</span>
                <svg className="inline-block ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                to="/contact"
                className="group border-2 border-[#3064BD] hover:border-[#2554a8] text-[#3064BD] hover:text-[#2554a8] px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-[#3064BD]/5 text-center focus:outline-none focus:ring-4 focus:ring-[#3064BD]/50"
                aria-label="Schedule a consultation with our QA team"
              >
                <span>Schedule Consultation</span>
                <svg className="inline-block ml-3 w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>

          </div>

          {/* Image */}
          <div className="relative lg:order-last">
            <div className="relative">
              {/* Main Image */}
              <div className="relative">
                <img
                  src="https://i.postimg.cc/Znq6TgGq/hero-image.webp"
                  alt="Software quality assurance testing environment with a computer"
                  className="w-full h-auto rounded-3xl shadow-2xl hover:transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  width="600"
                  height="400"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-white border border-gray-200 rounded-2xl p-4 shadow-xl" role="status" aria-label="Active testing status">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Testing Active</div>
                    <div className="text-xs text-gray-600">Continuous Quality</div>
                  </div>
                </div>
              </div>

              {/* Quality Badge
              <div className="absolute -bottom-6 -right-6 bg-[#3064BD] text-white rounded-2xl p-6 shadow-xl" role="img" aria-label="ISO 25010 Certified">
                <div className="text-center">
                  <div className="text-lg font-bold">ISO 25010</div>
                  <div className="text-sm opacity-90">Certified</div>
                </div>
              </div> */}
            </div>

            {/* Background Decorations */}
            <div className="absolute -inset-8 bg-gradient-to-br from-[#3064BD]/5 to-transparent rounded-3xl -z-10" aria-hidden="true"></div>
            <div className="absolute -inset-12 bg-gradient-to-tr from-gray-50 to-transparent rounded-3xl -z-20" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none focus:ring-4 focus:ring-[#3064BD]/50 rounded-lg p-2"
        aria-label="Scroll down to discover more content"
      >
        <div className="flex flex-col items-center space-y-2 text-[#4a4a4a] hover:text-[#3064BD] transition-colors duration-300 cursor-pointer">
          <span className="text-sm font-medium">Discover More</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </button>
    </section>
  );
};

export default Hero;
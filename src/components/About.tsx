import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#1a2332] relative overflow-hidden" aria-labelledby="about-heading">
      {/* Clean gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] via-[#1f2937] to-[#1a2332]/95" aria-hidden="true"></div>

      {/* Simple geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3064BD]/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3064BD]/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://i.postimg.cc/RCfjxYMc/about-1.webp"
                alt="Professional software testing team collaborating on quality assurance tasks"
                className="w-full h-auto rounded-2xl shadow-2xl"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#3064BD]/20 to-transparent rounded-3xl -z-10" aria-hidden="true"></div>
            <div className="absolute -inset-8 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl -z-20" aria-hidden="true"></div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#3064BD]/30 text-[#60a5fa] rounded-lg text-sm font-semibold tracking-wide uppercase backdrop-blur-sm border border-[#3064BD]/50" role="text">
                About Parse Technologies
              </span>
            </div>

            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Lusaka's Premier
              <span className="block text-gray-200">QA Partner</span>
            </h2>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Parse Technologies and Consulting is Lusaka's premier software testing and quality
              assurance company. We combine cutting-edge testing methodologies with deep industry
              expertise to help businesses deliver flawless software solutions.
            </p>

            <p className="text-lg text-gray-200 mb-10 leading-relaxed">
              Based in Lusaka, Zambia, we serve clients across Africa and beyond, offering
              flexible engagement models from project-based testing to long-term QA partnerships.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-10" role="list" aria-label="Company highlights">
              <div className="flex items-center space-x-3" role="listitem">
                <div className="w-12 h-12 bg-[#3064BD]/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#3064BD]/50" aria-hidden="true">
                  <svg className="w-6 h-6 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Certified Experts</div>
                  <div className="text-sm text-gray-300">Experienced QA professionals</div>
                </div>
              </div>

              <div className="flex items-center space-x-3" role="listitem">
                <div className="w-12 h-12 bg-[#3064BD]/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#3064BD]/50" aria-hidden="true">
                  <svg className="w-6 h-6 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Modern Methods</div>
                  <div className="text-sm text-gray-300">Latest testing tools</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="group bg-[#3064BD] hover:bg-[#2554a8] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#3064BD]/25 hover:transform hover:-translate-y-1 text-center focus:outline-none focus:ring-4 focus:ring-[#3064BD]/50"
                aria-label="Learn more about Parse Technologies"
              >
                Learn More About Us
                <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
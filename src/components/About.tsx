import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#515760] relative overflow-hidden">
      {/* Clean gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#515760] via-[#515760] to-[#515760]/95"></div>
      
      {/* Simple geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4712f]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://i.postimg.cc/d03CXwQj/pexels-tomfisk-2101137.webp" 
                alt="CAT mining machinery operating in sandy terrain - Heavy equipment for mineral extraction"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#f4712f]/20 to-transparent rounded-3xl -z-10"></div>
            <div className="absolute -inset-8 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl -z-20"></div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-[#f4712f]/20 text-[#f4712f] rounded-lg text-sm font-semibold tracking-wide uppercase backdrop-blur-sm border border-[#f4712f]/30">
                About Touros Mining
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Leading Zambia's
              <span className="block text-gray-200">Mining Excellence</span>
            </h2>
            
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              As one of Zambia's premier mining companies, Touros Mining delivers comprehensive 
              solutions from extraction to export. We combine cutting-edge technology with 
              sustainable practices to drive economic growth while serving our communities.
            </p>
            
            <p className="text-lg text-gray-200 mb-10 leading-relaxed">
              Our integrated approach ensures efficient operations across the entire mining 
              value chain, making us a trusted partner for businesses worldwide.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#f4712f]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#f4712f]/30">
                  <svg className="w-6 h-6 text-[#f4712f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Advanced Technology</div>
                  <div className="text-sm text-gray-300">Modern mining solutions</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#f4712f]/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-[#f4712f]/30">
                  <svg className="w-6 h-6 text-[#f4712f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Sustainable Practices</div>
                  <div className="text-sm text-gray-300">Environmental responsibility</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="group bg-[#f4712f] hover:bg-[#f4712f]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4712f]/25 hover:transform hover:-translate-y-1 text-center"
              >
                Learn More About Us
                <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
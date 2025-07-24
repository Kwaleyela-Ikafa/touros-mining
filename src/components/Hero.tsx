import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pb-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #f4712f 1px, transparent 1px), radial-gradient(circle at 75% 75%, #f4712f 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-2 h-2 bg-[#f4712f] rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-1 h-1 bg-[#f4712f] rounded-full opacity-40 animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 left-20 w-1.5 h-1.5 bg-[#f4712f] rounded-full opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-[#f4712f]/10 text-[#f4712f] rounded-full text-sm font-semibold tracking-wide uppercase">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Leading Mining Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Mining
              <span className="block text-[#f4712f]">The Future</span>
              <span className="block text-gray-700">of Zambia</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Advanced mining solutions delivering excellence from extraction to export. 
              Powering industries with precision, reliability, and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <button className="group bg-[#f4712f] hover:bg-[#f4712f]/90 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#f4712f]/25 hover:transform hover:-translate-y-1">
                <span>Explore Our Services</span>
                <svg className="inline-block ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button className="group border-2 border-gray-200 hover:border-[#f4712f] text-gray-700 hover:text-[#f4712f] px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-[#f4712f]/5">
                <span>Get In Touch</span>
                <svg className="inline-block ml-3 w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-last">
            <div className="relative">
              {/* Main Image */}
              <div className="relative ">
                <img 
                  src="https://i.postimg.cc/zX5Ykfp6/pexels-pixabay-461789.webp" 
                  alt="CAT mining machinery operating in sandy terrain - Advanced heavy equipment for mineral extraction"
                  className="w-full h-auto rounded-3xl shadow-2xl hover:transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-white border border-gray-200 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Operations Active</div>
                    <div className="text-xs text-gray-500">24/7 Monitoring</div>
                  </div>
                </div>
              </div>
              
              {/* Quality Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#f4712f] text-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-lg font-bold">Premium</div>
                  <div className="text-sm opacity-90">Equipment</div>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -inset-8 bg-gradient-to-br from-[#f4712f]/5 to-transparent rounded-3xl -z-10"></div>
            <div className="absolute -inset-12 bg-gradient-to-tr from-gray-50 to-transparent rounded-3xl -z-20"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-gray-400 hover:text-[#f4712f] transition-colors duration-300 cursor-pointer">
          <span className="text-sm font-medium">Discover More</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
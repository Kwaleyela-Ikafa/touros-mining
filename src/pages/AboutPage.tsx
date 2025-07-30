import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Safety First',
      description: 'We prioritize the safety of our workers and communities above all else.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology to improve efficiency and sustainability.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Environmental Responsibility',
      description: 'We are committed to sustainable mining practices that protect our environment.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Community Impact',
      description: 'We believe in creating lasting positive impact in the communities we operate.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#05102d] mb-6">
              About <span className="text-[#f4712f]">Touros Mining</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#515760] max-w-3xl mx-auto leading-relaxed">
              Leading Zambia's mining industry with integrity, innovation, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#05102d] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-[#515760] mb-6 leading-relaxed">
                Touros Mining has established itself as one of Zambia's premier mining companies, 
                specializing in the extraction and export of precious minerals including gold, emerald, 
                copper concentrate, copper cathode, and manganese.
              </p>
              <p className="text-lg text-[#515760] mb-6 leading-relaxed">
                Founded with the vision of transforming Zambia's mining landscape, we combine 
                traditional mining expertise with modern technology to deliver exceptional results 
                while maintaining the highest standards of safety and environmental responsibility.
              </p>
              <p className="text-lg text-[#515760] leading-relaxed">
                Today, we serve as a trusted partner for global markets, providing comprehensive 
                mining solutions that span the entire value chain from extraction to export.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://i.postimg.cc/gJPPH6Rh/about.webp" 
                alt="Touros Mining operations" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#515760]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-[#f4712f]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#f4712f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To lead Zambia's mining industry by delivering exceptional value through 
                sustainable extraction, innovative technology, and responsible practices 
                that benefit our stakeholders and communities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-[#f4712f]/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#f4712f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                To be the most trusted and innovative mining company in Africa, 
                setting new standards for excellence, sustainability, and community 
                development in the mining industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05102d] mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[#515760] max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#f4712f]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#f4712f] group-hover:bg-[#f4712f] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#05102d] mb-3 group-hover:text-[#f4712f] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-[#515760] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership CTA */}
      <section className="py-16 bg-gradient-to-r from-[#05102d] to-[#515760]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with Industry Leaders?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover how our expertise and commitment to excellence can support your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-[#f4712f] hover:bg-[#f4712f]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
              View Our Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 hover:border-[#f4712f] text-white hover:text-[#f4712f] px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
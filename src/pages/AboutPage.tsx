import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const values = [
    {
      title: 'Quality Excellence',
      description: 'We are committed to delivering the highest quality assurance services in every project.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge testing tools and methodologies to deliver better results.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Client Partnership',
      description: 'We work closely with our clients as trusted partners, not just service providers.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Continuous Improvement',
      description: 'We continuously refine our processes and skills to stay ahead of industry trends.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen mt-20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[#05102d] mb-6">
              About <span className="text-[#3064BD]">Parse Technologies</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#515760] max-w-3xl mx-auto leading-relaxed">
              Lusaka's premier software testing and quality assurance partner, committed to delivering excellence.
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
                Parse Technologies and Consulting is Lusaka's premier software testing and quality
                assurance company. We combine cutting-edge testing methodologies with deep industry
                expertise to help businesses deliver flawless software solutions.
              </p>
              <p className="text-lg text-[#515760] mb-6 leading-relaxed">
                Based in Lusaka, Zambia, we serve clients across Africa and beyond, offering
                flexible engagement models from project-based testing to long-term QA partnerships.
              </p>
              <p className="text-lg text-[#515760] leading-relaxed">
                Our team of certified QA professionals brings years of experience across multiple
                industries, ensuring your software meets the highest standards of quality, performance,
                and security.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://i.postimg.cc/zGzzBg76/about-2.webp"
                alt="Parse Technologies QA team at work" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-[#3064BD]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-200 leading-relaxed">
                To empower businesses across Africa with world-class software testing and quality
                assurance services, ensuring every software product we touch meets the highest
                standards of performance, security, and reliability.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-[#3064BD]/30 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-200 leading-relaxed">
                To be Africa's most trusted software quality assurance partner,
                setting new standards for testing excellence and helping businesses
                deliver software that transforms industries and improves lives.
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
                <div className="w-16 h-16 bg-[#3064BD]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#3064BD] group-hover:bg-[#3064BD] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#05102d] mb-3 group-hover:text-[#3064BD] transition-colors duration-300">
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
            Ready to Partner with QA Experts?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover how our testing expertise and commitment to quality can elevate your software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-[#3064BD] hover:bg-[#3064BD]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
              View Our Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/30 hover:border-[#3064BD] text-white hover:text-[#3064BD] px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
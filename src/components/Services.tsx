import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: React.ReactNode;
}

const Services: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: 'Manual Testing',
      description: 'Comprehensive manual testing services to ensure your software functions perfectly across all scenarios and user interactions.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-[#3064BD]/20 to-[#3064BD]/40 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-[#3064BD]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        </div>
      )
    },
    {
      title: 'Automation Testing',
      description: 'Efficient automated testing solutions to accelerate your development cycle and ensure consistent quality across releases.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Performance Testing',
      description: 'Load, stress, and performance testing to ensure your applications can handle real-world usage and scale effectively.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Security Testing',
      description: 'Comprehensive security assessments to identify vulnerabilities and ensure your software is protected against threats.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      )
    },
    {
      title: 'Mobile Testing',
      description: 'Cross-platform mobile application testing for iOS and Android to ensure optimal user experience across devices.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
      )
    },
    {
      title: 'QA Consulting',
      description: 'Strategic quality assurance consulting to improve your testing processes and establish best practices.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden" aria-labelledby="services-heading">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3064BD]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#3064BD]/10 text-[#3064BD] rounded-lg text-sm font-semibold tracking-wide uppercase mb-4" role="text">
            Our Services
          </span>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-[#05102d] mb-6">
            Comprehensive QA
            <span className="block text-[#3d3d3d]">Solutions</span>
          </h2>
          <p className="text-xl text-[#3d3d3d] max-w-3xl mx-auto leading-relaxed">
            From manual testing to automation, we provide end-to-end quality assurance services that
            ensure your software meets the highest standards of performance and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16" role="list" aria-label="Quality assurance services">
          {services.slice(0, 4).map((service, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100 hover:border-[#3064BD]/20"
              role="listitem"
            >
              {/* Service Image */}
              <div className="mb-6 overflow-hidden rounded-xl" aria-hidden="true">
                {service.image}
              </div>

              {/* Icon & Title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#3064BD]/10 rounded-xl flex items-center justify-center text-[#3064BD] group-hover:bg-[#3064BD] group-hover:text-white transition-all duration-300" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#05102d] group-hover:text-[#3064BD] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#3d3d3d] leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                to="/services"
                className="group/btn text-[#3064BD] hover:text-[#2554a8] font-semibold text-sm transition-colors duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-[#3064BD] focus:ring-offset-2 rounded"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 border border-gray-100" role="region" aria-label="Call to action">
          <h3 className="text-3xl font-bold text-[#05102d] mb-4">
            Ready to Elevate Your Software Quality?
          </h3>
          <p className="text-lg text-[#3d3d3d] mb-8 max-w-2xl mx-auto">
            Discover how our comprehensive QA services can help you deliver flawless software
            and accelerate your development cycle with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Call to action buttons">
            <Link
              to="/services"
              className="group bg-[#3064BD] hover:bg-[#2554a8] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 text-center focus:outline-none focus:ring-4 focus:ring-[#3064BD]/50"
              aria-label="View all QA services"
            >
              View All Services
              <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="group border-2 border-[#3064BD] hover:border-[#2554a8] text-[#3064BD] hover:text-[#2554a8] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#3064BD]/5 text-center focus:outline-none focus:ring-4 focus:ring-[#3064BD]/50"
              aria-label="Request a QA consultation"
            >
              Request Consultation
              <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
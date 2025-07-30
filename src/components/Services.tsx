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
      title: 'Mining',
      description: 'Advanced mineral extraction using cutting-edge technology and sustainable practices for maximum efficiency.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L8 6v4l-3 3v6h14v-6l-3-3V6l-4-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 6h8M9 10h6M10 14h4" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 22h12" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 19l2-2M20 19l-2-2" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-[#f4712f]/20 to-[#f4712f]/40 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-[#f4712f]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2L8 6v4l-3 3v6h14v-6l-3-3V6l-4-4z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 6h8M9 10h6M10 14h4" />
            <circle cx="12" cy="17" r="1" fill="currentColor" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 22h12" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 19l2-2M20 19l-2-2" />
          </svg>
        </div>
      )
    },
    {
      title: 'Logistics',
      description: 'Comprehensive supply chain management from mine to global markets with efficient tracking and delivery.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="5" cy="6" r="2" strokeWidth={1.5} />
          <circle cx="12" cy="6" r="2" strokeWidth={1.5} />
          <circle cx="19" cy="6" r="2" strokeWidth={1.5} />
          <circle cx="5" cy="18" r="2" strokeWidth={1.5} />
          <circle cx="19" cy="18" r="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 6h3M14 6h3M5 8v8M19 8v8M7 18h10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 2M9 14l3-2" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="5" cy="6" r="2" strokeWidth={1} />
            <circle cx="12" cy="6" r="2" strokeWidth={1} />
            <circle cx="19" cy="6" r="2" strokeWidth={1} />
            <circle cx="5" cy="18" r="2" strokeWidth={1} />
            <circle cx="19" cy="18" r="2" strokeWidth={1} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 6h3M14 6h3M5 8v8M19 8v8M7 18h10" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 2M9 14l3-2" />
          </svg>
        </div>
      )
    },
    {
      title: 'Heavy Machinery',
      description: 'State-of-the-art mining equipment services including maintenance, repairs, and operator training programs.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="12" width="18" height="8" rx="2" strokeWidth={1.5} />
          <circle cx="7" cy="18" r="2" strokeWidth={1.5} />
          <circle cx="17" cy="18" r="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12V8a2 2 0 0 1 2-2h3l2 4h4l2-4h3a2 2 0 0 1 2 2v4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 6L6 4M16 6l2-4" />
          <rect x="10" y="14" width="4" height="2" rx="1" fill="currentColor" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="12" width="18" height="8" rx="2" strokeWidth={1} />
            <circle cx="7" cy="18" r="2" strokeWidth={1} />
            <circle cx="17" cy="18" r="2" strokeWidth={1} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12V8a2 2 0 0 1 2-2h3l2 4h4l2-4h3a2 2 0 0 1 2 2v4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 6L6 4M16 6l2-4" />
            <rect x="10" y="14" width="4" height="2" rx="1" fill="currentColor" />
          </svg>
        </div>
      )
    },
    {
      title: 'Transportation',
      description: 'Reliable transportation solutions with modern fleet management and specialized cargo handling capabilities.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="8" width="20" height="10" rx="2" strokeWidth={1.5} />
          <circle cx="7" cy="18" r="2" strokeWidth={1.5} />
          <circle cx="17" cy="18" r="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 8h4l2-4h8l2 4h4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12h12M8 14h8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v4" />
        </svg>
      ),
      image: (
        <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
          <svg className="w-16 h-16 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="8" width="20" height="10" rx="2" strokeWidth={1} />
            <circle cx="7" cy="18" r="2" strokeWidth={1} />
            <circle cx="17" cy="18" r="2" strokeWidth={1} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2 8h4l2-4h8l2 4h4" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 12h12M8 14h8" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v4" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4712f]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#f4712f]/10 text-[#f4712f] rounded-lg text-sm font-semibold tracking-wide uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#05102d] mb-6">
            Comprehensive Mining
            <span className="block text-[#515760]">Solutions</span>
          </h2>
          <p className="text-xl text-[#515760] max-w-3xl mx-auto leading-relaxed">
            From extraction to export, we provide end-to-end mining services that drive 
            efficiency and growth across the entire value chain.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100 hover:border-[#f4712f]/20"
            >
              {/* Service Image */}
              <div className="mb-6 overflow-hidden rounded-xl">
                {service.image}
              </div>

              {/* Icon & Title */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#f4712f]/10 rounded-xl flex items-center justify-center text-[#f4712f] group-hover:bg-[#f4712f] group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#05102d] group-hover:text-[#f4712f] transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#515760] leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link 
                to="/services"
                className="group/btn text-[#f4712f] hover:text-[#05102d] font-semibold text-sm transition-colors duration-300 flex items-center"
              >
                Learn More
                <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 border border-gray-100">
          <h3 className="text-3xl font-bold text-[#05102d] mb-4">
            Explore Our Complete Range of Services
          </h3>
          <p className="text-lg text-[#515760] mb-8 max-w-2xl mx-auto">
            Discover how our integrated mining solutions can support your business objectives 
            and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services"
              className="group bg-[#f4712f] hover:bg-[#f4712f]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 text-center"
            >
              View All Services
              <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              to="/contact"
              className="group border-2 border-[#515760]/20 hover:border-[#f4712f] text-[#515760] hover:text-[#f4712f] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#f4712f]/5 text-center"
            >
              Request Consultation
              <svg className="inline-block ml-2 w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
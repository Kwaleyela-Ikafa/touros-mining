import React from 'react';
import { Link } from 'react-router-dom';


const ServicesPage: React.FC = () => {
  const minerals = [
    { name: 'Gold', purity: '99.5%+', description: 'High-grade gold extraction and refining' },
    { name: 'Emerald', grade: 'Premium', description: 'Exceptional quality emerald mining' },
    { name: 'Copper Concentrate', content: '25-30% Cu', description: 'High-grade copper concentrate production' },
    { name: 'Copper Cathode', purity: '99.9%', description: 'Premium copper cathode manufacturing' },
    { name: 'Manganese', grade: 'Battery Grade', description: 'High-quality manganese ore extraction' }
  ];

  const miningFeatures = [
    'Advanced geological surveying and exploration',
    'Open-pit and underground mining operations',
    'State-of-the-art mineral processing facilities',
    'Environmental impact assessment and management',
    'Real-time ore quality monitoring',
    'Sustainable extraction practices'
  ];

  const logisticsFeatures = [
    'Global supply chain management',
    'Customs clearance and documentation',
    'International shipping coordination',
    'Inventory management and warehousing',
    'Real-time shipment tracking',
    'Quality assurance during transport'
  ];

  const machineryFeatures = [
    'Heavy-duty excavators and loaders',
    'Specialized mining trucks and haulers',
    'Crushing and grinding equipment',
    'Preventive maintenance programs',
    'Emergency repair services',
    'Operator training and certification'
  ];

  const transportFeatures = [
    'Specialized mineral transport vehicles',
    'Secure cargo handling and loading',
    'Cross-border transportation services',
    'GPS fleet tracking and monitoring',
    'Temperature-controlled transport options',
    'Just-in-time delivery solutions'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#05102d] mb-6">
            Our <span className="text-[#f4712f]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#515760] max-w-3xl mx-auto leading-relaxed">
            Comprehensive mining solutions from extraction to global export
          </p>
        </div>
      </section>

      {/* Minerals We Extract */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05102d] mb-4">
              Minerals We Extract & Export
            </h2>
            <p className="text-lg text-[#515760] max-w-2xl mx-auto">
              Premium quality minerals sourced from Zambia's rich geological deposits
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {minerals.map((mineral, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#05102d]">{mineral.name}</h3>
                  <div className="px-3 py-1 bg-[#f4712f]/10 text-[#f4712f] rounded-lg text-sm font-semibold">
                    {mineral.purity || mineral.grade || mineral.content}
                  </div>
                </div>
                <p className="text-[#515760] leading-relaxed">
                  {mineral.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mining Operations */}
      <section id="mining" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#f4712f]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#f4712f]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L8 6v4l-3 3v6h14v-6l-3-3V6l-4-4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 6h8M9 10h6M10 14h4" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#05102d]">Mining Operations</h2>
              </div>
              
              <p className="text-lg text-[#515760] mb-8 leading-relaxed">
                Our advanced mining operations utilize cutting-edge technology and sustainable practices 
                to extract premium minerals from Zambia's rich geological deposits. We maintain the 
                highest standards of safety and environmental responsibility.
              </p>

              <div className="space-y-4 mb-8">
                {miningFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#f4712f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#f4712f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#515760]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://i.postimg.cc/SKWX6L8c/mining-operations.webp" 
                alt="Mining operations"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Solutions */}
      <section id="logistics" className="py-20 bg-[#515760]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://i.postimg.cc/xdtQVcVW/mining-logistics.webp" 
                alt="Logistics operations"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#f4712f]/20 rounded-xl flex items-center justify-center border border-[#f4712f]/30">
                  <svg className="w-8 h-8 text-[#f4712f]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="5" cy="6" r="2" strokeWidth={1.5} />
                    <circle cx="12" cy="6" r="2" strokeWidth={1.5} />
                    <circle cx="19" cy="6" r="2" strokeWidth={1.5} />
                    <circle cx="5" cy="18" r="2" strokeWidth={1.5} />
                    <circle cx="19" cy="18" r="2" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 6h3M14 6h3M5 8v8M19 8v8M7 18h10" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Logistics Solutions</h2>
              </div>
              
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Our comprehensive logistics network ensures efficient transportation and delivery 
                of minerals to global markets. We handle every aspect of the supply chain with 
                precision and reliability.
              </p>

              <div className="space-y-4 mb-8">
                {logisticsFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#f4712f]/20 rounded-full flex items-center justify-center flex-shrink-0 border border-[#f4712f]/30">
                      <svg className="w-3 h-3 text-[#f4712f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heavy Machinery */}
      <section id="machinery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#f4712f]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#f4712f]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="3" y="12" width="18" height="8" rx="2" strokeWidth={1.5} />
                    <circle cx="7" cy="18" r="2" strokeWidth={1.5} />
                    <circle cx="17" cy="18" r="2" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12V8a2 2 0 0 1 2-2h3l2 4h4l2-4h3a2 2 0 0 1 2 2v4" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#05102d]">Heavy Machinery</h2>
              </div>
              
              <p className="text-lg text-[#515760] mb-8 leading-relaxed">
                Our fleet of state-of-the-art heavy machinery ensures efficient operations across 
                all mining activities. We provide comprehensive machinery services including 
                maintenance, repairs, and operator training.
              </p>

              <div className="space-y-4 mb-8">
                {machineryFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#f4712f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#f4712f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#515760]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://i.postimg.cc/FFnKJCq2/heavy-machinery.webp" 
                alt="Heavy machinery"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section id="transportation" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://i.postimg.cc/gJtG8rMv/mining-transportation.webp" 
                alt="Transportation fleet"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#f4712f]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#f4712f]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect x="2" y="8" width="20" height="10" rx="2" strokeWidth={1.5} />
                    <circle cx="7" cy="18" r="2" strokeWidth={1.5} />
                    <circle cx="17" cy="18" r="2" strokeWidth={1.5} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 8h4l2-4h8l2 4h4" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#05102d]">Transportation</h2>
              </div>
              
              <p className="text-lg text-[#515760] mb-8 leading-relaxed">
                Our specialized transportation services ensure secure and efficient movement of 
                minerals and equipment. With modern fleet management and expert drivers, we 
                guarantee reliable delivery solutions.
              </p>

              <div className="space-y-4 mb-8">
                {transportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#f4712f]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#f4712f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#515760]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#05102d] to-[#515760]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact us today to discuss how our comprehensive services can meet your mining and logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
                to="/contact" 
                className="bg-[#f4712f] hover:bg-[#f4712f]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
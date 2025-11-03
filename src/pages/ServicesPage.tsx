import React from 'react';
import { Link } from 'react-router-dom';


const ServicesPage: React.FC = () => {
  const qaSpecializations = [
    { name: 'Web Applications', coverage: 'Full Stack', description: 'Comprehensive testing for frontend and backend systems' },
    { name: 'Mobile Apps', platforms: 'iOS & Android', description: 'Native and cross-platform mobile testing' },
    { name: 'API Testing', type: 'REST & GraphQL', description: 'Thorough API validation and integration testing' },
    { name: 'E-commerce', focus: 'Payment & UX', description: 'Specialized testing for online stores' },
    { name: 'Enterprise Software', scope: 'Complex Systems', description: 'Testing for large-scale business applications' }
  ];

  const manualTestingFeatures = [
    'Functional and usability testing',
    'Exploratory testing for edge cases',
    'User acceptance testing (UAT)',
    'Cross-browser compatibility testing',
    'Regression testing for updates',
    'Detailed bug reporting and documentation'
  ];

  const automationFeatures = [
    'Selenium and Playwright test frameworks',
    'CI/CD integration for continuous testing',
    'API automation with Postman and RestAssured',
    'Custom test script development',
    'Parallel test execution for speed',
    'Comprehensive test reporting and analytics'
  ];

  const performanceFeatures = [
    'Load testing to simulate traffic',
    'Stress testing for breaking points',
    'Scalability and endurance testing',
    'Database performance optimization',
    'Response time and throughput analysis',
    'Performance bottleneck identification'
  ];

  const securityFeatures = [
    'Vulnerability assessment and penetration testing',
    'SQL injection and XSS testing',
    'Authentication and authorization testing',
    'Data encryption validation',
    'Security compliance verification',
    'Third-party dependency audits'
  ];

  const mobileFeatures = [
    'iOS and Android native app testing',
    'React Native and Flutter testing',
    'Device compatibility testing',
    'Touch gesture and orientation testing',
    'Network condition simulation',
    'App store submission validation'
  ];

  const consultingFeatures = [
    'QA process assessment and optimization',
    'Test strategy and planning',
    'Tool selection and implementation',
    'Team training and mentorship',
    'Quality metrics and KPI definition',
    'Best practices and standards establishment'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#05102d] mb-6">
            Our <span className="text-[#3064BD]">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#515760] max-w-3xl mx-auto leading-relaxed">
            Comprehensive quality assurance solutions from testing to deployment
          </p>
        </div>
      </section>

      {/* Testing Specializations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05102d] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-[#515760] max-w-2xl mx-auto">
              Expert testing services tailored to your industry and technology stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qaSpecializations.map((spec, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#05102d]">{spec.name}</h3>
                  <div className="px-3 py-1 bg-[#3064BD]/10 text-[#3064BD] rounded-lg text-sm font-semibold">
                    {spec.coverage || spec.platforms || spec.type || spec.focus || spec.scope}
                  </div>
                </div>
                <p className="text-[#515760] leading-relaxed">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid - Checkerboard Layout */}
      {/* Row 1: Manual Testing (White) + Automation Testing (Dark Blue) */}
      <section>
        <div className="grid lg:grid-cols-2">
          {/* Manual Testing - White Background */}
          <div id="manual" className="py-20 px-8 lg:px-12 bg-white flex items-end">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#3064BD]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#3064BD]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#05102d]">Manual Testing</h2>
              </div>

              <p className="text-lg text-[#515760] mb-8 leading-relaxed">
                Comprehensive manual testing services to ensure your software functions perfectly across
                all scenarios and user interactions. Our experienced QA professionals meticulously test
                every feature from the user's perspective.
              </p>

              <div className="space-y-4">
                {manualTestingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#3064BD]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#3064BD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#515760]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Automation Testing - Dark Blue Background */}
          <div id="automation" className="py-20 px-8 lg:px-12 bg-[#1a2332] flex items-start">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#3064BD]/30 rounded-xl flex items-center justify-center border border-[#3064BD]/50">
                  <svg className="w-8 h-8 text-[#60a5fa]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Automation Testing</h2>
              </div>

              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Efficient automated testing solutions to accelerate your development cycle and ensure
                consistent quality across releases. We build robust automation frameworks tailored to
                your technology stack.
              </p>

              <div className="space-y-4">
                {automationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#3064BD]/30 rounded-full flex items-center justify-center flex-shrink-0 border border-[#3064BD]/50">
                      <svg className="w-3 h-3 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Row 2: Performance Testing (Dark Blue) + Security Testing (White) */}
      <section>
        <div className="grid lg:grid-cols-2">
          {/* Performance Testing - Dark Blue Background */}
          <div id="performance" className="py-20 px-8 lg:px-12 bg-[#1a2332] flex items-end">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#3064BD]/30 rounded-xl flex items-center justify-center border border-[#3064BD]/50">
                  <svg className="w-8 h-8 text-[#60a5fa]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Performance Testing</h2>
              </div>

              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Load, stress, and performance testing to ensure your applications can handle real-world
                usage and scale effectively. We identify bottlenecks and optimize your system's
                performance before they impact users.
              </p>

              <div className="space-y-4">
                {performanceFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#3064BD]/30 rounded-full flex items-center justify-center flex-shrink-0 border border-[#3064BD]/50">
                      <svg className="w-3 h-3 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security Testing - White Background */}
          <div id="security" className="py-20 px-8 lg:px-12 bg-white flex items-start">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#3064BD]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#3064BD]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#05102d]">Security Testing</h2>
              </div>

              <p className="text-lg text-[#515760] mb-8 leading-relaxed">
                Comprehensive security assessments to identify vulnerabilities and ensure your software
                is protected against threats. We help you build secure applications that protect your
                users' data and maintain trust.
              </p>

              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#3064BD]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#3064BD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Row 3: Mobile Testing (White) + QA Consulting (Dark Blue) */}
      <section>
        <div className="grid lg:grid-cols-2">
          {/* Mobile Testing - White Background */}
          <div id="mobile" className="py-20 px-8 lg:px-12 bg-white flex items-end">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#3064BD]/10 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#3064BD]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#05102d]">Mobile Testing</h2>
              </div>

              <p className="text-lg text-[#515760] mb-8 leading-relaxed">
                Cross-platform mobile application testing for iOS and Android to ensure optimal user
                experience across devices. We test functionality, performance, and usability on real
                devices and simulators.
              </p>

              <div className="space-y-4">
                {mobileFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#3064BD]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-[#3064BD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#515760]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QA Consulting - Dark Blue Background */}
          <div id="consulting" className="py-20 px-8 lg:px-12 bg-[#1a2332] flex items-start">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#3064BD]/30 rounded-xl flex items-center justify-center border border-[#3064BD]/50">
                  <svg className="w-8 h-8 text-[#60a5fa]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">QA Consulting</h2>
              </div>

              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Strategic quality assurance consulting to improve your testing processes and establish
                best practices. We help you build a culture of quality and implement efficient QA
                workflows that scale with your organization.
              </p>

              <div className="space-y-4">
                {consultingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#3064BD]/30 rounded-full flex items-center justify-center flex-shrink-0 border border-[#3064BD]/50">
                      <svg className="w-3 h-3 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#05102d] to-[#515760]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Software Quality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Contact us today to discuss how our comprehensive QA services can help you deliver flawless software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
                to="/contact"
                className="bg-[#3064BD] hover:bg-[#3064BD]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/movpzrnj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Clear the form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          subject: '',
          message: ''
        });

        // Show success message
        setShowSuccess(true);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Office Address',
      details: ['7636 Mosi-O-Tunya RD, Woodlands, Lusaka, Zambia'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Email Address',
      details: ['contact@parsetech.org'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone Number',
      details: ['+260979606913'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
  ];

  const services = [
    'Manual Testing',
    'Automation Testing',
    'Performance Testing',
    'Security Testing',
    'Mobile Testing',
    'QA Consulting',
    'General Inquiry',
    'Partnership Opportunity'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="contact-heading" className="text-4xl md:text-6xl font-bold text-[#05102d] mb-6">
            Contact <span className="text-[#3064BD]">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#515760] max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to discuss your software testing and QA needs
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50" aria-label="Contact information">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {contactInfo.map((info, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                role="listitem"
              >
                <div className="w-16 h-16 bg-[#3064BD]/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-[#3064BD]" aria-hidden="true">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#05102d] mb-3">
                  {info.title}
                </h3>
                {info.title === 'Email Address' ? (
                  info.details.map((detail, idx) => (
                    <p key={idx} className="mb-1">
                      <a href={`mailto:${detail}`} className="text-[#515760] hover:text-[#3064BD] transition-colors duration-200">
                        {detail}
                      </a>
                    </p>
                  ))
                ) : info.title === 'Phone Number' ? (
                  info.details.map((detail, idx) => (
                    <p key={idx} className="mb-1">
                      <a href={`tel:${detail.replace(/\s/g, '')}`} className="text-[#515760] hover:text-[#3064BD] transition-colors duration-200">
                        {detail}
                      </a>
                    </p>
                  ))
                ) : (
                  info.details.map((detail, idx) => (
                    <p key={idx} className="text-[#515760] mb-1">
                      {detail}
                    </p>
                  ))
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-[#1a2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Ready to start your next project? Fill out the form and our team will get back to you
                within 24 hours. We're here to help with all your software testing and QA needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#3064BD]/30 rounded-xl flex items-center justify-center border border-[#3064BD]/50">
                    <svg className="w-6 h-6 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Fast Response</h4>
                    <p className="text-gray-300 text-sm">We respond to all inquiries within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#3064BD]/30 rounded-xl flex items-center justify-center border border-[#3064BD]/50">
                    <svg className="w-6 h-6 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Secure Communication</h4>
                    <p className="text-gray-300 text-sm">Your information is protected and confidential</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#3064BD]/30 rounded-xl flex items-center justify-center border border-[#3064BD]/50">
                    <svg className="w-6 h-6 text-[#60a5fa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Expert Consultation</h4>
                    <p className="text-gray-300 text-sm">Connect with our experienced QA team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-white animate-fade-in">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Message Sent Successfully!</h4>
                      <p className="text-sm text-gray-200">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3064BD] focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                      aria-required="true"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3064BD] focus:border-transparent transition-colors duration-200"
                      placeholder="your@email.com"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3064BD] focus:border-transparent transition-colors duration-200"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3064BD] focus:border-transparent transition-colors duration-200"
                      placeholder="+260 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#3064BD] focus:border-transparent transition-colors duration-200"
                    aria-label="Select a service of interest"
                  >
                    <option value="" className="text-gray-800">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="text-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3064BD] focus:border-transparent transition-colors duration-200"
                    placeholder="Brief description of your inquiry"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3064BD] focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us more about your project requirements..."
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#3064BD] hover:bg-[#3064BD]/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#3064BD]/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  aria-label="Send message to Parse Technologies"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && (
                    <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  )}
                </button>

                <p className="text-gray-300 text-sm text-center">
                  By submitting this form, you agree to our terms and privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
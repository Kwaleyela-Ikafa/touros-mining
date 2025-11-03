import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3" aria-label="Parse Technologies home">
              {/* Image Logo - Always visible */}
              <img
                src="/parse-logo.png"
                alt="Parse Technologies logo"
                className="h-20 w-20 object-contain"
                width="80"
                height="80"
              />
              {/* Text Logo - Hidden on mobile, visible on desktop */}
              <span className="hidden md:block text-3xl font-bold text-[#05102d]" aria-hidden="true">
                <span className="text-[#3064BD]">Parse</span> Technologies
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8" role="menubar">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isActiveRoute(item.href)
                      ? 'text-[#3064BD]'
                      : 'text-[#515760] hover:text-[#3064BD]'
                  }`}
                  role="menuitem"
                  aria-current={isActiveRoute(item.href) ? 'page' : undefined}
                >
                  {item.name}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-[#3064BD] transition-transform duration-200 ${
                      isActiveRoute(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  ></span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-[#3064BD] hover:bg-[#3064BD]/90 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-0.5"
              aria-label="Get a quote for QA services"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#515760] hover:text-[#3064BD] focus:outline-none focus:ring-2 focus:ring-[#3064BD] focus:ring-offset-2 rounded-lg p-2 transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-100`}
        role="menu"
        aria-label="Mobile navigation"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                isActiveRoute(item.href)
                  ? 'text-[#3064BD] bg-[#3064BD]/10'
                  : 'text-[#515760] hover:text-[#3064BD] hover:bg-[#3064BD]/5'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              role="menuitem"
              aria-current={isActiveRoute(item.href) ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full text-left bg-[#3064BD] hover:bg-[#3064BD]/90 text-white px-3 py-2.5 rounded-xl font-medium transition-all duration-200 mt-4 block"
            onClick={() => setIsMobileMenuOpen(false)}
            role="menuitem"
            aria-label="Get a quote for QA services"
          >
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
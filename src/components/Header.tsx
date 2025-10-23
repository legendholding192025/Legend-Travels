'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleEvents = () => {
    setIsEventsOpen(!isEventsOpen);
  };

  const handleServicesMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
      setIsEventsOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleEventsMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsEventsOpen(true);
  };

  const handleEventsMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsEventsOpen(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4" style={{ borderBottomColor: '#EE8900' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo/travel.svg" 
                alt="Legend Travels" 
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-700 px-4 py-3 text-base font-medium font-helvetica transition-all duration-200 relative group"
            >
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/about-us" 
              className="text-gray-700 hover:text-gray-700 px-4 py-3 text-base font-medium font-helvetica transition-all duration-200 relative group"
            >
              About Us
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
            </Link>
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                onClick={toggleServices}
                className="text-gray-700 hover:text-gray-700 px-4 py-3 text-base font-medium font-helvetica transition-all duration-200 flex items-center relative group"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                     onMouseEnter={handleServicesMouseEnter}
                     onMouseLeave={handleServicesMouseLeave}>
                  <Link 
                    href="/ticketing" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-helvetica"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Ticketing
                  </Link>
                  <Link 
                    href="/holidays" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-helvetica"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Holidays
                  </Link>
                  <div 
                    className="relative"
                    onMouseEnter={handleEventsMouseEnter}
                    onMouseLeave={handleEventsMouseLeave}
                  >
                    <button
                      onClick={toggleEvents}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-helvetica flex items-center justify-between"
                    >
                      Events
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {isEventsOpen && (
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                           onMouseEnter={handleEventsMouseEnter}
                           onMouseLeave={handleEventsMouseLeave}>
                        <Link 
                          href="/exhibitions" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-helvetica"
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsEventsOpen(false);
                          }}
                        >
                          Exhibitions
                        </Link>
                        <Link 
                          href="/summits" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-helvetica"
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsEventsOpen(false);
                          }}
                        >
                          Summits
                        </Link>
                        <Link 
                          href="/corporate-events" 
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-helvetica"
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsEventsOpen(false);
                          }}
                        >
                          Corporate Events
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <Link 
              href="/news" 
              className="text-gray-700 hover:text-gray-700 px-4 py-3 text-base font-medium font-helvetica transition-all duration-200 relative group"
            >
              News
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
            </Link>
            <Link 
              href="/contact-us" 
              className="text-gray-700 hover:text-gray-700 px-4 py-3 text-base font-medium font-helvetica transition-all duration-200 relative group"
            >
              Contact Us
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-700 block px-3 py-2 text-base font-medium font-helvetica relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
              </Link>
              <Link 
                href="/about-us" 
                className="text-gray-700 hover:text-gray-700 block px-3 py-2 text-base font-medium font-helvetica relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-700 hover:text-gray-700 flex items-center justify-between w-full px-3 py-2 text-base font-medium font-helvetica relative group"
                >
                  Services
                  <svg className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-1">
                    <Link 
                      href="/ticketing" 
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-helvetica"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      Ticketing
                    </Link>
                    <Link 
                      href="/holidays" 
                      className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-helvetica"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesOpen(false);
                      }}
                    >
                      Holidays
                    </Link>
                    <div>
                      <button
                        onClick={() => setIsEventsOpen(!isEventsOpen)}
                        className="text-gray-600 hover:text-blue-600 flex items-center justify-between w-full px-3 py-2 text-base font-helvetica"
                      >
                        Events
                        <svg className={`h-3 w-3 transition-transform ${isEventsOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      {isEventsOpen && (
                        <div className="pl-4 space-y-1">
                          <Link 
                            href="/exhibitions" 
                            className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-sm font-helvetica"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                              setIsEventsOpen(false);
                            }}
                          >
                            Exhibitions
                          </Link>
                          <Link 
                            href="/summits" 
                            className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-sm font-helvetica"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                              setIsEventsOpen(false);
                            }}
                          >
                            Summits
                          </Link>
                          <Link 
                            href="/corporate-events" 
                            className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-sm font-helvetica"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                              setIsEventsOpen(false);
                            }}
                          >
                            Corporate Events
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <Link 
                href="/news" 
                className="text-gray-700 hover:text-gray-700 block px-3 py-2 text-base font-medium font-helvetica relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                News
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
              </Link>
              <Link 
                href="/contact-us" 
                className="text-gray-700 hover:text-gray-700 block px-3 py-2 text-base font-medium font-helvetica relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EE8900] transition-all duration-200 group-hover:w-full"></div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

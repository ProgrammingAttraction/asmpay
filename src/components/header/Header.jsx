import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSend } from 'react-icons/fi';
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'docs', label: 'Developer Docs' },
];

const TELEGRAM_CONTACTS = [
  { label: 'Support 1', username: '@Exchangewallet234', url: 'https://t.me/Exchangewallet234' },
  { label: 'Support 2', username: '@Rolexbstk', url: 'https://t.me/Rolexbstk' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while mobile menu or contact modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen || isContactModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isContactModalOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    closeMenu();
    setIsContactModalOpen(true);
  };

  // Smooth scroll handler
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    setActiveSection(targetId);

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const clipPathStyle = {
    clipPath:
      'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)',
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#0B1120]/95 backdrop-blur-md border-slate-800 shadow-lg py-2'
            : 'bg-[#0B1120]/40 backdrop-blur-sm border-white/5 py-4'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 transition-all duration-300">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-8 lg:gap-12">
              <div className="flex-shrink-0 flex items-center gap-3">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                  <img className="w-[150px]" src={logo} alt="ASMPAY Logo" />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => scrollToSection(e, link.id)}
                      className={`relative pb-1 transition-colors duration-300 font-semibold text-sm tracking-wide uppercase group ${
                        isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {link.label}
                      <span
                        className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#FF004D] transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Right Side: CTA & Mobile Toggle */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={handleContactClick}
                className="bg-[#FFED00] text-black px-6 py-2 font-bold text-sm hover:scale-105 transition-transform duration-300 flex items-center justify-center cursor-pointer"
                style={clipPathStyle}
              >
                CONTACT
              </button>

              {/* Mobile Toggle */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="relative z-[60] focus:outline-none p-1 text-slate-300 hover:text-white transition-colors duration-300"
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
                >
                  {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Backdrop */}
        <div
          onClick={closeMenu}
          className={`md:hidden fixed inset-0 bg-black/40 transition-opacity duration-300 z-40 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Mobile Drawer Panel */}
        <div
          className={`md:hidden fixed top-0 left-0 h-screen w-[65%] min-w-[240px] max-w-[300px] bg-[#0B1120] border-r border-slate-800/80 shadow-[10px_10px_30px_rgba(0,0,0,0.5)] z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="h-[76px]" />

          <div className="flex flex-col px-6 py-2 pb-10">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`block font-bold text-sm tracking-wide uppercase py-4 border-b border-slate-800 transition-colors duration-300 ${
                    isActive ? 'text-[#FFED00]' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="py-6 mt-2">
              <button
                onClick={handleContactClick}
                className="inline-block bg-[#FFED00] text-black px-8 py-2.5 font-bold text-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={clipPathStyle}
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Telegram Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div className="relative w-full max-w-md bg-[#0B1120] border border-slate-800 rounded-xl p-6 shadow-2xl text-white">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <FiX size={24} />
            </button>

            <h3 className="text-xl font-bold mb-2 text-white">Contact Support</h3>
            <p className="text-slate-400 text-sm mb-6">
              Reach out to us directly via Telegram for instant assistance:
            </p>

            <div className="space-y-4">
              {TELEGRAM_CONTACTS.map((contact, index) => (
                <a
                  key={index}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#0088cc]/20 text-[#0088cc] rounded-full group-hover:bg-[#0088cc] group-hover:text-white transition-colors">
                      <FiSend size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-slate-200">{contact.label}</div>
                      <div className="text-xs text-slate-400">{contact.username}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-[#FFED00] text-black px-3 py-1 rounded">
                    Chat
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
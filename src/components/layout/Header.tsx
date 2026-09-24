'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { ThemeToggle } from '../ui/ThemeToggle';
import { NAV_LINKS } from '../../constants/data';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll locking for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const elementId = href.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pt-[calc(1rem+env(safe-area-inset-top,0px))] px-4 pointer-events-none">
        <div 
          className={`mx-auto max-w-5xl transition-all duration-500 ease-in-out pointer-events-auto rounded-full border ${
            isScrolled 
              ? 'glass-panel border-border shadow-md' 
              : 'bg-transparent border-transparent shadow-none'
          }`}
        >
          <div className="px-6 h-16 flex items-center justify-between">
            <Link 
              href="/" 
              className="text-2xl tracking-tight text-foreground flex items-center space-x-1.5 focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-lg px-1" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="font-black">Dr.</span>
              <span className="font-light">Shania Esha</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest text-text-secondary">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-foreground transition-colors duration-300 uppercase cursor-pointer py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <WhatsAppButton variant="secondary" text="Book" className="text-xs px-5 py-2" />
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <button 
                type="button"
                className="min-w-[44px] min-h-[44px] p-2.5 text-foreground hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/40 rounded-full flex items-center justify-center transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 h-full h-dvh z-40 bg-background/95 glass-panel pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-[calc(2rem+env(safe-area-inset-bottom,0px))] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-between px-8 py-6 max-w-lg mx-auto overflow-y-auto">
          <nav className="flex flex-col space-y-6 text-3xl font-medium tracking-tight text-foreground pt-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-accent transition-colors border-b border-border/50 pb-4 cursor-pointer flex items-center justify-between"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>{link.name}</span>
                <span className="text-xl text-accent">→</span>
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-border/50 flex flex-col space-y-4">
            <WhatsAppButton text="Book Consultation" variant="primary" className="w-full text-center py-4" />
          </div>
        </div>
      </div>
    </>
  );
};

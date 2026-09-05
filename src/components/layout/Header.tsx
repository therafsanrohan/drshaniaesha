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
      <header className="fixed top-0 left-0 w-full z-50 pt-4 px-4 pointer-events-none">
        <div className={`mx-auto max-w-5xl transition-all duration-500 ease-in-out pointer-events-auto rounded-full border ${isScrolled ? 'bg-surface/70 backdrop-blur-2xl border-border shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'bg-transparent border-transparent'}`}>
          <div className="px-6 h-16 flex items-center justify-between">
            <Link href="/" className="text-2xl tracking-tight text-foreground flex items-center space-x-1.5" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="font-black">DR.</span>
              <span className="font-light">Shania Esha</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest text-text-secondary">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-foreground transition-colors duration-300 uppercase cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <WhatsAppButton variant="secondary" text="Book" className="text-xs px-5 py-2" />
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center space-x-4">
              <ThemeToggle />
              <button 
                className="p-2 text-foreground focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
              <svg className="w-5 h-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col h-full justify-center px-8 space-y-8">
          <nav className="flex flex-col space-y-6 text-3xl font-medium tracking-tight text-foreground">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-foreground transition-colors border-b border-border pb-4 cursor-pointer"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

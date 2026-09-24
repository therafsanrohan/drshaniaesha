import Link from 'next/link';
import { SOCIAL_LINKS } from '../../constants/data';

export const Footer = () => {
  return (
    <footer className="relative bg-background text-text-secondary py-16 md:py-20 px-6 overflow-hidden border-t border-border/40">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-14">
          <div className="sm:col-span-2 md:col-span-12 lg:col-span-6 lg:pr-8">
            <h3 className="text-xl tracking-tight text-foreground flex items-center mb-2">
              <span className="font-black text-accent mr-1">Dr.</span>
              <span className="font-light">Shania Esha</span>
            </h3>
            <p className="text-xs font-bold tracking-widest uppercase mb-4 text-accent">
              Aesthetic Medicine
            </p>
            <p className="text-sm max-w-xs leading-relaxed text-text-secondary">
              Expert-led, personalised aesthetic care at Este Medical Bangladesh.
            </p>
          </div>

          <div className="sm:col-span-1 md:col-span-6 lg:col-span-3 lg:justify-self-end">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="#about" className="hover:text-foreground transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#treatments" className="hover:text-foreground transition-colors duration-200">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="#news" className="hover:text-foreground transition-colors duration-200">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-6 lg:col-span-3 lg:justify-self-end">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a 
                  href={SOCIAL_LINKS.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-foreground transition-colors duration-200 group flex items-center"
                >
                  <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href={SOCIAL_LINKS.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-foreground transition-colors duration-200 group flex items-center"
                >
                  <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-foreground transition-colors duration-200 group flex items-center"
                >
                  <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href={SOCIAL_LINKS.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-foreground transition-colors duration-200 group flex items-center"
                >
                  <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-xs font-medium space-y-3 md:space-y-0 text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Dr. Shania Esha. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a 
              href="https://www.creatiancy.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent hover:underline"
            >
              Creatiancy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

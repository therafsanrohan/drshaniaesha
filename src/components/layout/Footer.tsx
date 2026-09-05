import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative bg-background text-text-secondary py-20 px-6 overflow-hidden">
      {/* Creative gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-foreground tracking-tight mb-2">Dr. Shania Shamsun Esha</h3>
            <p className="text-sm font-medium tracking-wide uppercase mb-6">Aesthetic Medicine</p>
            <p className="text-sm max-w-xs leading-relaxed">
              Expert-led, personalised aesthetic care at Este Medical Bangladesh.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#treatments" className="hover:text-foreground transition-colors">Treatments</Link></li>
              <li><Link href="#news" className="hover:text-foreground transition-colors">News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-foreground transition-colors group flex items-center"><span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>LinkedIn</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors group flex items-center"><span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>Facebook</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors group flex items-center"><span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-xs font-medium space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Dr. Shania Shamsun Esha. All rights reserved.</p>
          <p>
            Developed by <a href="https://www.creatiancy.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Creatiancy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

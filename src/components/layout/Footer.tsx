import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative bg-background text-text-secondary py-20 px-6 overflow-hidden">
      {/* Creative gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="sm:col-span-2 md:col-span-12 lg:col-span-6 lg:pr-8">
            <h3 className="text-xl tracking-tight text-foreground flex items-center mb-2">
              <span className="font-black mr-1">DR.</span>
              <span className="font-light">Shania Esha</span>
            </h3>
            <p className="text-sm font-medium tracking-wide uppercase mb-6 text-accent">Aesthetic Medicine</p>
            <p className="text-sm max-w-xs leading-relaxed">
              Expert-led, personalised aesthetic care at Este Medical Bangladesh.
            </p>
          </div>

          <div className="sm:col-span-1 md:col-span-6 lg:col-span-3 lg:justify-self-end">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#treatments" className="hover:text-foreground transition-colors">Treatments</Link></li>
              <li><Link href="#news" className="hover:text-foreground transition-colors">News</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-1 md:col-span-6 lg:col-span-3 lg:justify-self-end">
            <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">Connect</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="https://www.linkedin.com/in/drshaniaesha/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors group flex items-center"><span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>LinkedIn</a></li>
              <li><a href="https://www.facebook.com/drshaniaesha" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors group flex items-center"><span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>Facebook</a></li>
              <li><a href="https://www.instagram.com/dr.shania.esha/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors group flex items-center"><span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 text-accent">→ </span>Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-xs font-medium space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} DR. Shania Esha. All rights reserved.</p>
          <p>
            Developed by <a href="https://www.creatiancy.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Creatiancy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

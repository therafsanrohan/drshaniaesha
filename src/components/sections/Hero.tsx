import Image from 'next/image';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Hero = () => {
  return (
    <section className="relative min-h-[92vh] min-h-[92dvh] flex flex-col pt-[calc(6rem+env(safe-area-inset-top,0px))] md:pt-28 overflow-hidden bg-background">
      
      {/* Immersive Background Gradients (Apple ambient light) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-accent/5 blur-[140px] dark:bg-accent/10"></div>
        <div className="absolute top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-surface-light blur-[120px] dark:bg-accent/5"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative flex-grow flex flex-col lg:flex-row">
        
        {/* Text Content (Left) */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start justify-center text-center lg:text-left z-20 py-8 lg:py-20">
          <ScrollReveal variant="fade-up" delay={150}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-tighter text-foreground mb-8 leading-[1.05]">
              Aesthetic care.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Redefined.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={250}>
            <p className="text-lg md:text-xl text-text-secondary font-medium tracking-normal max-w-lg mb-10 leading-relaxed">
              Consultation-led treatments for skin and hair. Delivered with absolute precision and a human touch.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={350}>
            <WhatsAppButton text="Start a Consultation" variant="primary" />
          </ScrollReveal>
        </div>

        {/* Creative Image Content (Right) - Anchored cleanly to the bottom */}
        <div className="relative w-full lg:w-[45%] h-[55vh] h-[55dvh] lg:h-auto mt-auto lg:self-end flex items-end justify-center lg:justify-end z-10">
          
          <div className="relative w-full max-w-[350px] md:max-w-md lg:max-w-[450px] h-[100%] lg:h-[80vh] lg:h-[80dvh] flex items-end">
            
            {/* Creative Backdrop Element (Glowing Arch) */}
            <ScrollReveal variant="fade-in" delay={200} className="absolute bottom-0 left-0 w-full h-[85%] -z-10">
              <div className="w-full h-full bg-gradient-to-t from-accent/10 via-accent/5 to-transparent rounded-t-full border-t border-x border-accent/20 shadow-[0_0_50px_rgba(0,0,0,0.05)]"></div>
            </ScrollReveal>

            {/* Doctor Image - Optimized WebP */}
            <div className="relative w-full h-full z-10">
              <Image 
                src="/images/hero-banner.webp" 
                alt="Dr. Shania Shamsun Esha" 
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 350px, (max-width: 1024px) 450px, 500px"
                style={{ objectFit: 'contain', objectPosition: 'bottom' }}
                className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Floating Glassmorphic Badge 1 */}
            <div className="absolute top-[35%] md:top-[40%] lg:top-[30%] left-2 md:-left-4 lg:-left-12 glass-panel border border-border p-2.5 md:p-3.5 rounded-2xl shadow-xl flex items-center space-x-3 z-20 transition-transform duration-300 hover:scale-105">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[11px] md:text-xs font-bold text-foreground leading-tight">Certified</p>
                <p className="text-[9px] md:text-[10px] text-text-secondary font-medium leading-tight">Aesthetic Doctor</p>
              </div>
            </div>

            {/* Floating Glassmorphic Badge 2 */}
            <div className="absolute bottom-[20%] right-2 lg:-right-4 glass-panel border border-border p-3 lg:p-4 rounded-2xl shadow-xl flex items-center space-x-3 z-20 transition-transform duration-300 hover:scale-105">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-foreground">Expert Care</p>
                <p className="text-[10px] text-text-secondary font-medium">Skin & Hair</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

import { ScrollReveal } from '../ui/ScrollReveal';

export const About = () => {
  return (
    <section id="about" className="py-28 md:py-36 bg-background relative overflow-hidden">
      {/* Background abstract ambient glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px]"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Apple-style Header */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-24">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">
                About the Doctor
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1]">
                Science, meets <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-500 to-indigo-500">
                  true artistry.
                </span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-text-secondary font-medium tracking-normal max-w-sm mt-6 md:mt-0 pb-2 leading-relaxed">
              A relentless pursuit of aesthetic perfection, grounded in rigorous medical science.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric Apple Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:min-h-[580px]">
          
          {/* Main Card (8 cols) */}
          <ScrollReveal variant="scale-up" delay={150} className="md:col-span-8 min-h-[380px] md:min-h-full">
            <div className="relative rounded-[2rem] overflow-hidden group border border-border/60 glass-panel shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] h-full transition-all duration-500 hover:border-accent/30">
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 p-8 md:p-14 flex flex-col h-full justify-between">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-foreground text-background flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 transition-transform duration-300 group-hover:translate-x-1">
                    Holistic Care Approach
                  </h3>
                  <p className="text-base md:text-lg text-text-secondary max-w-xl leading-relaxed transition-transform duration-300 delay-75 group-hover:translate-x-1">
                    Every treatment journey begins with deeply understanding your individual concern, followed by a clear, responsible, and highly personalized medical plan. No shortcuts, just pure science.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Side Stack (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6 h-auto md:min-h-full">

            
            {/* Top Stat Card */}
            <ScrollReveal variant="scale-up" delay={250} className="flex-1">
              <div className="h-full bg-gradient-to-br from-accent to-blue-600 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group shadow-lg transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]">
                <div className="relative z-10">
                  <span className="text-5xl md:text-6xl font-black mb-2 block tracking-tight group-hover:scale-105 transition-transform duration-300">
                    MBBS
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    Medical Degree
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom Stat Card */}
            <ScrollReveal variant="scale-up" delay={350} className="flex-1">
              <div className="h-full bg-surface/80 dark:bg-surface/50 border border-border/60 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 hover:border-accent/40 active:scale-[0.99]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <span className="text-4xl md:text-5xl font-bold text-foreground mb-2 block group-hover:-translate-y-1 transition-transform duration-300">
                    AAAM-1
                  </span>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">
                    Aesthetic Certification
                  </span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Bottom Wide Card */}
        <ScrollReveal variant="fade-up" delay={200} className="mt-6">
          <div className="w-full bg-surface/80 dark:bg-surface/50 border border-border/60 rounded-[2rem] p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between group overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 hover:border-accent/40">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 mb-6 md:mb-0 max-w-xl">
              <span className="text-xs font-bold text-accent tracking-widest uppercase mb-3 block">
                Currently Practicing
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Este Medical Bangladesh
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Leading medical aesthetic clinic, focusing on hyperpigmentation, acne scars, and advanced hair restoration techniques.
              </p>
            </div>
            
            <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:rotate-45 transition-all duration-500 bg-background shadow-sm">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-foreground group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

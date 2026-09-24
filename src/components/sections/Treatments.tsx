import { WhatsAppButton } from '../ui/WhatsAppButton';
import { TREATMENTS } from '../../constants/data';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Treatments = () => {
  return (
    <section id="treatments" className="py-28 md:py-36 bg-background overflow-hidden relative border-t border-border/40">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="mb-16 md:mb-20">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">
              Specialist Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground leading-[1.1]">
              Advanced treatments.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Natural results.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TREATMENTS.map((treatment, index) => (
            <ScrollReveal key={treatment.id} variant="scale-up" delay={150 + index * 120}>
              <div 
                className="h-full bg-surface/80 dark:bg-surface/50 rounded-3xl p-8 md:p-10 border border-border/60 flex flex-col group cursor-pointer hover:border-accent/40 hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Inner ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-xs font-bold text-text-secondary tracking-widest opacity-60">
                      {treatment.id}
                    </span>
                    <div className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(14,165,233,0.4)] dark:group-hover:drop-shadow-[0_0_12px_rgba(41,151,255,0.4)]">
                      {treatment.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-text-secondary mb-10 leading-relaxed flex-grow">
                    {treatment.description}
                  </p>
                  
                  <div className="mt-auto">
                    <WhatsAppButton 
                      variant="text" 
                      text="Ask a Question →" 
                      className="text-xs font-bold text-accent hover:text-foreground transition-colors" 
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

import { WhatsAppButton } from '../ui/WhatsAppButton';
import { ScrollReveal } from '../ui/ScrollReveal';

export const FinalCTA = () => {
  return (
    <section className="py-32 md:py-40 bg-background border-t border-border/40 relative overflow-hidden flex justify-center text-center">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <ScrollReveal variant="fade-up" delay={100}>
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6 leading-tight">
              Start with a conversation.
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200}>
            <p className="text-lg md:text-xl text-text-secondary font-medium tracking-normal mb-10 max-w-xl leading-relaxed">
              For consultation requests, treatment questions, or availability, message Dr. Shania’s team directly.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="scale-up" delay={300}>
            <WhatsAppButton text="Book Consultation" variant="primary" />
          </ScrollReveal>
        </div>
      </div>
      
      {/* Immersive ambient light mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/15 dark:bg-accent/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
      </div>
    </section>

  );
};

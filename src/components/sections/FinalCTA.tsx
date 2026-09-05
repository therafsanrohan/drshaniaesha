import { WhatsAppButton } from '../ui/WhatsAppButton';

export const FinalCTA = () => {
  return (
    <section className="py-40 bg-background border-t border-border/50 relative overflow-hidden flex justify-center text-center">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8 animate-fade-up">
            Start with a conversation.
          </h2>
          <p className="text-xl text-text-secondary font-medium tracking-tight mb-12 max-w-xl animate-fade-up ">
            For consultation requests, treatment questions, or availability, message Dr. Shania’s team directly.
          </p>
          <div className="animate-fade-up ">
            <WhatsAppButton text="Book Consultation" variant="primary" />
          </div>
        </div>
      </div>
      
      {/* Immersive animated gradient mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl aspect-square pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-pulse mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse  mix-blend-screen"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
      </div>
    </section>
  );
};

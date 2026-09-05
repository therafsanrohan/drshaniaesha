import { WhatsAppButton } from '../ui/WhatsAppButton';
import { TREATMENTS } from '../../constants/data';

export const Treatments = () => {

  return (
    <section id="treatments" className="py-32 bg-background overflow-hidden relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-6">
            Advanced treatments.<br/>Natural results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TREATMENTS.map((treatment, index) => (
            <div 
              key={treatment.id} 
              className={`bg-surface rounded-3xl p-10 border border-border flex flex-col group cursor-pointer active:scale-[0.99] hover:border-accent/30 transition-all duration-500 animate-fade-up  relative overflow-hidden`}
            >
              {/* Inner immersive glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <span className="text-sm font-bold text-text-secondary opacity-50">{treatment.id}</span>
                  <div className="transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(14,165,233,0.5)] dark:group-hover:drop-shadow-[0_0_12px_rgba(41,151,255,0.5)]">
                    {treatment.icon}
                  </div>
                </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{treatment.title}</h3>
              <p className="text-text-secondary mb-12 flex-grow">{treatment.description}</p>
              
              <div className="mt-auto">
                <WhatsAppButton 
                  variant="text" 
                  text="Ask a Question →" 
                  className="text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { NEWS_MEDIA } from '../../constants/data';
import { ScrollReveal } from '../ui/ScrollReveal';

export const NewsMedia = () => {
  return (
    <section id="news" className="py-28 md:py-36 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 max-w-5xl">
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="mb-16 md:mb-20">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-3 block">
              Media & Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
              Beyond the clinic.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEWS_MEDIA.map((item, index) => (
            <ScrollReveal key={item.id} variant="scale-up" delay={150 + index * 120}>
              <div 
                className="bg-surface/80 dark:bg-surface/50 rounded-3xl p-6 md:p-8 border border-border/60 flex flex-col group hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] overflow-hidden h-full"
              >
                {/* Media Graphic Container */}
                <div className="w-full h-44 md:h-48 rounded-2xl bg-gradient-to-tr from-surface-hover via-accent/5 to-accent/10 mb-6 overflow-hidden relative flex items-center justify-center border border-border/40">
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <svg className="w-10 h-10 text-accent opacity-60 group-hover:scale-115 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase">
                    {item.platform}
                  </span>
                  <span className="text-[10px] font-bold text-text-secondary tracking-widest uppercase opacity-70">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

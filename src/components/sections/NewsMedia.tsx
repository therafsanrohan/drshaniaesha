import { NEWS_MEDIA } from '../../constants/data';

export const NewsMedia = () => {

  return (
    <section id="news" className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-6">
            Beyond the clinic.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NEWS_MEDIA.map((item) => (
            <div 
              key={item.id} 
              className="bg-surface rounded-3xl p-6 border border-border flex flex-col group hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-up  overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 rounded-2xl bg-gradient-to-tr from-surface-hover to-accent/5 mb-6 overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg className="w-10 h-10 text-text-secondary opacity-30 group-hover:scale-125 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <div className="flex justify-between items-start mb-6">
                <span className="text-sm font-bold text-accent tracking-widest uppercase">{item.platform}</span>
                <span className="text-xs font-bold text-text-secondary tracking-widest uppercase">{item.category}</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

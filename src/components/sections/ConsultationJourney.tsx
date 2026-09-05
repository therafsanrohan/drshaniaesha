import { CONSULTATION_STEPS } from '../../constants/data';

export const ConsultationJourney = () => {

  return (
    <section className="py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-24 text-center animate-fade-up">
          The journey to better care.
        </h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent/50 before:via-accent/20 before:to-transparent">
          {CONSULTATION_STEPS.map((step, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-fade-up delay-100">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface border-2 border-accent shadow-[0_0_15px_rgba(14,165,233,0.15)] dark:shadow-[0_0_15px_rgba(41,151,255,0.15)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(14,165,233,0.3)] dark:group-hover:shadow-[0_0_25px_rgba(41,151,255,0.3)]">
                {step.icon}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-surface p-8 rounded-3xl border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-text-secondary">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

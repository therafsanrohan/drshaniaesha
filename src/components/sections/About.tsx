export const About = () => {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Mind-blowing Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 ">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">About the Doctor</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground leading-tight">
              Science, meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">true artistry.</span>
            </h2>
          </div>
          <p className="text-xl text-text-secondary font-medium tracking-tight max-w-sm mt-8 md:mt-0 pb-4">
            A relentless pursuit of aesthetic perfection, grounded in rigorous medical science.
          </p>
        </div>

        {/* Mind-blowing Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          {/* Main Card (Spans 8 cols) */}
          <div className="md:col-span-8 relative rounded-[2rem] overflow-hidden group border border-border/50 shadow-2xl h-[400px] md:h-full">
            <div className="absolute inset-0 bg-surface z-0"></div>
            {/* Animated abstract background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"></div>
            
            <div className="relative z-10 p-10 md:p-16 flex flex-col h-full justify-between">
              <div className="w-16 h-16 rounded-2xl bg-foreground text-background flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:translate-x-2 transition-transform duration-500">Holistic Care Approach</h3>
                <p className="text-lg text-text-secondary max-w-xl group-hover:translate-x-2 transition-transform duration-500 ">
                  Every treatment journey begins with deeply understanding your individual concern, followed by a clear, responsible, and highly personalized medical plan. No shortcuts, just pure science.
                </p>
              </div>
            </div>
          </div>

          {/* Side Stack (Spans 4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6 h-[500px] md:h-full">
            
            {/* Top Stat */}
            <div className="flex-1 bg-gradient-to-br from-accent to-blue-600 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center text-white relative overflow-hidden group shadow-xl cursor-pointer active:scale-[0.99]">
              <div className="relative z-10">
                <span className="text-6xl font-black mb-2 block group-hover:scale-110 transition-transform duration-500">MBBS</span>
                <span className="text-sm font-bold uppercase tracking-widest opacity-80">Medical Degree</span>
              </div>
            </div>

            {/* Bottom Stat */}
            <div className="flex-1 bg-surface-light border border-border/50 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-xl cursor-pointer active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <span className="text-5xl font-bold text-foreground mb-2 block group-hover:-translate-y-2 transition-transform duration-500">AAAM-1</span>
                <span className="text-sm font-bold text-accent uppercase tracking-widest">Aesthetic Certification</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Wide Card */}
        <div className="mt-6 w-full bg-surface border border-border/50 rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between group overflow-hidden relative shadow-2xl cursor-pointer active:scale-[0.99]">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="relative z-10 mb-8 md:mb-0 max-w-xl">
            <span className="text-sm font-bold text-accent tracking-widest uppercase mb-4 block">Currently Practicing</span>
            <h3 className="text-4xl font-bold text-foreground mb-4">Este Medical Bangladesh</h3>
            <p className="text-text-secondary text-lg">Leading medical aesthetic clinic, focusing on hyperpigmentation, acne scars, and advanced hair restoration techniques.</p>
          </div>
          
          <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full border border-border/50 flex items-center justify-center group-hover:border-accent group-hover:rotate-45 transition-all duration-700 bg-background shadow-sm">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-foreground group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

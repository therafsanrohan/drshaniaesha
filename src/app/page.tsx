import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Treatments } from '@/components/sections/Treatments';
import { ConsultationJourney } from '@/components/sections/ConsultationJourney';
import { NewsMedia } from '@/components/sections/NewsMedia';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Treatments />
        <ConsultationJourney />
        <NewsMedia />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

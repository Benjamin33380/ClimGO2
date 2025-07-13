import Hero from './components/Hero';
import Services from './components/Services';
import Engagements from './components/Engagements';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import GoogleReviews from './components/GoogleReviews';
import History from './components/History';
import FinancialAids from './components/FinancialAids';
import Partenaires from './components/Partenaires';
import Aids from './components/Aids';
import AboutPage from './a-propos/page';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="relative z-10 bg-white">
        <Services />
        <Engagements />
        <Testimonials />
        <WhyChooseUs />
        <GoogleReviews />
        <FinancialAids />
        <Partenaires />
        <Aids />
        <History />

      </div>
    </main>
  );
}

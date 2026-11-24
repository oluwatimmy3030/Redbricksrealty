import { useEffect } from 'react';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import Hero from './components/sections/Hero';
import AboutRedbricks from './components/sections/AboutRedbricks';
import InvestmentStrategies from './components/sections/InvestmentStrategies';
import InvestmentHorizons from './components/sections/InvestmentHorizons';
import InvestmentCurrencies from './components/sections/InvestmentCurrencies';
import WhyRedbricks from './components/sections/WhyRedbricks';
import HowItWorks from './components/sections/HowItWorks';
import Contact from './components/sections/Contact';
import './style.css';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20" id="main-content">
          <Hero />
          <AboutRedbricks />
          <InvestmentStrategies />
          <InvestmentHorizons />
          <InvestmentCurrencies />
          <WhyRedbricks />
          <HowItWorks />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
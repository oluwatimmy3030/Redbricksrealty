import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative overflow-hidden" aria-labelledby="hero-title">
      {!imageError && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            onError={() => setImageError(true)}
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      )}
      {imageError && (
        <div className="absolute inset-0 bg-primary z-0" aria-hidden="true" />
      )}

      <div className="relative z-10 container py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="hero-title" className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-surface mb-6 animate-fade-in text-balance">
            Invest Beyond Borders.<br />Build Wealth Through Real Estate.
          </h1>
          <p className="text-lead text-surface/90 mb-10 animate-slide-up text-balance">
            Discover international real estate opportunities through strategic property development, ownership and rental income models. Redbricks connects sophisticated investors with global property opportunities.
          </p>
          <div className="flex flex-col items-center gap-4 sm:gap-6 animate-slide-up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />} fullWidth onClick={() => document.getElementById('strategies')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Strategies
              </Button>
              <Button variant="ghost" size="lg" fullWidth className="text-surface border-2 border-surface/50 hover:bg-surface/10 hover:border-surface" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = navRef.current?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/95 backdrop-blur-sm shadow-md' : 'bg-surface/95 backdrop-blur-sm'}`}>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <nav ref={navRef} className="container relative z-50" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2" aria-label="Redbricks Realty Home">
            <img src="/redbricks-logo.png" alt="Redbricks Realty Logo" className="h-10 w-auto flex-shrink-0" />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {siteConfig.navigation.main.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium text-text hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 ml-4">
              {siteConfig.navigation.ctaButtons.map((btn, index) => (
                <a
                  key={index}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant={btn.variant} size="sm">
                    {btn.label}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-down bg-surface">
            <div className="flex items-center justify-between px-4 py-3">
              <h3 className="text-lg font-semibold text-primary">Menu</h3>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-text hover:text-secondary transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col gap-2 px-4">
              {siteConfig.navigation.main.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="py-3 text-base font-medium text-text hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                {siteConfig.navigation.ctaButtons.map((btn, index) => (
                  <a
                    key={index}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant={btn.variant} fullWidth size="sm">
                      {btn.label}
                    </Button>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
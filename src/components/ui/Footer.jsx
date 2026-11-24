import { Mail, MapPin, Link as LinkIcon, MessageSquare, Users, Home, Building2 } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { investmentConfig } from '../../config/investmentConfig';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-surface" role="contentinfo">
      <div className="container py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-6" aria-label="Redbricks Realty Home">
              <img src="/redbricks-logo.png" alt="Redbricks Realty Logo" className="h-10 w-auto" />
            </a>
            <p className="text-text-light text-base max-w-xs mb-8 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex flex-wrap gap-4">
              {siteConfig.social?.linkedin && (
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary transition-colors" aria-label="LinkedIn">
                  <LinkIcon className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
              {siteConfig.social?.twitter && (
                <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-secondary transition-colors" aria-label="Twitter">
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {siteConfig.footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          const navbarHeight = 80;
                          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                          window.scrollTo({
                            top: elementPosition - navbarHeight,
                            behavior: 'smooth'
                          });
                        }
                      }
                    }}
                    className="text-text-light hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic space-y-4 text-text-light text-sm">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-secondary" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-secondary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-light text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <nav aria-label="Legal links" className="flex flex-wrap items-center gap-6">
              {siteConfig.footer.legal.map((link, index) => (
                <a key={index} href={link.href} className="text-text-light hover:text-secondary transition-colors text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-primary-light">
            <p className="text-text-light text-sm max-w-4xl leading-relaxed">
              {investmentConfig.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
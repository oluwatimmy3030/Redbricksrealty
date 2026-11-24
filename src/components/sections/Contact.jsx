import { Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="section bg-background container" aria-labelledby="contact-heading">
      <div className="max-w-2xl mx-auto text-center">
        <h2 id="contact-heading" className="heading-section mb-4">Get in Touch</h2>
        <p className="text-lead mb-10">Ready to learn more? Contact our team to discuss international real estate opportunities.</p>

        <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-lg border border-border">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <Mail className="w-8 h-8" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Email Us</h3>
              <p className="text-text-muted mb-4">We\'ll respond within 1–2 business days.</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light font-medium transition-colors"
              >
                {siteConfig.contact.email}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-text-muted">
              This contact form is for general enquiries only. Investment-related enquiries
              are handled through the approved investor process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
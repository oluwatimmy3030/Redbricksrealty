import { Search, BookOpen, Mail } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'Explore the different international real estate approaches — development, fractional ownership, and direct acquisition. Understand the horizons, structures, and risk profiles of each.'
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Understand',
    description: 'Review the relevant ownership structures and investment strategies in detail. Access informational materials and connect with the Redbricks team to discuss your objectives and eligibility.'
  },
  {
    number: '03',
    icon: Mail,
    title: 'Connect',
    description: 'Communicate with the appropriate Redbricks team through the approved investor process. All engagement follows regulatory requirements and eligibility verification.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section container" aria-labelledby="how-it-works-heading">
      <div className="text-center mb-16">
        <h2 id="how-it-works-heading" className="heading-section mb-4">How It Works</h2>
        <p className="text-lead">A clear, structured approach to international real estate investment.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        {steps.map((step, index) => (
          <div key={index} className="relative p-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary font-bold text-2xl">
              {step.number}
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <step.icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3 text-center">{step.title}</h3>
            <p className="text-text-muted text-center">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 right-0 w-full h-0.5 bg-border" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-text-muted max-w-2xl mx-auto">
          This is an informational overview. No investment offer is made through this website.
          Any future engagement will be subject to regulatory approvals, eligibility requirements,
          and definitive legal documentation.
        </p>
      </div>
    </section>
  );
};

export default HowItWorks;
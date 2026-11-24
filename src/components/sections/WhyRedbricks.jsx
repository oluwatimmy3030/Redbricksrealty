import { Globe, Layers, Search, Hammer, Building2, Shield } from 'lucide-react';

const trustPillars = [
  {
    icon: Globe,
    title: 'International Real Estate Focus',
    description: 'Dedicated to cross-border property opportunities, not limited to domestic markets.'
  },
  {
    icon: Layers,
    title: 'Multiple Investment Approaches',
    description: 'Development, fractional ownership, and direct acquisition — choose the structure that fits your objectives.'
  },
  {
    icon: Search,
    title: 'Structured Property Sourcing',
    description: 'Systematic deal origination and due diligence process for every opportunity.'
  },
  {
    icon: Hammer,
    title: 'Strategic Property Development',
    description: 'Active value creation through refurbishment, conversion, and ground-up development.'
  },
  {
    icon: Building2,
    title: 'International Ownership Opportunities',
    description: 'Access to residential and commercial assets in selected global markets.'
  },
  {
    icon: Shield,
    title: 'Transparency & Investor-Focused Communication',
    description: 'Clear documentation, regular reporting, and aligned interests with our investors.'
  }
];

const WhyRedbricks = () => {
  return (
    <section id="why" className="section bg-background container" aria-labelledby="why-heading">
      <div className="text-center mb-16">
        <h2 id="why-heading" className="heading-section mb-4">Why Redbricks?</h2>
        <p className="text-lead">Built for sophisticated investors seeking international real estate exposure with professional execution.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {trustPillars.map((pillar, index) => (
          <div key={index} className="card-hover p-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
              <pillar.icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="heading-card mb-2">{pillar.title}</h3>
            <p className="text-text-muted">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyRedbricks;
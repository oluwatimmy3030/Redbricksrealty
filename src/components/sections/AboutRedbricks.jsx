import { Globe, Building2, Hammer, PiggyBank, Layers, Target } from 'lucide-react';

const aboutPoints = [
  {
    icon: Globe,
    title: 'International Property Exposure',
    description: 'Access curated real estate opportunities across multiple international markets, not limited to a single geography.'
  },
  {
    icon: Building2,
    title: 'Strategic Property Acquisition',
    description: 'We identify and acquire properties with strong fundamentals and value-add potential in growing markets.'
  },
  {
    icon: Hammer,
    title: 'Property Development & Refurbishment',
    description: 'Active development and refurbishment strategies to unlock value and create quality real estate assets.'
  },
  {
    icon: PiggyBank,
    title: 'Income-Generating Real Estate',
    description: 'Focus on properties that produce rental income and cash flow from day one.'
  },
  {
    icon: Layers,
    title: 'Multiple Ownership Structures',
    description: 'Flexible approaches including direct ownership, fractional participation, and development partnerships.'
  },
  {
    icon: Target,
    title: 'Long-Term Wealth Building',
    description: 'Strategies designed for sustainable capital appreciation and generational wealth through real estate.'
  }
];

const AboutRedbricks = () => {
  return (
    <section id="about" className="section bg-background container" aria-labelledby="about-heading">
      <div className="text-center mb-16">
        <h2 id="about-heading" className="heading-section mb-4">About Redbricks Realty</h2>
        <p className="text-lead mx-auto">International real estate investment with a focus on strategic opportunities across borders.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {aboutPoints.map((point, index) => (
          <div key={index} className="text-center p-6 card-hover">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <point.icon className="w-7 h-7" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">{point.title}</h3>
            <p className="text-text-muted">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutRedbricks;
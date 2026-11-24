import { investmentConfig } from '../../config/investmentConfig';
import { RotateCcw, Repeat, Building, Home, Building2, LandPlot } from 'lucide-react';

const developmentStrategies = [
  {
    icon: RotateCcw,
    title: 'Buy, Refurbish & Flip',
    description: 'Acquire undervalued properties, add value through targeted refurbishment, and sell for capital gains within 12–36 months.',
    details: ['Short-term capital appreciation', 'Active value creation', 'Quick capital recycling']
  },
  {
    icon: Repeat,
    title: 'BRRR Strategy',
    description: 'Buy, Refurbish, Rent, Refinance, Repeat. Build a portfolio by recycling capital through refinancing after value-add.',
    details: ['Capital recycling', 'Rental income during hold', 'Portfolio scaling potential']
  },
  {
    icon: Building,
    title: 'Build, Operate & Lease/Rent',
    description: 'Ground-up development or major conversion to create new income-producing assets for long-term hold or strategic exit.',
    details: ['New asset creation', 'Custom specifications', 'Premium rental yields']
  }
];

const fractionalDetails = [
  'Access international properties with lower capital commitment',
  'Diversify across multiple properties and geographies',
  'Professional management and administration included',
  'Liquidity options through secondary market structures',
  'Proportional rental income and capital appreciation'
];

const directDetails = [
  'Full ownership of selected international residential properties',
  'Direct rental income and full capital appreciation',
  'Control over property management and disposition timing',
  'Eligibility for local financing and tax structures',
  'Legacy asset for generational wealth transfer'
];

const InvestmentStrategies = () => {
  const showReturns = investmentConfig.enablePublicReturnFigures;

  return (
    <section id="strategies" className="section container" aria-labelledby="strategies-heading">
      <div className="text-center mb-16">
        <h2 id="strategies-heading" className="heading-section mb-4">International Property Strategies</h2>
        <p className="text-lead">Three distinct approaches to international real estate investment, each with different horizons and structures.</p>
      </div>

      {/* A. Property Development & Trading */}
      <div className="mb-24">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Property Development & Trading</h3>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-10">
          Active strategies targeting 12–36 month horizons through value creation and capital recycling.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {developmentStrategies.map((strategy, index) => (
            <div key={index} className="card-hover p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <strategy.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="heading-card mb-3">{strategy.title}</h4>
              <p className="text-text-muted mb-4">{strategy.description}</p>
              <ul className="space-y-2 text-sm text-text-muted">
                {strategy.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
              {showReturns && (
                <div className="mt-4 p-3 bg-secondary/10 rounded-lg text-secondary text-sm font-medium">
                  Target: {investmentConfig.strategies.development.targetReturn} over {investmentConfig.strategies.development.horizon}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* B. Fractional Property Ownership */}
      <div id="ownership" className="mb-24">
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Fractional Property Ownership</h3>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-10">
          Participate in international real estate ownership without acquiring an entire property. A mid-term ownership approach.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {fractionalDetails.map((detail, index) => (
            <div key={index} className="card-hover p-6">
              <p className="text-text-muted flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" aria-hidden="true" />
                {detail}
              </p>
            </div>
          ))}
          {showReturns && (
            <div className="md:col-span-2 lg:col-span-3 p-6 bg-secondary/5 rounded-xl border border-secondary/20">
              <h4 className="heading-card mb-3 text-secondary">Projected Returns (Internal - Not Public)</h4>
              <p className="text-text-muted">
                {investmentConfig.strategies.fractional.description} Target: {investmentConfig.strategies.fractional.targetReturn} ({investmentConfig.strategies.fractional.horizon} horizon).
              </p>
            </div>
          )}
        </div>
      </div>

      {/* C. Direct Property Ownership */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">Direct Property Ownership</h3>
        <p className="text-text-muted text-center max-w-2xl mx-auto mb-10">
          Acquire direct ownership of selected international properties. A long-term ownership approach for rental income and capital appreciation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Home, title: 'Residential Properties', desc: 'Prime residential assets in established international markets' },
            { icon: Building2, title: 'Income-Generating Properties', desc: 'Commercial and mixed-use assets with existing tenancies' },
            { icon: Home, title: 'Rental Property Ownership', desc: 'Direct landlord position with full rental income rights' },
            { icon: LandPlot, title: 'Long-Term Ownership', desc: 'Generational assets with appreciation and income potential' }
          ].map((item, index) => (
            <div key={index} className="card-hover p-6 h-full">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h4 className="heading-card mb-2">{item.title}</h4>
              <p className="text-text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        {showReturns && (
          <div className="mt-8 p-6 bg-secondary/5 rounded-xl border border-secondary/20 max-w-3xl mx-auto">
            <h4 className="heading-card mb-3 text-secondary">Projected Returns (Internal - Not Public)</h4>
            <p className="text-text-muted">
              {investmentConfig.strategies.direct.description} Target: {investmentConfig.strategies.direct.targetReturn} ({investmentConfig.strategies.direct.horizon} horizon).
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InvestmentStrategies;
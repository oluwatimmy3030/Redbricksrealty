import { investmentConfig } from '../../config/investmentConfig';
import { Clock, Calendar, Infinity } from 'lucide-react';

const horizons = [
  {
    id: 'short-term',
    icon: Clock,
    label: 'Short-Term',
    period: '12–36 Months',
    strategy: 'Property Development & Trading',
    description: 'Active value-creation strategies including refurbishment, flipping, and BRRR. Capital is deployed, value is added, and returns are realised through sale or refinancing.',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
    borderColor: 'border-primary/20'
  },
  {
    id: 'mid-term',
    icon: Calendar,
    label: 'Mid-Term',
    period: '3–7+ Years',
    strategy: 'Fractional Property Ownership',
    description: 'Participate in property ownership with professional management. Receive proportional rental income and benefit from capital appreciation over the hold period.',
    iconBg: 'bg-secondary/10',
    iconColor: 'text-secondary',
    borderColor: 'border-secondary/20'
  },
  {
    id: 'long-term',
    icon: Infinity,
    label: 'Long-Term',
    period: '7+ Years / Generational',
    strategy: 'Direct Property Ownership',
    description: 'Full ownership of international real estate assets. Direct rental income, full capital appreciation, and control over disposition timing for legacy wealth.',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
    borderColor: 'border-green-500/20'
  }
];

const InvestmentHorizons = () => {
  const showReturns = investmentConfig.enablePublicReturnFigures;

  return (
    <section id="horizons" className="section bg-background container" aria-labelledby="horizons-heading">
      <div className="text-center mb-16">
        <h2 id="horizons-heading" className="heading-section mb-4">Investment Horizons</h2>
        <p className="text-lead">Different strategies align with different time horizons and investor objectives. No guaranteed returns.</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Timeline connector - desktop only */}
        <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-5rem)] bg-border" aria-hidden="true" />

        <div className="grid md:grid-cols-3 gap-12 lg:gap-8 relative z-10">
          {horizons.map((horizon, index) => (
            <div key={horizon.id} className="relative">
              {/* Timeline dot - desktop */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-20 w-4 h-4 rounded-full bg-surface border-4 {horizon.borderColor} z-20" aria-hidden="true" />

              <div className="card-hover p-8 h-full border {horizon.borderColor} relative">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl ${horizon.iconBg} flex items-center justify-center mx-auto mb-4 ${horizon.iconColor}`}>
                    <horizon.icon className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">{horizon.label}</h3>
                  <p className="text-secondary font-semibold">{horizon.period}</p>
                </div>

                <h4 className="heading-card mb-3 text-center">{horizon.strategy}</h4>
                <p className="text-text-muted mb-6">{horizon.description}</p>

                <div className="p-4 bg-background rounded-lg">
                  <p className="text-sm font-medium text-primary mb-2">Typical Characteristics:</p>
                  <ul className="space-y-1 text-sm text-text-muted">
                    {horizon.id === 'short-term' && (
                      <>
                        <li>• Active management required</li>
                        <li>• Higher execution risk</li>
                        <li>• Faster capital recycling</li>
                        <li>• Market timing sensitive</li>
                      </>
                    )}
                    {horizon.id === 'mid-term' && (
                      <>
                        <li>• Passive ownership structure</li>
                        <li>• Professional management</li>
                        <li>• Diversification benefits</li>
                        <li>• Moderate liquidity</li>
                      </>
                    )}
                    {horizon.id === 'long-term' && (
                      <>
                        <li>• Full control & responsibility</li>
                        <li>• Direct income & appreciation</li>
                        <li>• Legacy wealth potential</li>
                        <li>• Lower liquidity</li>
                      </>
                    )}
                  </ul>
                </div>

                {showReturns && (
                  <div className="mt-6 p-4 bg-secondary/5 rounded-lg border {horizon.borderColor}">
                    <p className="text-sm font-medium text-secondary mb-1">Internal Projection (Not Public)</p>
                    <p className="text-text-muted text-sm">
                      {horizon.id === 'short-term' && `Target: ${investmentConfig.strategies.development.targetReturn} over ${investmentConfig.strategies.development.horizon}`}
                      {horizon.id === 'mid-term' && `Target: ${investmentConfig.strategies.fractional.targetReturn} (${investmentConfig.strategies.fractional.horizon})`}
                      {horizon.id === 'long-term' && `Target: ${investmentConfig.strategies.direct.targetReturn} (${investmentConfig.strategies.direct.horizon})`}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-text-muted">
        <p>Past or projected performance is not a guarantee of future results. All investments involve risk including possible loss of capital.</p>
      </div>
    </section>
  );
};

export default InvestmentHorizons;
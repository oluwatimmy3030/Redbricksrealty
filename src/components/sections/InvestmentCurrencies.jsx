import { investmentConfig } from '../../config/investmentConfig';

const InvestmentCurrencies = () => {
  return (
    <section id="currencies" className="section container" aria-labelledby="currencies-heading">
      <div className="text-center mb-16">
        <h2 id="currencies-heading" className="heading-section mb-4">Investment Currencies</h2>
        <p className="text-lead">Our international framework accommodates multiple currencies to serve global investors.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {investmentConfig.currencies.map((currency, index) => (
          <div key={currency.code} className="card-hover p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2">{currency.symbol}</div>
            <h3 className="text-lg font-semibold text-primary mb-1">{currency.code}</h3>
            <p className="text-text-muted text-sm mb-4">{currency.name}</p>
            <div className="p-3 bg-background rounded-lg border border-border">
              <p className="text-xs text-text-muted">
                Acceptance varies by investment opportunity
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-background rounded-xl border border-border max-w-3xl mx-auto">
        <h4 className="heading-card mb-3 text-center">Important Note</h4>
        <p className="text-text-muted text-center text-sm">
          Not all investments accept all four currencies. Currency availability depends on the specific opportunity,
          jurisdiction, and regulatory structure. Investors should confirm accepted currencies for each individual
          opportunity through the approved investor process.
        </p>
      </div>
    </section>
  );
};

export default InvestmentCurrencies;
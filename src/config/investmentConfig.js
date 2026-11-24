export const investmentConfig = {
  enablePublicReturnFigures: false,
  enablePublicInvestmentOffers: false,
  enableInvestmentSubscription: false,

  strategies: {
    development: {
      name: 'Property Development & Trading',
      horizon: '12–36 months',
      targetReturn: 'up to 30%',
      currency: 'USD',
      description: 'Buy, refurbish and flip; BRRR; build, operate and lease/rent strategies.'
    },
    fractional: {
      name: 'Fractional Property Ownership',
      horizon: 'Mid-term',
      targetReturn: 'up to 10% annually',
      currency: 'USD',
      description: 'Participate in international real estate ownership without acquiring an entire property.'
    },
    direct: {
      name: 'Direct Property Ownership',
      horizon: 'Long-term',
      targetReturn: '5–10% rental yield annually',
      currency: 'USD',
      description: 'Acquire direct ownership of selected international residential and income-generating properties.'
    }
  },

  currencies: [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' }
  ],

  disclaimer: `IMPORTANT NOTICE: This website is intended solely for sophisticated investors and high-net-worth individuals. The information provided is general in nature and does not constitute an offer to sell, invitation to subscribe, investment recommendation or solicitation to invest in any security, property investment scheme or financial product. No investment offer is being made through this website. Any future investment opportunity, where applicable, will be subject to relevant regulatory approvals, eligibility requirements and definitive legal documentation. Investments in real estate involve risks, including possible loss of capital, illiquidity, currency fluctuations and changes in property market conditions. Past or projected performance is not a guarantee of future results.`
};
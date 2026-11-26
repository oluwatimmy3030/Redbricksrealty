export const siteConfig = {
  name: 'Redbricks Realty',
  tagline: 'International Property Investment',
  description: 'Discover international real estate opportunities through strategic property development, ownership and rental income models. Redbricks connects sophisticated investors with global property opportunities.',

  contact: {
    email: 'info@redbricksrealty.net'
  },

  navigation: {
    main: [
      { label: 'Home', href: '#hero' },
      { label: 'Investment Strategies', href: '#strategies' },
      { label: 'Ownership Models', href: '#ownership' },
      { label: 'How It Works', href: '#how-it-works' }
    ],
    ctaButtons: [
      { label: 'Sign Up', href: 'https://portal.redbricksrealty.net/signup', variant: 'ghost' },
      { label: 'Login', href: 'https://portal.redbricksrealty.net/login', variant: 'primary' }
    ]
  },

  footer: {
    quickLinks: [
      { label: 'Home', href: '#hero' },
      { label: 'About Us', href: '#about' },
      { label: 'Investment Strategies', href: '#strategies' },
      { label: 'Ownership Models', href: '#ownership' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Contact', href: '#contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' }
    ]
  },

  portalUrls: {
    signup: 'https://portal.redbricksrealty.net/signup',
    login: 'https://portal.redbricksrealty.net/login'
  },

  seo: {
    defaultTitle: 'Redbricks Realty | International Property Investment',
    titleTemplate: '%s | Redbricks Realty',
    defaultDescription: 'Discover international real estate opportunities through strategic property development, ownership and rental income models.',
    ogImage: '/og-image.jpg',
    twitterHandle: '@redbricksrealty'
  }
};
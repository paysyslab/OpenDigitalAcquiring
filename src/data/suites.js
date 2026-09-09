export const suites = [
  {
    id: 'local',
    path: '/docs/RAAST/RAAST-P2M-Acquiring',
    eyebrow: 'Domestic acquiring',
    name: 'Raast Acquiring',
    summary:
      'RAAST P2M push payments and card acquiring, plus the merchant lifecycle, terminal, and settlement management that runs behind them.',
    bestFor: 'Banks acquiring merchants that settle in PKR',
    coverage: 'Pakistan · PKR settlement',
    settlement: 'Same-day batch settlement',
    rails: ['SQRC', 'DQRC', 'RTP Now', 'RTP Later', 'POS / mPOS / SoftPOS'],
    cta: 'Enter Raast Acquiring',
  },
  {
    id: 'international',
    path: '/docs/International/Introduction',
    eyebrow: 'Cross-border acquiring',
    name: 'International Acquiring',
    summary:
      'The Merchant Management Platform for cross-border acquiring — backoffice administration, merchant onboarding, and a merchant-facing portal in one reference.',
    bestFor: 'Teams managing merchant hierarchies across multiple markets',
    coverage: 'Multi-market merchant hierarchies',
    settlement: 'Configurable settlement & reconciliation framework',
    rails: ['Parent / child onboarding', 'Role & aggregator management', 'Alias & till management', 'Scan-and-pay QR'],
    cta: 'Enter International Acquiring',
  },
];

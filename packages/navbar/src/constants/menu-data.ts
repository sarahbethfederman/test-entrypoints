export interface MenuItem {
  label: string;
  link: string | undefined;
  children: Array<MenuSubItem>;
}

export interface MenuSubItem {
  label: string;
  link: string | undefined;
}

export const defaultMenu: MenuItem[] = [
  {
    label: 'About Us',
    link: undefined,
    children: [
      {
        label: 'Your best interest',
        link: '/your-best-interest/',
      },
      {
        label: 'Contact us',
        link: '/contactus/',
      },
      {
        label: 'Get inspired',
        link: '/inspire/',
      },
    ],
  },
  {
    label: 'Home loans',
    link: undefined,
    children: [
      {
        label: 'How to get a home loan',
        link: '/guides/',
      },
      {
        label: 'Refinance',
        link: '/owning-property/refinance/',
      },
      {
        label: 'Lenders',
        link: '/home-loans/lenders/',
      },
      {
        label: 'Stamp duty',
        link: '/home-loans/stamp-duty/',
      },
      {
        label: 'Buy a home',
        link: '/buying-property/purchase-property/',
      },
      {
        label: 'Invest in property',
        link: '/home-loans/property-investment/',
      },
      {
        label: 'FAQ',
        link: '/frequently-asked-questions/',
      },
    ],
  },
  {
    label: 'Calculators',
    link: undefined,
    children: [
      {
        label: 'Property report',
        link: '/property-report/',
      },
      {
        label: 'Equity calculator',
        link: '/calculators/home-loans/equity-calculator/',
      },
      {
        label: 'Stamp duty calculator',
        link: '/home-loans/stamp-duty/calculator/?page=0',
      },
      {
        label: 'Offset calculator',
        link: '/calculators/home-loans/offset-calculator/',
      },
      {
        label: 'Repayment calculator',
        link: '/calculators/home-loans/home-loan-repayment-calculator/',
      },
      {
        label: 'Debt consolidation calculator',
        link: '/calculators/home-loans/debt-consolidation-calculator/',
      },
      {
        label: 'Borrowing power calculator',
        link: '/home-loans/calculators/borrowing-power-calculator/',
      },
      {
        label: 'LMI Calculator',
        link: '/calculators/home-loans/lmi-calculator/',
      },
    ],
  },
  {
    label: 'Blog',
    link: undefined,
    children: [
      {
        label: 'Insights',
        link: '/inspire/category/insights/',
      },
      {
        label: 'Finance',
        link: '/inspire/category/finance/',
      },
      {
        label: 'Lifestyle',
        link: '/inspire/category/lifestyle/',
      },
      {
        label: 'Lendi homes',
        link: '/inspire/category/lendi-homes/',
      },
      {
        label: 'Property',
        link: '/inspire/category/property/',
      },
      {
        label: 'Design',
        link: '/inspire/category/design/',
      },
      {
        label: 'Life at Lendi',
        link: '/inspire/category/life-at-lendi/',
      },
    ],
  },
  {
    label: 'Guides',
    link: '/guides/',
    children: [],
  },
];

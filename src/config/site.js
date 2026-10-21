// Brand-level settings. Change the name, offers, fees or contact details here, not in components.
export const site = {
  name: 'JustEthnic',
  tagline: 'Wear your culture',
  currency: 'INR',
  locale: 'en-IN',
  freeShippingOver: 1499,
  shippingFee: 79,
  codFee: 49,
  stitchFee: 699,
  orderPrefix: 'JE',
  instagram: '@justethnic',
  phone: '+91 98290 11447',
  email: 'namaste@justethnic.in',

  announcements: [
    'Free shipping on orders above ₹1,499',
    'The Diwali edit is here. Extra 10% off with code UTSAV10',
    'Saree fall and pico done free on every saree',
  ],

  // Coupon codes accepted at bag / checkout (demo).
  coupons: {
    UTSAV10: { type: 'percent', value: 10, label: '10% off the festive edit' },
    FIRST15: { type: 'percent', value: 15, label: '15% off your first order', min: 1999 },
    DIWALI500: { type: 'flat', value: 500, label: '₹500 off orders above ₹3,999', min: 3999 },
  },

  footer: {
    blurb: 'Sarees, anarkalis and kurta sets for every haldi, mehendi, puja and pheras. Hand block prints from Bagru and Sanganer.',
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'Sarees', to: '/shop/sarees' },
          { label: 'Anarkalis', to: '/shop/anarkalis' },
          { label: 'Kurta Sets', to: '/shop/kurta-sets' },
          { label: 'Block Prints', to: '/shop/block-prints' },
          { label: 'Lehengas & Shararas', to: '/shop/lehengas' },
          { label: 'The Diwali Edit', to: '/shop?occasion=festive' },
        ],
      },
      {
        title: 'Help',
        links: [
          { label: 'Track order', to: '/account' },
          { label: 'Size guide', to: '/help#sizing' },
          { label: 'Shipping', to: '/help#shipping' },
          { label: 'Returns', to: '/help#returns' },
          { label: 'Contact', to: '/help#contact' },
        ],
      },
      {
        title: 'JustEthnic',
        links: [
          { label: 'Our story', to: '/about' },
          { label: 'The craft', to: '/about#craft' },
          { label: 'Wishlist', to: '/wishlist' },
          { label: 'Privacy', to: '/help#privacy' },
        ],
      },
    ],
  },
}

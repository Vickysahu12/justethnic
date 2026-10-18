// Navigation content: the mega-menu panels (desktop), menu tabs (phone) and quick chips.

export const megaMenus = [
  {
    id: 'shop',
    label: 'Shop',
    to: '/shop',
    columns: [
      {
        title: 'Categories',
        items: [
          { label: 'Sarees', desc: 'Banarasi, organza, kalamkari', image: 'j30-1', to: '/shop/sarees' },
          { label: 'Anarkalis', desc: 'Forty panels of twirl', image: 'j02-1', to: '/shop/anarkalis' },
          { label: 'Kurta Sets', desc: 'With dupatta, ready to wear', image: 'j06-1', to: '/shop/kurta-sets' },
          { label: 'Block Prints', desc: 'Hand printed in Bagru', image: 'j14-1', to: '/shop/block-prints' },
          { label: 'Lehengas & Shararas', desc: 'For the big nights', image: 'j16-1', to: '/shop/lehengas' },
        ],
      },
    ],
    feature: { image: 'j30-1', title: 'The Maroon Banarasi, woven in Varanasi', to: '/product/maroon-banarasi-saree' },
  },
  {
    id: 'occasion',
    label: 'Occasions',
    to: '/shop',
    columns: [
      {
        title: 'Dress for the occasion',
        items: [
          { label: 'Haldi', desc: 'Yellows, ivories, florals', image: 'j09-1', to: '/shop?occasion=haldi' },
          { label: 'Mehendi', desc: 'Greens, pinks, gota', image: 'j25-1', to: '/shop?occasion=mehendi' },
          { label: 'Wedding guest', desc: 'Silk, zari and drama', image: 'j13-1', to: '/shop?occasion=wedding' },
          { label: 'Festive & Diwali', desc: 'Lights, pujas, card parties', image: 'j21-1', to: '/shop?occasion=festive' },
          { label: 'Puja & everyday', desc: 'Easy cottons and soft silks', image: 'j40-1', to: '/shop?occasion=puja' },
        ],
      },
    ],
    feature: { image: 'j06-1', title: 'The sindoor red set, back in stock', to: '/product/sindoor-red-embroidered-set' },
  },
]

export const navLinks = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Sarees', to: '/shop/sarees' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]

export const quickChips = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Sarees', to: '/shop/sarees' },
  { label: 'Anarkalis', to: '/shop/anarkalis' },
  { label: 'Kurta Sets', to: '/shop/kurta-sets' },
  { label: 'Block Prints', to: '/shop/block-prints' },
  { label: 'Lehengas', to: '/shop/lehengas' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]

# JustEthnic

A demo storefront for JustEthnic, "Wear your culture". It sells sarees, anarkalis, kurta sets, hand block prints and lehengas: 49 pieces from ₹999 to ₹4,999.

## Run it

```bash
npm install
npm run dev
```

Build with `npm run build`, then preview with `npm run preview`.

## What works

- **Home:**
  - Occasion-chapter hero (Diwali, Haldi, Mehendi, Shaadi).
  - Categories, the occasion mosaic and the festive edit tabs.
  - A block-print "printing table" you can stamp on.
  - A Banarasi zoom loupe and a Diwali countdown.
  - Customer notes, services, coupon codes and an Instagram wall.
- **Shop:**
  - Category pages, with filters in the URL: fabric, occasion, colour, price.
  - Sort, and search with suggestions.
- **Product page:**
  - Gallery with zoom, colour siblings, size picker and size guide.
  - Free-size sarees with optional blouse stitching (+₹699).
  - Pincode check, reviews, related and recently viewed.
- **Bag:**
  - Drawer and full page.
  - Free shipping progress over ₹1,499.
  - Coupons: `UTSAV10`, `FIRST15` (₹1,999+), `DIWALI500` (₹3,999+).
- **Checkout:**
  - Address with pincode autofill, then UPI, card, net banking or COD (₹49).
  - Order confirmation and order history on this device.
- **Also:** wishlist, account, help/FAQ, our story, a 404 page and an error page.

All data is local (`src/data`). The cart, wishlist and orders are saved in localStorage. No real payment is taken. Reviews and customer notes are sample content.

## Stack

- Vite, React 19, React Router 7 and Tailwind CSS v4.
- Motion, Lenis and Phosphor icons.
- Noto Serif Display, Jost and Noto Serif Devanagari fonts.

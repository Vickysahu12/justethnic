// Editorial content for the storefront. Kept out of components so the client
// (or a CMS later) can change copy and imagery in one place.
// Image ids refer to public/media/products (jNN-1 full look, jNN-2 close crop).

// Hero: four occasion chapters. Each one lays three looks across the spread; the italic
// line under the brand promise changes with the chapter.
export const heroChapters = [
  {
    id: 'diwali',
    label: 'Diwali',
    deva: 'दीपावली',
    line: 'for the night of a thousand diyas',
    images: ['j26-1', 'j02-1', 'j42-1'],
    cta: { label: 'Shop the Diwali edit', to: '/shop?occasion=festive' },
  },
  {
    id: 'haldi',
    label: 'Haldi',
    deva: 'हल्दी',
    line: 'for the morning in yellow',
    images: ['j05-1', 'j09-1', 'j24-1'],
    cta: { label: 'Shop for the haldi', to: '/shop?occasion=haldi' },
  },
  {
    id: 'mehendi',
    label: 'Mehendi',
    deva: 'मेहंदी',
    line: 'for an afternoon of henna and dholak',
    images: ['j01-1', 'j25-1', 'j10-1'],
    cta: { label: 'Shop for the mehendi', to: '/shop?occasion=mehendi' },
  },
  {
    id: 'shaadi',
    label: 'Shaadi',
    deva: 'शादी',
    line: 'for the pheras and the photographs',
    images: ['j30-1', 'j12-1', 'j13-1'],
    cta: { label: 'Shop wedding-guest looks', to: '/shop?occasion=wedding' },
  },
]

export const perks = [
  { icon: 'truck', title: 'Free shipping', body: 'On orders above ₹1,499' },
  { icon: 'returns', title: '7-day returns', body: 'Free pickup from home' },
  { icon: 'cash', title: 'Cash on delivery', body: 'Pay when it arrives' },
  { icon: 'scissors', title: 'Fall & pico free', body: 'On every saree we send' },
]

export const categoryLabels = {
  sarees: 'Sarees',
  anarkalis: 'Anarkalis',
  'kurta-sets': 'Kurta Sets',
  'block-prints': 'Block Prints',
  lehengas: 'Lehengas & Shararas',
}

export const categorySingular = {
  sarees: 'Saree',
  anarkalis: 'Anarkali',
  'kurta-sets': 'Kurta Set',
  'block-prints': 'Block Print Set',
  lehengas: 'Lehenga Set',
}

export const categories = [
  { id: 'sarees', label: 'Sarees', image: 'j43-1', to: '/shop/sarees', from: 2499 },
  { id: 'anarkalis', label: 'Anarkalis', image: 'j22-1', to: '/shop/anarkalis', from: 2999 },
  { id: 'kurta-sets', label: 'Kurta Sets', image: 'j04-1', to: '/shop/kurta-sets', from: 2299 },
  { id: 'block-prints', label: 'Block Prints', image: 'j39-1', to: '/shop/block-prints', from: 1499 },
  { id: 'lehengas', label: 'Lehengas & Shararas', image: 'j16-1', to: '/shop/lehengas', from: 4799 },
]

// "Occasion" is stored in each product's `occasions`.
export const occasionLabels = {
  festive: 'Festive & Diwali',
  wedding: 'Wedding guest',
  haldi: 'Haldi',
  mehendi: 'Mehendi',
  puja: 'Puja',
  everyday: 'Everyday',
}

// The occasion mosaic (ref: Walima / Party wear tiles). `size` drives the grid span.
export const occasions = [
  { id: 'wedding', label: 'Wedding guest', note: 'Silk, zari and a little drama', image: 'j11-1', to: '/shop?occasion=wedding', size: 'tall', focus: '50% 22%' },
  { id: 'festive', label: 'Festive', note: 'Diwali, Teej, Karva Chauth', image: 'j21-1', to: '/shop?occasion=festive', size: 'wide', focus: '50% 8%' },
  { id: 'haldi', label: 'Haldi', note: 'Yellows and ivories', image: 'j27-1', to: '/shop?occasion=haldi', size: 'small', focus: '50% 25%' },
  { id: 'mehendi', label: 'Mehendi', note: 'Greens, pinks and gota', image: 'j08-1', to: '/shop?occasion=mehendi', size: 'small', focus: '50% 30%' },
  { id: 'puja', label: 'Puja', note: 'Soft cottons, easy silks', image: 'j28-1', to: '/shop?occasion=puja', size: 'small', focus: '50% 25%' },
]

// Curated grid tabs.
export const collectionTabs = [
  { id: 'new', label: 'New in', query: { sort: 'new' } },
  { id: 'sarees', label: 'Sarees', query: { category: 'sarees', sort: 'rating' } },
  { id: 'anarkalis', label: 'Anarkalis', query: { category: 'anarkalis', sort: 'rating' } },
  { id: 'kurta-sets', label: 'Kurta sets', query: { category: 'kurta-sets', sort: 'rating' } },
]

// The block-print studio: how a Bagru print is made, and the dyes you can stamp with.
export const chhapai = {
  steps: [
    { title: 'Carve', body: 'A craftsman cuts the buta into sheesham wood by hand. One block can take a week.' },
    { title: 'Mix', body: 'Dyes are cooked from madder root, indigo, pomegranate rind and rusted iron.' },
    { title: 'Press', body: 'The printer stamps the cloth by eye, block after block, along the length of the table.' },
    { title: 'Wash', body: 'Every metre is washed, sun-dried and checked before it is cut and stitched.' },
  ],
  dyes: [
    { id: 'madder', label: 'Madder', color: 'var(--color-madder)' },
    { id: 'indigo', label: 'Indigo', color: 'var(--color-indigo)' },
    { id: 'kohl', label: 'Kohl', color: 'var(--color-ink)' },
  ],
  images: ['j14-2', 'j20-2', 'j40-2'],
}

// Banarasi spotlight: one saree, looked at closely.
export const spotlight = {
  productId: 'j30',
  image: 'j30-1',
  title: 'Woven in Varanasi',
  body: 'Each Banarasi takes a weaver and his son about fifteen days on a pit loom. The gold buttis are woven in, not printed, so they catch the light from every side. Hover over the saree to look closer.',
  facts: [
    ['Weave', 'Kadhua, zari buttis'],
    ['Length', '5.5 m saree, 0.8 m blouse'],
    ['Pallu', 'Heavy brocade, 32 inches'],
  ],
}

// The Diwali edit: split feature with a countdown to Lakshmi Puja.
export const festiveEdit = {
  title: 'The Diwali edit',
  body: 'Velvets, Banarasis and red that photographs well under diya light. Order by 31 October for delivery before Dhanteras.',
  image: 'j46-1',
  date: '2026-11-08T18:00:00+05:30',
  to: '/shop?occasion=festive',
}

// Shop by price.
export const priceStops = [
  { label: 'Under ₹1,999', max: 1999, to: '/shop?price=u1999' },
  { label: 'Under ₹2,999', max: 2999, to: '/shop?price=u1999,2000-2999' },
  { label: 'Under ₹3,999', max: 3999, to: '/shop?price=u1999,2000-2999,3000-3999' },
  { label: 'Under ₹4,999', max: 4999, to: '/shop' },
]

export const offers = [
  { title: '10% off the festive edit', code: 'UTSAV10' },
  { title: '15% off your first order', code: 'FIRST15' },
  { title: '₹500 off above ₹3,999', code: 'DIWALI500' },
]

// Sample customer notes (demo content), each linked to what she wore.
export const testimonials = [
  { name: 'Ananya Sharma', city: 'Jaipur', occasion: 'Wore it to her cousin’s sangeet', rating: 5, productId: 'j03', text: 'Three aunties asked where the blue anarkali was from. The flare is unreal when you dance.' },
  { name: 'Meera Iyer', city: 'Chennai', occasion: 'Wore it for Varalakshmi puja', rating: 5, productId: 'j28', text: 'The kalamkari saree is so light I forgot I was wearing six yards. Fall and pico were already done.' },
  { name: 'Riya Malhotra', city: 'Delhi', occasion: 'Wore it for Karva Chauth', rating: 5, productId: 'j06', text: 'The red is exactly the red in the photo. My mother-in-law approved, which is all that matters.' },
  { name: 'Sana Khan', city: 'Lucknow', occasion: 'Wore it for Eid', rating: 4, productId: 'j21', text: 'Velvet that does not feel heavy. The pink embroidery on the green is so pretty up close.' },
  { name: 'Pooja Desai', city: 'Ahmedabad', occasion: 'Wears it to work on Fridays', rating: 5, productId: 'j40', text: 'The indigo dabu set softened beautifully after two washes. I have it in maroon too now.' },
]

export const instagram = {
  handle: '@justethnic',
  tag: '#WearYourCulture',
  href: 'https://instagram.com',
  images: ['j31-1', 'j19-1', 'j36-1', 'j48-1', 'j33-1', 'j44-1'],
}

// The services row that closes the page (ref: custom orders / worldwide delivery / gift vouchers).
export const services = [
  { icon: 'scissors', title: 'Blouse stitching', body: 'Send your measurements, we stitch the blouse for ₹699.' },
  { icon: 'truck', title: 'Ships across India', body: 'Dispatched in 48 hours, COD everywhere we deliver.' },
  { icon: 'ruler', title: 'Size help on WhatsApp', body: 'Not sure about the fit? Message us a photo.' },
  { icon: 'gift', title: 'Shagun gift cards', body: 'Let her choose. From ₹1,100.' },
]

export const serviceRow = perks

// Review pool used to fill product pages (demo).
export const reviewPool = [
  { name: 'Kritika S.', rating: 5, title: 'Looks richer in person', text: 'The colour and the work are even better than the photos. Got so many compliments at the function.' },
  { name: 'Nandini R.', rating: 5, title: 'Perfect fit', text: 'Ordered my usual size and it fit like it was stitched for me. The dupatta is lovely.' },
  { name: 'Farah A.', rating: 4, title: 'Beautiful, runs a little long', text: 'I am 5 feet 2 and needed heels with it. Fabric and finishing are excellent.' },
  { name: 'Shalini P.', rating: 5, title: 'Arrived in time for Diwali', text: 'Delivered in three days, packed in a cloth bag. Will order the matching one for my sister.' },
  { name: 'Ishita M.', rating: 4, title: 'Great value', text: 'At this price I did not expect real zari work. Very happy with it.' },
]

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'new', label: 'New in' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export const priceBands = [
  { id: 'u1999', label: 'Under ₹2,000', min: 0, max: 1999 },
  { id: '2000-2999', label: '₹2,000 to ₹2,999', min: 2000, max: 2999 },
  { id: '3000-3999', label: '₹3,000 to ₹3,999', min: 3000, max: 3999 },
  { id: '4000-4999', label: '₹4,000 to ₹4,999', min: 4000, max: 4999 },
]

// Kurta / anarkali measurements in inches: bust, waist, hip.
export const sizeChart = [
  ['XS', '32', '26', '36'],
  ['S', '34', '28', '38'],
  ['M', '36', '30', '40'],
  ['L', '38', '32', '42'],
  ['XL', '40', '34', '44'],
  ['XXL', '42', '36', '46'],
]

// Demo catalogue built from the client's photos (public/media/products/jNN-1 / jNN-2).
// `n` is the source photo number (src/assets/image/ImgNN; Img7 repeats Img6 and is skipped).
// Shape mirrors what a products API would return, so services/catalog.js can switch to fetch() later.
// Prices sit between ₹999 and ₹4,999 as agreed; ratings and copy are sample data.

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const FREE = ['Free size']

const CATEGORY = {
  sarees: { sizes: FREE, includes: 'Saree with unstitched blouse piece (0.8 m)', care: ['Dry clean only', 'Store folded in muslin', 'Steam, do not press the zari directly'] },
  anarkalis: { sizes: SIZES, includes: 'Anarkali, churidar and dupatta', care: ['Dry clean recommended', 'Store on a padded hanger', 'Iron on low from the reverse'] },
  'kurta-sets': { sizes: SIZES, includes: 'Kurta, pants and dupatta', care: ['Gentle hand wash or dry clean', 'Wash the dupatta separately', 'Dry in shade'] },
  'block-prints': { sizes: SIZES, includes: 'Kurta and pants', care: ['Hand wash cold with mild soap', 'The first wash may bleed a little dye', 'Dry inside out in shade'] },
  lehengas: { sizes: SIZES, includes: 'Lehenga or sharara, blouse and dupatta', care: ['Dry clean only', 'Store in the garment bag provided', 'Keep away from perfume on the zari'] },
}

const item = (category) => (p) => ({ category, ...CATEGORY[category], ...p })
const saree = item('sarees')
const anar = item('anarkalis')
const kset = item('kurta-sets')
const block = item('block-prints')
const leh = item('lehengas')

const raw = [
  kset({ n: 1, name: 'Rani Pink Organza Kurta Set', fabric: 'Chanderi', craft: 'Gota patti', color: 'Rani Pink', hex: '#c2246f', occasions: ['mehendi', 'festive'], price: 3299, compareAt: 3999, rating: 4.8, reviews: 142, bestseller: true, badge: 'Bestseller', blurb: 'A rani pink chanderi kurta with gota-patti florals, straight pants and a sheer organza dupatta scattered with hand-sewn buttis.' }),
  anar({ n: 2, name: 'Rust Gold Flared Anarkali', fabric: 'Georgette', craft: 'Zari border', color: 'Rust', hex: '#a8561f', occasions: ['festive', 'wedding'], price: 3999, rating: 4.7, reviews: 88, blurb: 'Forty panels of rust georgette that open into a full circle when you turn, finished with a fine zari hem and a tissue dupatta.' }),
  anar({ n: 3, name: 'Royal Blue Silk Anarkali', fabric: 'Art Silk', craft: 'Zari border', color: 'Royal Blue', hex: '#26318c', occasions: ['wedding', 'festive'], price: 4299, compareAt: 4999, rating: 4.8, reviews: 61, family: 'silk-anarkali', blurb: 'Deep royal blue with a square neck and a contrast green brocade dupatta. Made for the sangeet.' }),
  kset({ n: 4, name: 'Blush Chanderi Straight Set', fabric: 'Chanderi', craft: 'Thread work', color: 'Blush', hex: '#d9a99a', occasions: ['puja', 'everyday'], price: 2499, rating: 4.6, reviews: 74, blurb: 'A quiet blush chanderi kurta with tonal thread work at the neck and cuffs, over straight palazzos.' }),
  anar({ n: 5, name: 'Ivory Floral Anarkali', fabric: 'Mul Cotton', craft: 'Hand-painted', color: 'Ivory', hex: '#efe4d3', occasions: ['haldi', 'puja'], price: 3499, rating: 4.7, reviews: 96, isNew: true, badge: 'New', blurb: 'Soft ivory mul with hand-painted florals that climb from the hem, and a matching floral dupatta.' }),
  kset({ n: 6, name: 'Sindoor Red Embroidered Set', fabric: 'Chanderi', craft: 'Resham embroidery', color: 'Red', hex: '#b5121f', occasions: ['festive', 'wedding'], price: 3699, compareAt: 4299, rating: 4.9, reviews: 203, bestseller: true, badge: 'Bestseller', family: 'red-festive', blurb: 'Sindoor red chanderi with resham flowers down the yoke, an organza dupatta and scalloped pants. The Karva Chauth set.' }),
  leh({ n: 8, name: 'Emerald Gota Lehenga', fabric: 'Silk Blend', craft: 'Gota patti', color: 'Emerald', hex: '#0f5b3a', occasions: ['wedding', 'mehendi'], price: 4999, rating: 4.8, reviews: 47, blurb: 'A full emerald lehenga with a wide gota border, a fitted blouse and a net dupatta edged in gold.' }),
  anar({ n: 9, name: 'Haldi Yellow Anarkali', fabric: 'Mul Cotton', craft: 'Lace trim', color: 'Yellow', hex: '#e8c23a', occasions: ['haldi', 'festive'], price: 2999, rating: 4.7, reviews: 115, blurb: 'Sunshine yellow with a V neck and lace-trimmed sleeves. Your haldi, sorted.' }),
  kset({ n: 10, name: 'Marigold Leheriya Set', fabric: 'Cotton Silk', craft: 'Leheriya', color: 'Orange', hex: '#d9541e', occasions: ['mehendi', 'festive'], price: 2899, rating: 4.6, reviews: 68, blurb: 'Hand-tied leheriya stripes in marigold and pink, with a bandhani-edged dupatta from Jaipur.' }),
  anar({ n: 11, name: 'Lal Gota Anarkali', fabric: 'Georgette', craft: 'Gota patti', color: 'Red', hex: '#b81a2b', occasions: ['wedding', 'festive'], price: 4499, rating: 4.8, reviews: 79, family: 'red-festive', blurb: 'A red georgette anarkali with gota work at the yoke and a sheer red dupatta trimmed with tassels.' }),
  leh({ n: 12, name: 'Crimson Sharara Set', fabric: 'Georgette', craft: 'Zardozi', color: 'Crimson', hex: '#a0152a', occasions: ['wedding', 'festive'], price: 4799, compareAt: 5599, rating: 4.9, reviews: 58, badge: 'Limited', blurb: 'A short kurta with zardozi buttis over a flared sharara, with a heavy-bordered dupatta. Made in small runs.' }),
  anar({ n: 13, name: 'Ruby Tiered Anarkali', fabric: 'Silk Blend', craft: 'Sequins', color: 'Ruby', hex: '#a3112d', occasions: ['wedding', 'festive'], price: 4599, rating: 4.7, reviews: 44, family: 'red-festive', blurb: 'Two tiers of ruby silk with a sweetheart neck and a sequin-sprinkled dupatta.' }),
  block({ n: 14, name: 'Maroon Dabu Print Set', fabric: 'Cotton', craft: 'Hand block print', color: 'Maroon', hex: '#6b1a22', occasions: ['everyday', 'puja'], price: 1699, rating: 4.6, reviews: 131, family: 'dabu', blurb: 'Hand-printed in Bagru with mud-resist dabu, in deep maroon with a straight pant and a printed mulmul dupatta.' }),
  kset({ n: 15, name: 'Chalk White Kota Set', fabric: 'Kota Doria', craft: 'Thread work', color: 'White', hex: '#f1f0ec', occasions: ['puja', 'everyday'], price: 2299, rating: 4.5, reviews: 52, blurb: 'Airy kota doria in white, with powder blue thread work and a chequered dupatta.' }),
  leh({ n: 16, name: 'Rose Quartz Lehenga', fabric: 'Organza', craft: 'Mirror work', color: 'Blush', hex: '#e3b2b0', occasions: ['wedding', 'mehendi'], price: 4999, rating: 4.8, reviews: 36, isNew: true, badge: 'New', blurb: 'A blush organza lehenga with tiny mirrors that catch every diya, and a matching dupatta.' }),
  kset({ n: 17, name: 'Peony Pink Kurta Set', fabric: 'Cotton Silk', craft: 'Hand-painted', color: 'Pink', hex: '#efb7c3', occasions: ['haldi', 'everyday'], price: 2599, rating: 4.6, reviews: 63, blurb: 'Soft pink with a keyhole neck and a hand-painted floral organza dupatta.' }),
  saree({ n: 18, name: 'Blush Tissue Saree', fabric: 'Tissue Silk', craft: 'Zari border', color: 'Blush', hex: '#e2a99c', occasions: ['wedding', 'puja'], price: 3499, rating: 4.7, reviews: 71, blurb: 'Light-catching tissue silk in blush with a narrow zari border. Drapes like water.' }),
  anar({ n: 19, name: 'Gulabi Angrakha Anarkali', fabric: 'Chanderi', craft: 'Thread work', color: 'Pink', hex: '#e59aa6', occasions: ['mehendi', 'festive'], price: 3299, rating: 4.6, reviews: 59, blurb: 'An angrakha-wrap anarkali in gulabi chanderi with a sheer dupatta.' }),
  block({ n: 20, name: 'Olive Sanganeri Set', fabric: 'Cotton', craft: 'Hand block print', color: 'Olive', hex: '#7c7a2c', occasions: ['everyday'], price: 1499, rating: 4.5, reviews: 88, blurb: 'Fine Sanganeri buti in olive and mustard on a straight kurta with matching pants.' }),
  kset({ n: 21, name: 'Bottle Green Velvet Set', fabric: 'Velvet', craft: 'Resham embroidery', color: 'Green', hex: '#0f4f37', occasions: ['festive', 'wedding'], price: 3999, compareAt: 4699, rating: 4.8, reviews: 49, blurb: 'Bottle green velvet with pink resham flowers, for winter weddings and Diwali nights.' }),
  anar({ n: 22, name: 'Champagne Gota Anarkali', fabric: 'Chanderi', craft: 'Gota patti', color: 'Champagne', hex: '#dccaa6', occasions: ['wedding', 'festive'], price: 3799, rating: 4.7, reviews: 65, blurb: 'Champagne chanderi with a gota-patti neckline and a long gold-edged dupatta.' }),
  anar({ n: 23, name: 'Lilac Rose Anarkali', fabric: 'Georgette', craft: 'Hand-painted', color: 'Lilac', hex: '#d5bad8', occasions: ['mehendi', 'haldi'], price: 3599, rating: 4.7, reviews: 42, blurb: 'Painted pink roses across a soft lilac georgette anarkali, with a floral dupatta.' }),
  anar({ n: 24, name: 'Coral Twirl Anarkali', fabric: 'Georgette', craft: 'Lace trim', color: 'Coral', hex: '#ec8f8a', occasions: ['festive', 'haldi'], price: 3199, rating: 4.6, reviews: 57, blurb: 'A coral pink anarkali with a lace-edged hem that twirls on cue.' }),
  kset({ n: 25, name: 'Magenta Gota Kurta Set', fabric: 'Chanderi', craft: 'Gota patti', color: 'Magenta', hex: '#b51f73', occasions: ['mehendi', 'festive'], price: 3299, rating: 4.7, reviews: 83, blurb: 'Bold magenta with gota-patti buttis on the kurta and a matching dupatta that edges in silver.' }),
  anar({ n: 26, name: 'Saffron Bandhani Anarkali', fabric: 'Georgette', craft: 'Bandhani', color: 'Orange', hex: '#e2531c', occasions: ['festive', 'mehendi'], price: 3499, rating: 4.6, reviews: 51, blurb: 'A saffron anarkali with a fine gota hem and a hand-tied bandhani dupatta.' }),
  saree({ n: 27, name: 'Mustard Kora Silk Saree', fabric: 'Kora Silk', craft: 'Zari border', color: 'Mustard', hex: '#c6a52d', occasions: ['haldi', 'festive'], price: 2999, rating: 4.6, reviews: 66, family: 'kora', blurb: 'Crisp kora silk in mustard with a woven gold border and a contrast pallu.' }),
  saree({ n: 28, name: 'Indigo Kalamkari Saree', fabric: 'Cotton Silk', craft: 'Kalamkari', color: 'Indigo', hex: '#273457', occasions: ['puja', 'everyday'], price: 2499, rating: 4.7, reviews: 94, blurb: 'Pen-drawn kalamkari florals on indigo, with a pink border. Light enough for a full day.' }),
  saree({ n: 29, name: 'Patola Print Saree', fabric: 'Silk Blend', craft: 'Patola print', color: 'Multi', hex: '#c8364f', occasions: ['festive', 'puja'], price: 2799, rating: 4.5, reviews: 48, blurb: 'Patola-inspired geometry in rani, green and white across the whole six yards.' }),
  saree({ n: 30, name: 'Maroon Banarasi Saree', fabric: 'Banarasi Silk', craft: 'Zari weave', color: 'Maroon', hex: '#5f1422', occasions: ['wedding', 'festive'], price: 4999, compareAt: 5999, rating: 4.9, reviews: 118, bestseller: true, badge: 'Bestseller', blurb: 'Woven in Varanasi: deep maroon with gold zari buttis and a heavy brocade pallu.' }),
  kset({ n: 31, name: 'Sunset Ombre Kurta Set', fabric: 'Cotton Silk', craft: 'Zari border', color: 'Orange', hex: '#d9472f', occasions: ['festive'], price: 2799, rating: 4.5, reviews: 39, blurb: 'Orange melting into pink, with a zari-bordered fuchsia dupatta.' }),
  block({ n: 32, name: 'Plum Floral Block Set', fabric: 'Cotton', craft: 'Hand block print', color: 'Plum', hex: '#5d4350', occasions: ['everyday', 'puja'], price: 1799, rating: 4.6, reviews: 72, blurb: 'Large block-printed florals on dusky plum, with a straight cut and side slits.' }),
  block({ n: 33, name: 'Rani Bagh Print Set', fabric: 'Cotton', craft: 'Hand block print', color: 'Pink', hex: '#c1427d', occasions: ['everyday', 'festive'], price: 1899, rating: 4.6, reviews: 64, blurb: 'A garden of printed blooms on rani pink, with a soft mulmul dupatta.' }),
  block({ n: 34, name: 'Kohl Black Buti Set', fabric: 'Cotton', craft: 'Hand block print', color: 'Black', hex: '#1f1b1d', occasions: ['everyday'], price: 1599, rating: 4.7, reviews: 99, family: 'dabu', blurb: 'Tiny white buti on kohl black, an embroidered neck and a printed dupatta.' }),
  saree({ n: 35, name: 'Peach Organza Saree', fabric: 'Organza', craft: 'Zari border', color: 'Peach', hex: '#efb593', occasions: ['wedding', 'puja'], price: 3299, rating: 4.7, reviews: 55, blurb: 'Sheer peach organza with a gold border and a rose blouse piece.' }),
  saree({ n: 36, name: 'Pistachio Silk Saree', fabric: 'Soft Silk', craft: 'Zari border', color: 'Mint', hex: '#a6c3a5', occasions: ['festive', 'puja'], price: 3599, rating: 4.6, reviews: 43, blurb: 'Pistachio soft silk with a rose-gold border and a contrast pink blouse piece.' }),
  block({ n: 37, name: 'Sand Ajrakh Co-ord', fabric: 'Cotton', craft: 'Ajrakh print', color: 'Sand', hex: '#c9b490', occasions: ['everyday'], price: 1999, rating: 4.5, reviews: 41, blurb: 'Ajrakh-inspired panels in sand and black, a short kurta and wide pants.' }),
  block({ n: 38, name: 'Midnight Kalidar Set', fabric: 'Cotton', craft: 'Hand block print', color: 'Black', hex: '#232023', occasions: ['everyday', 'festive'], price: 1899, rating: 4.6, reviews: 58, blurb: 'A flared kalidar kurta in black with a printed yoke and a bold printed dupatta.' }),
  block({ n: 39, name: 'Wine Bagru Print Set', fabric: 'Cotton', craft: 'Hand block print', color: 'Wine', hex: '#5a1f2b', occasions: ['everyday'], price: 1799, rating: 4.6, reviews: 77, family: 'dabu', blurb: 'Bagru florals in wine and cream, with a matching printed dupatta.' }),
  block({ n: 40, name: 'Indigo Dabu Kurta Set', fabric: 'Cotton', craft: 'Indigo dabu', color: 'Indigo', hex: '#25355c', occasions: ['everyday', 'puja'], price: 1699, rating: 4.7, reviews: 86, blurb: 'Natural indigo dabu in navy and white, with a straight pant and dupatta.' }),
  block({ n: 41, name: 'Navy Jaal Print Set', fabric: 'Cotton', craft: 'Hand block print', color: 'Navy', hex: '#2c3550', occasions: ['everyday'], price: 1599, rating: 4.5, reviews: 47, blurb: 'An all-over jaal print in navy and rust, with a wrap-style neckline.' }),
  saree({ n: 42, name: 'Teal Brocade Saree', fabric: 'Silk Blend', craft: 'Zari weave', color: 'Teal', hex: '#1f5b66', occasions: ['wedding', 'festive'], price: 4299, rating: 4.8, reviews: 52, blurb: 'Teal silk with a woven brocade pallu in old gold and copper.' }),
  saree({ n: 43, name: 'Aubergine Silk Saree', fabric: 'Soft Silk', craft: 'Zari weave', color: 'Purple', hex: '#4b1f45', occasions: ['wedding', 'festive'], price: 3999, rating: 4.7, reviews: 46, blurb: 'Deep aubergine soft silk with a green-gold border and zari buttis.' }),
  saree({ n: 44, name: 'Peacock Teal Saree', fabric: 'Soft Silk', craft: 'Zari border', color: 'Teal', hex: '#1d8a80', occasions: ['festive', 'puja'], price: 3299, rating: 4.6, reviews: 63, blurb: 'Peacock teal with a coral-edged zari border. It looks different in every light.' }),
  kset({ n: 45, name: 'Jamun Silk Kurta Set', fabric: 'Art Silk', craft: 'Thread work', color: 'Purple', hex: '#4a1d4e', occasions: ['festive', 'puja'], price: 2999, rating: 4.6, reviews: 38, blurb: 'Jamun purple silk with an embroidered yoke and a striped dupatta.' }),
  kset({ n: 46, name: 'Red Velvet Ombre Suit', fabric: 'Velvet', craft: 'Ombre dye', color: 'Red', hex: '#8f1220', occasions: ['wedding', 'festive'], price: 3799, rating: 4.7, reviews: 34, blurb: 'A straight velvet suit in deep red with an ombre organza dupatta that fades to blush.' }),
  saree({ n: 47, name: 'Mauve Paisley Saree', fabric: 'Silk Blend', craft: 'Zari weave', color: 'Mauve', hex: '#7f5a7a', occasions: ['festive', 'puja'], price: 2899, rating: 4.5, reviews: 37, blurb: 'Mauve with woven paisleys and a wide temple border.' }),
  saree({ n: 48, name: 'Mustard Paithani Saree', fabric: 'Silk Blend', craft: 'Paithani weave', color: 'Mustard', hex: '#c4911c', occasions: ['festive', 'wedding'], price: 4499, rating: 4.8, reviews: 49, family: 'kora', blurb: 'Paithani-style peacocks woven into a green-and-gold pallu on mustard silk.' }),
  kset({ n: 49, name: 'Midnight Floral Kurta Set', fabric: 'Georgette', craft: 'Sequins', color: 'Navy', hex: '#24255f', occasions: ['festive', 'wedding'], price: 3199, rating: 4.7, reviews: 45, blurb: 'Midnight blue georgette with sequin buttis and a floral-bordered dupatta.' }),
  kset({ n: 50, name: 'Rust Zardozi Kurta Set', fabric: 'Cotton Silk', craft: 'Zardozi', color: 'Rust', hex: '#a3432b', occasions: ['festive', 'puja'], price: 2899, rating: 4.6, reviews: 41, isNew: true, badge: 'New', blurb: 'Rust cotton silk with a zardozi yoke and a sheer matching dupatta.' }),
]

const slugify = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export const products = raw.map(({ n, ...p }) => {
  const id = `j${String(n).padStart(2, '0')}`
  return {
    id,
    slug: slugify(p.name),
    images: [`${id}-1`, `${id}-2`],
    ...p,
  }
})

export const getProduct = (id) => products.find((p) => p.id === id)
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)

// Media manifest. Product photos are 4:5 and live in public/media/products as <id>.webp
// (960 x 1200) and <id>-s.webp (480 x 600). `-1` is the full look, `-2` a close crop of the
// embroidery and drape. tones.json holds each photo's average colour as a placeholder.
import tones from './tones.json'

export const imageSet = (id) => ({
  id,
  src: `/media/products/${id}.webp`,
  srcSm: `/media/products/${id}-s.webp`,
  tone: tones[id] ?? 'var(--color-blush-deep)',
})

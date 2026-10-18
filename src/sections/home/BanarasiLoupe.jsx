import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { spotlight } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { imageSet } from '../../data/media'
import { useCart } from '../../features/cart/CartContext'
import { useToast } from '../../features/toast/Toast'
import { flyToCart } from '../../lib/flyToCart'
import { formatPrice } from '../../lib/format'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { StampMark } from '../../features/product/ProductCard'

const ZOOM = 2.6
const LENS = 200

/**
 * One saree, looked at closely. Moving the pointer over the photograph brings a round loupe
 * that shows the weave at 2.6x, so the zari buttis can be seen the way you would hold the pallu
 * up to the light in a shop. The lens moves by direct style writes, not React state.
 */
export function BanarasiLoupe() {
  const ref = useReveal()
  const product = getProductSync(spotlight.productId)
  const img = imageSet(spotlight.image)
  const frame = useRef(null)
  const lens = useRef(null)
  const [on, setOn] = useState(false)
  const [stamp, setStamp] = useState(0)
  const { add, setOpen } = useCart()
  const { show } = useToast()

  const move = (e) => {
    const el = lens.current
    const r = frame.current.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    el.style.transform = `translate(${x - LENS / 2}px, ${y - LENS / 2}px)`
    el.style.backgroundSize = `${r.width * ZOOM}px ${r.height * ZOOM}px`
    el.style.backgroundPosition = `${-(x * ZOOM - LENS / 2)}px ${-(y * ZOOM - LENS / 2)}px`
  }

  const addToBag = () => {
    add(product.id, product.sizes[0])
    setStamp((k) => k + 1)
    flyToCart(frame.current, img.srcSm)
    show({ title: 'Added to bag', body: product.name, image: product.images[0], action: { label: 'View bag', onClick: () => setOpen(true) } })
  }

  return (
    <section ref={ref} className="shell pt-20 lg:pt-32" aria-labelledby="spot-title">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div
          ref={frame}
          className="relative cursor-none overflow-hidden max-lg:cursor-auto"
          onPointerEnter={(e) => e.pointerType === 'mouse' && setOn(true)}
          onPointerLeave={() => setOn(false)}
          onPointerMove={(e) => e.pointerType === 'mouse' && move(e)}
          data-reveal-frame
        >
          <Img id={spotlight.image} alt={`${product.name}, the full drape`} sizes="(min-width: 1024px) 46vw, 100vw" className="aspect-[4/5]" position="50% 30%" />
          <span
            ref={lens}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 rounded-full border border-petal/80 shadow-[0_18px_40px_-12px_rgb(42_20_24/0.6),inset_0_0_0_6px_rgb(252_246_244/0.25)] transition-[opacity,scale] duration-300 ease-[var(--ease-out)]"
            style={{ width: LENS, height: LENS, backgroundImage: `url(${img.src})`, backgroundRepeat: 'no-repeat', opacity: on ? 1 : 0, scale: on ? '1' : '0.6' }}
          />
          <span className="caps pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 bg-petal/90 px-3 py-2 text-[9.5px] text-ink backdrop-blur-sm transition-opacity duration-300 max-lg:hidden" style={{ opacity: on ? 0 : 1 }}>
            <Icon name="zoom" size={15} /> Hover to look closer
          </span>
          {stamp > 0 && <StampMark key={stamp} className="top-1/2 left-1/2 size-24" />}
        </div>

        <div className="max-w-[520px]">
          <p className="deva text-[22px] text-madder" lang="hi">बनारसी</p>
          <h2 id="spot-title" className="display mt-3 text-[38px] leading-[1.02] text-ink sm:text-[54px]">
            Woven <span className="serif-italic normal-case text-madder">in Varanasi</span>
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-ink-soft">{spotlight.body}</p>
          <dl className="mt-8 border-t border-line">
            {spotlight.facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 border-b border-line py-3.5 text-[14px]">
                <dt className="caps text-[10px] text-ink-soft">{k}</dt>
                <dd className="text-right text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-7 flex items-baseline gap-3">
            <span className="serif-italic text-[30px] text-madder">{product.name}</span>
          </p>
          <p className="mt-1 flex items-baseline gap-3 text-[16px]">
            <span className="tabular-nums text-ink">{formatPrice(product.price)}</span>
            {product.compareAt && <span className="text-[14px] text-ink-soft tabular-nums line-through">{formatPrice(product.compareAt)}</span>}
            <span className="text-[13px] text-ink-soft">· fall and pico included</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button onClick={addToBag} size="lg" arrow>
              Add to bag
            </Button>
            <Link to={`/product/${product.slug}`} className="caps link-under text-[10.5px] text-madder">
              See every detail
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

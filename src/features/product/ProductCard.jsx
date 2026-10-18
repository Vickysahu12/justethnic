import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { useCart } from '../cart/CartContext'
import { useToast } from '../toast/Toast'
import { getSiblings } from '../../services/catalog'
import { imageSet } from '../../data/media'
import { flyToCart } from '../../lib/flyToCart'
import { formatPrice, discountOf } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { HeartButton } from '../wishlist/HeartButton'
import { cn } from '../../lib/cn'

/** A buta "stamp" pressed onto the photo when a piece goes into the bag. */
export function StampMark({ className }) {
  return <span aria-hidden="true" className={cn('buta-mask anim-stamp pointer-events-none absolute bg-petal', className)} />
}

/**
 * Product tile, in the order a fashion house lays it out: the photograph edge to edge, then a
 * centred caption with the craft, the name in the crimson italic, and the price. On pointer
 * devices the photo crossfades to a close crop of the work and an "Add to bag" strip rises;
 * pressing it opens the sizes (a saree goes straight in, it is free size). Adding stamps a buta
 * on the photo and flies it into the bag.
 */
export function ProductCard({ product, sizes = '(min-width: 1024px) 23vw, 50vw', priority, className }) {
  const { add, setOpen } = useCart()
  const { show } = useToast()
  const [preview, setPreview] = useState(null) // sibling product shown on swatch hover
  const [picking, setPicking] = useState(false)
  const [stamp, setStamp] = useState(0)
  const frame = useRef(null)
  const discount = discountOf(product)
  const href = `/product/${product.slug}`
  const siblings = getSiblings(product)
  const shown = preview ?? product
  const freeSize = product.sizes.length === 1

  const quickAdd = (size) => {
    add(product.id, size)
    setPicking(false)
    setStamp((k) => k + 1)
    flyToCart(frame.current, imageSet(product.images[0]).srcSm)
    show({
      title: 'Added to bag',
      body: freeSize ? product.name : `${product.name}, size ${size}`,
      image: product.images[0],
      action: { label: 'View bag', onClick: () => setOpen(true) },
    })
  }

  return (
    <article className={cn('group relative', className)} onMouseLeave={() => setPicking(false)}>
      <div ref={frame} className="relative overflow-hidden bg-blush-deep">
        <Link to={`/product/${shown.slug}`} className="block" aria-label={shown.name}>
          <Img
            key={shown.id}
            id={shown.images[0]}
            alt={`${shown.name} in ${shown.color.toLowerCase()}`}
            sizes={sizes}
            priority={priority}
            className="aspect-[4/5]"
            position="50% 25%"
            imgClassName="transition-transform duration-[1400ms] ease-[var(--ease-out)] hover-device:group-hover:scale-[1.035]"
          />
          {!preview && (
            <Img
              id={product.images[1]}
              alt=""
              sizes={sizes}
              className="absolute! inset-0 opacity-0 transition-opacity duration-700 ease-[var(--ease-out)] hover-device:group-hover:opacity-100"
              position="50% 30%"
              imgClassName="scale-[1.06] transition-transform duration-[1400ms] ease-[var(--ease-out)] hover-device:group-hover:scale-100"
            />
          )}
        </Link>

        {(product.badge || discount > 0 || product.isNew) && (
          <span
            className={cn(
              'caps pointer-events-none absolute top-3 left-3 px-2 py-1 text-[9px]',
              discount > 0 ? 'bg-madder text-petal' : 'bg-petal/95 text-madder',
            )}
          >
            {discount > 0 ? `${discount}% off` : product.badge ?? 'New'}
          </span>
        )}

        <HeartButton product={product} className="absolute top-2 right-2 transition-[opacity,transform] duration-300 hover-device:translate-y-1 hover-device:opacity-0 hover-device:group-hover:translate-y-0 hover-device:group-hover:opacity-100 has-[[aria-pressed=true]]:opacity-100" />

        {stamp > 0 && <StampMark key={stamp} className="top-1/2 left-1/2 size-20" />}

        {/* Add strip: rises from the bottom edge; opens the sizes */}
        <div
          className={cn(
            'absolute inset-x-3 bottom-3 transition-[opacity,transform] duration-[400ms] ease-[var(--ease-out)]',
            picking ? 'translate-y-0 opacity-100' : 'translate-y-[130%] opacity-0 hover-device:group-hover:translate-y-0 hover-device:group-hover:opacity-100',
          )}
        >
          {picking && !freeSize ? (
            <div className="grid grid-cols-6 border border-madder/40 bg-petal/95 backdrop-blur-sm" role="group" aria-label={`Sizes for ${product.name}`}>
              {product.sizes.map((s, i) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => quickAdd(s)}
                  className="anim-fade-up h-10 text-[12px] font-medium text-ink transition-colors hover:bg-madder hover:text-petal"
                  style={{ '--delay': `${i * 30}ms` }}
                  aria-label={`Add ${product.name}, size ${s}, to bag`}
                >
                  {s}
                </button>
              ))}
            </div>
          ) : (
            <button
              type="button"
              onClick={() => (freeSize ? quickAdd(product.sizes[0]) : setPicking(true))}
              className="serif-italic press flex h-10 w-full items-center justify-center gap-2 border border-madder/50 bg-petal/95 text-[16px] text-madder backdrop-blur-sm transition-colors hover:bg-madder hover:text-petal"
              aria-label={freeSize ? `Add ${product.name} to bag` : `Choose a size for ${product.name}`}
            >
              {freeSize ? 'Add to bag' : 'Choose size'}
            </button>
          )}
        </div>

        {/* Touch devices: a button opens the add strip */}
        <button
          type="button"
          onClick={() => setPicking((p) => !p)}
          aria-label={`Quick add ${product.name}`}
          aria-expanded={picking}
          className={cn('press absolute right-2 bottom-2 grid size-10 place-items-center bg-petal/95 text-madder shadow-float hover-device:hidden', picking && 'hidden')}
        >
          <Icon name="bag" size={19} />
        </button>
      </div>

      <div className="px-1 pt-4 text-center">
        <p className="caps text-[9px] text-ink-soft">{product.craft}</p>
        <Link to={href} className="mt-1.5 block">
          <h3 className="serif-italic line-clamp-1 text-[18px] leading-snug text-madder transition-colors duration-300 group-hover:text-madder-deep">{product.name}</h3>
        </Link>
        <p className="mt-1 flex flex-wrap items-baseline justify-center gap-x-2 text-[14px]">
          {product.compareAt && <span className="text-[12.5px] text-ink-soft tabular-nums line-through">{formatPrice(product.compareAt)}</span>}
          <span className="tabular-nums text-ink">{formatPrice(product.price)}</span>
        </p>
        {siblings.length > 1 && (
          <ul className="mt-2.5 flex items-center justify-center gap-1.5" aria-label={`${siblings.length} colours`} onMouseLeave={() => setPreview(null)}>
            {siblings.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/product/${s.slug}`}
                  aria-label={s.color}
                  onMouseEnter={() => setPreview(s.id === product.id ? null : s)}
                  onFocus={() => setPreview(s.id === product.id ? null : s)}
                  className={cn(
                    'block size-4 rounded-full ring-offset-2 ring-offset-blush transition-[box-shadow,transform] duration-200 hover:scale-110',
                    s.id === shown.id ? 'ring-1 ring-madder' : 'ring-1 ring-line',
                  )}
                  style={{ backgroundColor: s.hex }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export function ProductCardSkeleton() {
  return (
    <div aria-hidden="true">
      <div className="aspect-[4/5] animate-pulse bg-blush-deep" />
      <div className="mx-auto mt-3.5 h-2.5 w-1/3 rounded-full bg-blush-deep" />
      <div className="mx-auto mt-2 h-3.5 w-3/4 rounded-full bg-blush-deep" />
      <div className="mx-auto mt-2 h-3.5 w-1/3 rounded-full bg-blush-deep" />
    </div>
  )
}

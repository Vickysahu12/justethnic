import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { quickChips } from '../../config/navigation'
import { useCart } from '../../features/cart/CartContext'
import { useWishlist } from '../../features/wishlist/WishlistContext'
import { useSearch } from '../../features/search/SearchOverlay'
import { Icon } from '../ui/Icon'
import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { MegaNav, useIsActive } from './MegaNav'
import { cn } from '../../lib/cn'

/** Icon utility with an optional count; the count dot re-stamps when it changes. */
function Utility({ icon, label, count, bumpKey, onClick, to, className, ...props }) {
  const Tag = to ? Link : 'button'
  return (
    <Tag
      {...(to ? { to } : { type: 'button', onClick })}
      aria-label={count ? `${label}, ${count} items` : label}
      className={cn('group press relative grid size-11 place-items-center text-ink transition-colors duration-200 hover:text-madder', className)}
      {...props}
    >
      <Icon name={icon} size={23} className="transition-transform duration-300 ease-[var(--ease-spring)] group-hover:-translate-y-0.5" />
      {count > 0 && (
        <span
          key={bumpKey}
          className={cn(
            'absolute top-1 right-0.5 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-madder px-1 text-[10px] font-semibold text-petal tabular-nums',
            bumpKey ? 'anim-bump' : '',
          )}
        >
          {count}
        </span>
      )}
    </Tag>
  )
}

/**
 * Two-tier header, like a fashion house: search left, the wordmark centred, bag right, and the
 * menu centred underneath on a madder hairline. Once the page scrolls the top tier tightens
 * and the wordmark shrinks, so the header gives the photographs room.
 */
export function Header() {
  const cart = useCart()
  const wishlist = useWishlist()
  const { openSearch } = useSearch()
  const isActive = useIsActive()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinel = useRef(null)

  // A 1px sentinel above the header tells us when the page has scrolled, without a scroll listener.
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting))
    if (sentinel.current) io.observe(sentinel.current)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="h-px" />
      <header
        className={cn(
          'sticky top-0 z-40 transition-[background-color,box-shadow] duration-300',
          scrolled ? 'bg-petal/92 shadow-[0_14px_30px_-26px_rgb(110_15_34/0.6)] backdrop-blur-xl' : 'bg-blush',
        )}
      >
        <div className={cn('shell grid grid-cols-[1fr_auto_1fr] items-center transition-[height] duration-300 ease-[var(--ease-out)]', scrolled ? 'h-16' : 'h-16 lg:h-[92px]')}>
          <div className="flex items-center gap-1">
            <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu" className="press -ml-2 grid size-11 place-items-center text-ink lg:hidden">
              <Icon name="menu" size={25} />
            </button>
            <button type="button" onClick={openSearch} className="group press hidden h-11 items-center gap-3 text-ink-soft transition-colors hover:text-madder lg:flex">
              <Icon name="search" size={21} />
              <span className="caps border-b border-line-strong pb-1 text-[10.5px] transition-colors group-hover:border-madder">Search sarees, anarkalis…</span>
            </button>
          </div>

          <Logo imgClassName={cn('transition-[height] duration-300 ease-[var(--ease-out)]', scrolled ? 'h-8 lg:h-9' : 'h-8 lg:h-12')} />

          <div className="flex items-center justify-end">
            <Utility icon="search" label="Search" onClick={openSearch} className="lg:hidden" />
            <Utility icon="user" label="Account" to="/account" className="hidden sm:grid" />
            <Utility icon="heart" label="Wishlist" to="/wishlist" count={wishlist.count} className="hidden sm:grid" />
            <Utility icon="bag" label="Bag" count={cart.count} bumpKey={cart.addedAt} onClick={() => cart.setOpen(true)} className="-mr-2" data-bag-target="" />
          </div>
        </div>

        {/* Desktop menu, centred on a madder hairline */}
        <div className="shell hidden lg:block">
          <div className="border-b border-madder/35 pb-1">
            <MegaNav />
          </div>
        </div>

        {/* Phones: swipeable chips */}
        <nav aria-label="Categories" className="border-b border-madder/25 lg:hidden">
          <ul className="no-scrollbar flex snap-x scroll-px-4 gap-2 overflow-x-auto px-4 pb-3 sm:px-6">
            {quickChips.map((c) => {
              const active = isActive(c.to)
              return (
                <li key={c.label} className="shrink-0 snap-start">
                  <Link
                    to={c.to}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'press caps flex h-9 items-center border px-4 text-[10.5px] transition-colors duration-200',
                      active ? 'border-madder bg-madder text-petal' : c.accent ? 'border-madder/40 text-madder' : 'border-line-strong text-ink',
                    )}
                  >
                    {c.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}

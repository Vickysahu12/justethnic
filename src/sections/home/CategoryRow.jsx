import { Link } from 'react-router'
import { categories } from '../../data/content'
import { products } from '../../data/products'
import { useReveal } from '../../hooks/useReveal'
import { formatPrice } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { SectionHeading } from '../../components/ui/SectionHeading'

const counts = Object.fromEntries(categories.map((c) => [c.id, products.filter((p) => p.category === c.id).length]))

/**
 * The wardrobe, by category: five tall photographs with the name in crimson italic beneath.
 * On hover the photo eases in, a block-print border is stamped under the name and the count
 * slides up.
 */
export function CategoryRow() {
  const ref = useReveal()
  return (
    <section ref={ref} className="pt-20 lg:pt-28" aria-labelledby="cat-title">
      <SectionHeading id="cat-title" title="The" italic="wardrobe" sub="Six yards of Banarasi to a cotton set for Monday. Everything between ₹999 and ₹4,999." className="shell" />
      <ul className="no-scrollbar mt-10 flex snap-x scroll-px-4 gap-3 overflow-x-auto px-4 sm:px-6 lg:mx-auto lg:grid lg:max-w-[1400px] lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-10">
        {categories.map((c, i) => (
          <li key={c.id} className="w-[62vw] shrink-0 snap-start sm:w-[38vw] lg:w-auto" data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
            <Link to={c.to} className="group block text-center">
              <span className="relative block overflow-hidden">
                <Img id={c.image} alt="" sizes="(min-width: 1024px) 19vw, 62vw" className="aspect-[3/4]" position="50% 25%" imgClassName="transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.06]" />
                <span className="absolute inset-0 bg-madder-deep/0 transition-colors duration-500 group-hover:bg-madder-deep/10" />
              </span>
              <span className="serif-italic mt-4 block text-[24px] leading-tight text-madder">{c.label}</span>
              <span className="mx-auto mt-2 block h-[26px] w-24 overflow-hidden">
                <span className="print-border block w-full origin-center scale-x-0 transition-transform duration-500 ease-[var(--ease-out)] [--print-opacity:0.7] group-hover:scale-x-100" />
              </span>
              <span className="caps -mt-1 block text-[9.5px] text-ink-soft">
                {counts[c.id]} pieces · from {formatPrice(c.from)}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

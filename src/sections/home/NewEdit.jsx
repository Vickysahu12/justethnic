import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { collectionTabs } from '../../data/content'
import { queryProducts } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { ProductCard } from '../../features/product/ProductCard'
import { Button } from '../../components/ui/Button'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { cn } from '../../lib/cn'

/**
 * The edit: a four-up grid in the house's catalogue manner, with italic tabs on a hairline.
 * The madder underline slides between tabs; the grid re-lays itself with a short stagger.
 */
export function NewEdit() {
  const reduce = useReducedMotion()
  const [tab, setTab] = useState(collectionTabs[0].id)
  const current = collectionTabs.find((t) => t.id === tab)
  const items = useMemo(() => queryProducts({ ...current.query, limit: 8 }), [current])
  const ref = useReveal()

  return (
    <section ref={ref} className="shell pt-20 lg:pt-32" aria-labelledby="edit-title">
      <SectionHeading id="edit-title" title="The festive" italic="edit" />
      <div role="tablist" aria-label="Collections" className="no-scrollbar mx-auto mt-8 flex max-w-max gap-1 overflow-x-auto border-b border-line sm:gap-4">
        {collectionTabs.map((t) => {
          const on = t.id === tab
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setTab(t.id)}
              className={cn('serif-italic relative shrink-0 px-3 pb-3 text-[19px] transition-colors duration-300 sm:px-4 sm:text-[21px]', on ? 'text-madder' : 'text-ink-soft hover:text-ink')}
            >
              {t.label}
              {on && <motion.span layoutId="edit-line" className="absolute inset-x-3 -bottom-px h-px bg-madder sm:inset-x-4" transition={reduce ? { duration: 0 } : { type: 'spring', duration: 0.45, bounce: 0.15 }} />}
            </button>
          )
        })}
      </div>

      <ul key={tab} className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 sm:gap-x-5 lg:grid-cols-4 lg:gap-y-14">
        {items.map((p, i) => (
          <li key={p.id} className="anim-fade-up" style={{ '--delay': `${i * 50}ms` }}>
            <ProductCard product={p} sizes="(min-width: 1024px) 23vw, 46vw" />
          </li>
        ))}
      </ul>

      <div className="mt-12 flex justify-center">
        <Button to={current.query.category ? `/shop/${current.query.category}` : '/shop?sort=new'} variant="outline" size="lg" arrow>
          View all {current.label.toLowerCase()}
        </Button>
      </div>
    </section>
  )
}

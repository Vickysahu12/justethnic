import { Link } from 'react-router'
import { occasions } from '../../data/content'
import { products } from '../../data/products'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { SectionHeading } from '../../components/ui/SectionHeading'
import { cn } from '../../lib/cn'

const counts = Object.fromEntries(occasions.map((o) => [o.id, products.filter((p) => p.occasions.includes(o.id)).length]))

const SPAN = {
  tall: 'lg:col-span-5 lg:row-span-2 aspect-[4/5] lg:aspect-auto',
  wide: 'lg:col-span-7 aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto',
}

/**
 * Dress for the occasion: a mosaic of photographs with the occasion set in thin capitals
 * over each, like the bridal-magazine reference. Hover opens the letter-spacing, eases the
 * photo in and lifts a line about what to wear plus the number of pieces.
 */
export function OccasionMosaic() {
  const ref = useReveal()
  const [tall, wide, ...small] = occasions
  return (
    <section ref={ref} className="shell pt-20 lg:pt-32" aria-labelledby="occ-title">
      <SectionHeading id="occ-title" title="Dress for the" italic="occasion" sub="Haldi in the morning, sangeet at night. Start with where you are going." />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:h-[880px] lg:grid-cols-12 lg:grid-rows-2 lg:gap-4">
        <Tile o={tall} className={cn(SPAN.tall, 'sm:row-span-2')} sizes="(min-width: 1024px) 40vw, 100vw" big />
        <Tile o={wide} className={SPAN.wide} sizes="(min-width: 1024px) 56vw, 100vw" big />
        <div className="grid grid-cols-3 gap-3 sm:col-span-2 lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:gap-4">
          {small.map((o) => (
            <Tile key={o.id} o={o} className="aspect-[3/4] lg:aspect-auto" sizes="(min-width: 1024px) 18vw, 33vw" />
          ))}
        </div>
      </div>
    </section>
  )
}

function Tile({ o, className, sizes, big }) {
  return (
    <Link to={o.to} className={cn('group relative block overflow-hidden', className)} data-reveal-frame>
      <Img id={o.image} alt="" sizes={sizes} className="absolute! inset-0" position={o.focus} imgClassName="transition-transform duration-[1600ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
      <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(42_20_24/0.62)_100%)] transition-opacity duration-500 group-hover:opacity-90" />
      <span className="absolute inset-x-0 bottom-0 p-4 text-petal sm:p-6 lg:p-8">
        <span className={cn('display block leading-[0.9] transition-[letter-spacing] duration-700 ease-[var(--ease-out)] group-hover:tracking-[0.09em]', big ? 'text-[44px] sm:text-[60px] lg:text-[76px]' : 'text-[20px] sm:text-[30px] lg:text-[38px]')}>{o.label}</span>
        <span className={cn('grid transition-[grid-template-rows,opacity] duration-500 ease-[var(--ease-out)] [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr] max-lg:[grid-template-rows:1fr]', !big && 'max-sm:hidden')}>
          <span className="overflow-hidden">
            <span className="serif-italic mt-2 flex items-center gap-2 text-[16px] text-petal/90 sm:text-[18px]">
              {o.note}, {counts[o.id]} pieces <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </span>
        </span>
      </span>
    </Link>
  )
}

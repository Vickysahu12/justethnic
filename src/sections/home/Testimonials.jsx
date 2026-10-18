import { useRef } from 'react'
import { Link } from 'react-router'
import { testimonials } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { SectionHeading } from '../../components/ui/SectionHeading'

/**
 * Worn to: notes from customers (sample content for the demo), each led by the occasion she
 * wore it to and the piece itself. A row that scrolls sideways, with arrows on desktop.
 */
export function Testimonials() {
  const ref = useReveal()
  const rail = useRef(null)
  const scroll = (dir) => {
    const el = rail.current
    const card = el?.querySelector('li')
    if (card) el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="pt-20 lg:pt-32" aria-labelledby="notes-title">
      <div className="shell flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading id="notes-title" title="Worn" italic="to" sub="Notes from women who wore us to the moments that mattered." align="left" className="max-sm:items-center max-sm:text-center" />
        <div className="flex gap-2">
          {[
            [-1, 'caret-left', 'Previous notes'],
            [1, 'caret-right', 'Next notes'],
          ].map(([d, icon, label]) => (
            <button key={d} type="button" onClick={() => scroll(d)} aria-label={label} className="press grid size-12 place-items-center border border-line-strong text-ink transition-colors hover:border-madder hover:bg-madder hover:text-petal">
              <Icon name={icon} size={17} />
            </button>
          ))}
        </div>
      </div>
      <ul ref={rail} className="no-scrollbar mx-auto mt-10 flex max-w-[1400px] snap-x snap-mandatory scroll-px-4 gap-5 overflow-x-auto px-4 pb-2 sm:scroll-px-6 sm:px-6 lg:scroll-px-10 lg:px-10">
        {testimonials.map((t, i) => {
          const p = getProductSync(t.productId)
          return (
            <li key={t.name} className="w-[84vw] shrink-0 snap-start sm:w-[420px]" data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
              <figure className="flex h-full flex-col border border-line bg-petal p-6 sm:p-7">
                <p className="serif-italic text-[17px] text-madder">{t.occasion}</p>
                <span className="mt-3 flex text-madder" aria-label={`${t.rating} out of 5`}>
                  {Array.from({ length: 5 }, (_, k) => (
                    <Icon key={k} name="star" size={14} weight={k < t.rating ? 'fill' : 'light'} />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed text-ink">“{t.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                  <Link to={`/product/${p.slug}`} className="group shrink-0 overflow-hidden" aria-label={p.name}>
                    <Img id={p.images[0]} alt="" sizes="56px" className="h-[70px] w-14" position="50% 25%" imgClassName="transition-transform duration-700 group-hover:scale-110" />
                  </Link>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-medium text-ink">
                      {t.name}, <span className="font-normal text-ink-soft">{t.city}</span>
                    </span>
                    <Link to={`/product/${p.slug}`} className="link-line mt-0.5 block truncate text-[13px] text-madder">
                      {p.name}
                    </Link>
                  </span>
                </figcaption>
              </figure>
            </li>
          )
        })}
      </ul>
      <p className="shell mt-4 text-[12px] text-ink-soft">Sample customer notes for this demo store.</p>
    </section>
  )
}

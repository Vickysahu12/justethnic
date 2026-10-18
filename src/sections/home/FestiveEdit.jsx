import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { festiveEdit } from '../../data/content'
import { products } from '../../data/products'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'

const target = new Date(festiveEdit.date).getTime()
const count = products.filter((p) => p.occasions.includes('festive')).length

function useCountdown() {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  const left = Math.max(0, target - now)
  return [
    ['Days', Math.floor(left / 864e5)],
    ['Hours', Math.floor(left / 36e5) % 24],
    ['Minutes', Math.floor(left / 6e4) % 60],
    ['Seconds', Math.floor(left / 1e3) % 60],
  ]
}

/**
 * The Diwali edit, laid out like the reference's "Couple dresses" spread: the photograph on
 * the left (a red velvet suit under string lights), and on the right huge thin capitals with
 * a live countdown to Lakshmi Puja. Each figure ticks over with a short roll.
 */
export function FestiveEdit() {
  const ref = useReveal()
  const parts = useCountdown()
  return (
    <section ref={ref} className="shell pt-20 lg:pt-32" aria-labelledby="diwali-title">
      <Link to={festiveEdit.to} className="group grid overflow-hidden bg-madder-deep text-petal lg:grid-cols-[1.05fr_1fr]">
        <div className="relative overflow-hidden" data-reveal-frame>
          <Img id={festiveEdit.image} alt="A deep red velvet suit with an ombre dupatta under string lights" sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/5] lg:h-full lg:aspect-auto" position="50% 30%" imgClassName="transition-transform duration-[1800ms] ease-[var(--ease-out)] group-hover:scale-[1.04]" />
        </div>
        <div className="relative flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <span aria-hidden="true" className="buta-mask pointer-events-none absolute -top-6 -right-8 size-56 rotate-12 bg-petal/[0.06]" />
          <p className="deva text-[24px] text-rose-soft" lang="hi">
            शुभ दीपावली
          </p>
          <h2 id="diwali-title" className="display mt-4 text-[48px] leading-[0.92] sm:text-[72px] lg:text-[84px]">
            The Diwali
            <span className="serif-italic block normal-case text-rose-soft">edit</span>
          </h2>
          <p className="mt-6 max-w-[42ch] text-[15.5px] leading-relaxed text-petal/80">{festiveEdit.body}</p>

          <div className="mt-9" aria-label="Time until Lakshmi Puja">
            <p className="caps text-[9.5px] text-petal/60">Lakshmi Puja in</p>
            <ol className="mt-3 flex gap-5 sm:gap-8">
              {parts.map(([label, value]) => (
                <li key={label} className="text-center">
                  <span className="relative block h-[52px] overflow-hidden sm:h-[60px]">
                    <span key={value} className="anim-roll display block text-[46px] leading-none tabular-nums sm:text-[54px]">
                      {String(value).padStart(2, '0')}
                    </span>
                  </span>
                  <span className="caps mt-1 block text-[9px] text-petal/60">{label}</span>
                </li>
              ))}
            </ol>
          </div>

          <span className="caps mt-10 inline-flex w-max items-center gap-3 border-b border-petal/60 pb-1.5 text-[11px] transition-[gap,border-color] duration-300 group-hover:gap-5 group-hover:border-petal">
            View {count} festive pieces <Icon name="arrow" size={16} />
          </span>
        </div>
      </Link>
    </section>
  )
}

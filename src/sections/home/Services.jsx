import { Link } from 'react-router'
import { services, offers } from '../../data/content'
import { useReveal } from '../../hooks/useReveal'
import { Icon } from '../../components/ui/Icon'
import { CopyCode } from '../../components/ui/CopyCode'

/**
 * The close: the house services in four cells (ref: custom orders / worldwide delivery /
 * fashion guide / gift vouchers) and the codes.
 */
export function Services() {
  const ref = useReveal()
  return (
    <section ref={ref} className="pt-20 lg:pt-32" aria-labelledby="services-title">
      <h2 id="services-title" className="sr-only">
        Our services
      </h2>
      <ul className="shell grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {services.map((s, i) => (
          <li key={s.title} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
            <Link to="/help" className="group relative flex h-full flex-col items-center overflow-hidden bg-blush-deep px-4 py-8 text-center transition-colors duration-500 hover:text-petal sm:px-6 sm:py-10">
              <span aria-hidden="true" className="absolute inset-0 origin-bottom scale-y-0 bg-madder transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-y-100" />
              <Icon name={s.icon} size={30} className="relative text-madder transition-colors duration-500 group-hover:text-petal" />
              <span className="display relative mt-4 text-[16px] leading-tight sm:text-[19px]">{s.title}</span>
              <span className="relative mt-2 text-[13px] leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-petal/80">{s.body}</span>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="shell mt-16 grid gap-3 sm:grid-cols-3">
        {offers.map((o) => (
          <li key={o.code} className="flex items-center justify-between gap-3 border border-dashed border-madder/40 bg-petal px-5 py-4">
            <p className="serif-italic text-[17px] text-madder">{o.title}</p>
            <CopyCode code={o.code} />
          </li>
        ))}
      </ul>
    </section>
  )
}

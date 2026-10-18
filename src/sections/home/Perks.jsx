import { perks } from '../../data/content'
import { Icon } from '../../components/ui/Icon'

// The promises, set like a selvedge under the hero: four hairline-divided cells.
export function Perks() {
  return (
    <section aria-label="Our promises" className="border-b border-line bg-petal">
      <ul className="shell grid grid-cols-2 lg:grid-cols-4">
        {perks.map((p, i) => (
          <li key={p.title} className={i > 0 ? 'border-line max-lg:odd:border-l-0 lg:border-l' : ''}>
            <div className="group flex items-center gap-3.5 px-2 py-5 sm:px-6 lg:justify-center lg:py-6">
              <Icon name={p.icon} size={28} className="shrink-0 text-madder transition-transform duration-500 ease-[var(--ease-spring)] group-hover:-rotate-6 group-hover:scale-110" />
              <span>
                <span className="caps block text-[10px] text-ink">{p.title}</span>
                <span className="mt-0.5 block text-[13px] text-ink-soft">{p.body}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

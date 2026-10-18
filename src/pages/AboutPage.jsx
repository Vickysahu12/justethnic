import { Link } from 'react-router'
import { categories, chhapai } from '../data/content'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useReveal } from '../hooks/useReveal'
import { Img } from '../components/ui/Img'
import { Icon } from '../components/ui/Icon'
import { Button } from '../components/ui/Button'

const CHAPTERS = [
  { title: 'From the looms', italic: 'of Varanasi', body: 'Our Banarasis are woven on pit looms by families who have worked with zari for generations. A saree takes about fifteen days, and the gold is woven in, never printed.', image: 'j30-2' },
  { title: 'From the tables', italic: 'of Bagru', body: 'Our cotton sets are printed by hand with carved sheesham blocks and dyes cooked from madder, indigo and pomegranate. Every metre carries a slightly different hand.', image: 'j14-2' },
  { title: 'Finished', italic: 'in Jaipur', body: 'Gota, resham and mirror work are added by karigars in our Jaipur workshop, then every piece is pressed, checked and folded in muslin before it ships.', image: 'j01-2' },
]

export function AboutPage() {
  useDocumentTitle('Our Story')
  const ref = useReveal()

  return (
    <div ref={ref}>
      <section className="relative overflow-hidden bg-madder-deep text-petal">
        <div className="shell grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_1fr] lg:py-24">
          <div>
            <p className="deva text-[24px] text-rose-soft" lang="hi">
              अपनी संस्कृति पहनिए
            </p>
            <h1 className="display mt-4 text-[48px] leading-[0.95] sm:text-[76px]">
              Wear your
              <span className="serif-italic block normal-case text-rose-soft">culture</span>
            </h1>
            <p className="mt-7 max-w-[48ch] text-[16.5px] leading-relaxed text-petal/80">
              JustEthnic began with a simple wish: that the clothes we wear to our biggest days could be made the old way, by the hands that have always made them, and still cost what a family can spend on a festival.
            </p>
            <Button to="/shop" variant="light" size="lg" className="mt-9" arrow>
              Shop the collection
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Img id="j22-1" alt="A champagne gota anarkali" sizes="(min-width: 1024px) 22vw, 50vw" className="aspect-[3/4]" position="50% 25%" />
            <Img id="j35-1" alt="A peach organza saree" sizes="(min-width: 1024px) 22vw, 50vw" className="mt-16 aspect-[3/4]" position="50% 25%" />
          </div>
        </div>
        <div className="print-border [--print-ink:var(--color-petal)] [--print-opacity:0.3]" aria-hidden="true" />
      </section>

      <section id="craft" className="shell scroll-mt-40 pt-20 lg:pt-28">
        <h2 className="display text-center text-[34px] text-ink sm:text-[52px]">
          Made by <span className="serif-italic normal-case text-madder">hand</span>
        </h2>
        <ul className="mt-14 space-y-16 lg:space-y-24">
          {CHAPTERS.map((c, i) => (
            <li key={c.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
              <div className={i % 2 ? 'lg:order-2' : ''} data-reveal-frame>
                <Img id={c.image} alt="" sizes="(min-width: 1024px) 45vw, 100vw" className="aspect-[4/3]" position="50% 40%" />
              </div>
              <div data-reveal>
                <h3 className="display text-[30px] leading-[1.05] text-ink sm:text-[42px]">
                  {c.title} <span className="serif-italic normal-case text-madder">{c.italic}</span>
                </h3>
                <p className="mt-5 max-w-[50ch] text-[16px] leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pt-20 lg:pt-28">
        <ol className="grid gap-x-8 gap-y-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {chhapai.steps.map((s, i) => (
            <li key={s.title}>
              <p className="flex items-baseline gap-3">
                <span className="serif-italic text-[26px] text-madder">{i + 1}</span>
                <span className="caps text-[10.5px] text-ink">{s.title}</span>
              </p>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="shell pt-20 lg:pt-28">
        <h2 className="serif-italic text-[30px] text-madder sm:text-[38px]">Where to begin</h2>
        <ul className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <li key={c.id}>
              <Link to={c.to} className="press group inline-flex h-12 items-center gap-3 border border-line-strong bg-petal pr-2 pl-5 text-[14px] text-ink transition-colors hover:border-madder hover:bg-madder hover:text-petal">
                {c.label}
                <span className="grid size-8 place-items-center transition-transform duration-300 group-hover:translate-x-1">
                  <Icon name="arrow" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

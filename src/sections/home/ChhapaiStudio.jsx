import { useRef, useState } from 'react'
import { chhapai } from '../../data/content'
import { products } from '../../data/products'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const BLOCKS = [
  { id: 'buta', label: 'Buta', src: '/brand/buta.svg', w: 62, h: 82 },
  { id: 'phool', label: 'Phool', src: '/brand/phool.svg', w: 72, h: 72 },
]
const MAX = 90
const blockCount = products.filter((p) => p.category === 'block-prints').length

/**
 * The printing table. Left: how a Bagru print is made, in four steps, with close-ups of the
 * cloth. Right: a length of cloth she can print on herself. Choose a block and a dye, then tap
 * the cloth: the wooden block lifts away and leaves its impression, pressed slightly crooked
 * the way a hand print is. Enter or Space prints at a random spot; "Wash the cloth" clears it.
 */
export function ChhapaiStudio() {
  const ref = useReveal()
  const cloth = useRef(null)
  const [dye, setDye] = useState(chhapai.dyes[0].id)
  const [block, setBlock] = useState(BLOCKS[0].id)
  const [prints, setPrints] = useState([])
  const seq = useRef(0)

  const stampAt = (x, y) => {
    const id = ++seq.current
    const rot = Math.round((Math.random() - 0.5) * 14)
    setPrints((p) => [...p.slice(-(MAX - 1)), { id, x, y, rot, dye, block }])
  }

  const onPointer = (e) => {
    const r = cloth.current.getBoundingClientRect()
    stampAt(((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100)
  }

  const dyeColor = (id) => chhapai.dyes.find((d) => d.id === id).color

  return (
    <section ref={ref} className="mt-20 bg-petal lg:mt-32" aria-labelledby="chhapai-title">
      <div className="print-border [--print-opacity:0.55]" aria-hidden="true" />
      <div className="shell grid gap-12 py-16 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-24">
        <div className="flex flex-col">
          <p className="deva text-[22px] text-madder" lang="hi">छपाई</p>
          <h2 id="chhapai-title" className="display mt-3 text-[34px] leading-[1.02] text-ink sm:text-[48px]">
            Printed by hand, <span className="serif-italic normal-case text-madder">in Bagru</span>
          </h2>
          <p className="mt-5 max-w-[46ch] text-[15.5px] leading-relaxed text-ink-soft">
            Our block prints come from a village of printers an hour outside Jaipur, where families have stamped cloth the same way for three hundred years. No two metres come out exactly alike.
          </p>
          <ol className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {chhapai.steps.map((s, i) => (
              <li key={s.title} className="border-t border-line pt-4" data-reveal style={{ '--reveal-delay': `${i * 90}ms` }}>
                <p className="flex items-baseline gap-3">
                  <span className="serif-italic text-[22px] text-madder">{i + 1}</span>
                  <span className="caps text-[10.5px] text-ink">{s.title}</span>
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-10 grid grid-cols-3 gap-3">
            {chhapai.images.map((id, i) => (
              <li key={id} className="group overflow-hidden" data-reveal-frame style={{ '--reveal-delay': `${i * 100}ms` }}>
                <Img id={id} alt="" sizes="160px" className="aspect-square" position="50% 40%" imgClassName="transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-110" />
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button to="/shop/block-prints" size="lg" arrow>
              Shop {blockCount} block prints
            </Button>
          </div>
        </div>

        {/* The cloth */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="serif-italic text-[22px] text-ink">Try the block.</p>
            <p className="text-[13px] text-ink-soft">Tap the cloth to print. {prints.length > 0 && <span className="tabular-nums">{prints.length} impressions.</span>}</p>
          </div>
          <div
            ref={cloth}
            role="button"
            tabIndex={0}
            aria-label="Printing cloth. Press Enter to print a block."
            onPointerDown={onPointer}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                stampAt(8 + Math.random() * 84, 8 + Math.random() * 84)
              }
            }}
            className="cloth relative mt-4 aspect-[4/3] cursor-crosshair touch-manipulation overflow-hidden border border-line bg-[#faf1ee] select-none"
          >
            {/* The half-drop ground the printer laid down first */}
            <span aria-hidden="true" className="cloth-ground absolute inset-0" />
            {prints.map((p) => {
              const b = BLOCKS.find((x) => x.id === p.block)
              return (
                <span key={p.id} aria-hidden="true" className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%`, width: b.w, height: b.h, transform: `translate(-50%, -50%) rotate(${p.rot}deg)` }}>
                  <span className="anim-lift absolute -inset-2 rounded-[3px] bg-[linear-gradient(135deg,#8a5a3a,#5c3a24)] shadow-float" />
                  <span
                    className="anim-press absolute inset-0"
                    style={{ backgroundColor: dyeColor(p.dye), WebkitMask: `url(${b.src}) center / contain no-repeat`, mask: `url(${b.src}) center / contain no-repeat` }}
                  />
                </span>
              )
            })}
            {prints.length === 0 && (
              <span className="pointer-events-none absolute inset-0 grid place-items-center">
                <span className="flex flex-col items-center gap-3 text-madder/80">
                  <Icon name="stamp" size={40} className="anim-nudge" />
                  <span className="caps text-[10px]">Tap anywhere</span>
                </span>
              </span>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-5">
            <div className="flex flex-wrap items-center gap-6">
              <fieldset className="flex items-center gap-3">
                <legend className="caps mb-2 text-[9.5px] text-ink-soft">Block</legend>
                {BLOCKS.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setBlock(b.id)}
                    aria-pressed={block === b.id}
                    className={cn('press grid size-12 place-items-center border transition-colors duration-200', block === b.id ? 'border-madder bg-blush' : 'border-line hover:border-line-strong')}
                    title={b.label}
                  >
                    <span className="size-7 bg-ink" style={{ WebkitMask: `url(${b.src}) center / contain no-repeat`, mask: `url(${b.src}) center / contain no-repeat` }} />
                    <span className="sr-only">{b.label}</span>
                  </button>
                ))}
              </fieldset>
              <fieldset className="flex items-center gap-2.5">
                <legend className="caps mb-2 text-[9.5px] text-ink-soft">Dye</legend>
                {chhapai.dyes.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDye(d.id)}
                    aria-pressed={dye === d.id}
                    aria-label={`${d.label} dye`}
                    title={d.label}
                    className={cn('press size-8 rounded-full ring-offset-2 ring-offset-petal transition-[box-shadow,transform] duration-200 hover:scale-110', dye === d.id ? 'ring-1 ring-ink' : 'ring-0')}
                    style={{ backgroundColor: d.color }}
                  />
                ))}
              </fieldset>
            </div>
            <button type="button" onClick={() => setPrints([])} disabled={!prints.length} className="press caps flex items-center gap-2 text-[10.5px] text-ink-soft transition-colors hover:text-madder disabled:opacity-40">
              <Icon name="eraser" size={18} /> Wash the cloth
            </button>
          </div>
        </div>
      </div>
      <div className="print-border [--print-opacity:0.55]" aria-hidden="true" />
    </section>
  )
}

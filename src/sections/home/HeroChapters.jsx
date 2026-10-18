import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { heroChapters } from '../../data/content'
import { Img } from '../../components/ui/Img'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const DURATION = 7000
const ease = [0.23, 1, 0.32, 1]

/**
 * The opening spread. Three looks are laid across the page like prints on the block table, the
 * middle one wide, with the brand promise set huge across them. Four occasion chapters
 * (Diwali, Haldi, Mehendi, Shaadi) take turns: each new set of photos is pressed on one
 * block at a time, left to right, the ink settling from blurred and over-saturated to sharp,
 * and the italic line under "Wear your culture" changes with it. The chapter strip at the foot
 * runs a hairline timer; hovering the spread holds it, and swiping works on touch.
 */
export function HeroChapters() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const startX = useRef(null)
  const chapter = heroChapters[index]
  const count = heroChapters.length
  const go = (i) => setIndex((i + count) % count)

  return (
    <section
      className="group/hero relative overflow-hidden bg-ink"
      aria-roledescription="carousel"
      aria-label="Occasion chapters"
      onPointerDown={(e) => (startX.current = e.clientX)}
      onPointerUp={(e) => {
        if (startX.current == null) return
        const dx = e.clientX - startX.current
        startX.current = null
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1))
      }}
    >
      <div className="relative h-[clamp(580px,calc(100svh-148px),760px)] lg:h-[clamp(600px,calc(100svh-178px),900px)]">
        {/* The three prints */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-[26fr_48fr_26fr]">
          {chapter.images.map((id, k) => (
            <div key={k} className={cn('relative overflow-hidden', k !== 1 && 'hidden md:block')}>
              <AnimatePresence initial={false}>
                <motion.div
                  key={`${chapter.id}-${id}`}
                  className="absolute inset-0"
                  initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)', filter: 'saturate(1.6) blur(6px)' }}
                  animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)', filter: 'saturate(1) blur(0px)' }}
                  transition={{ duration: 1.05, ease, delay: reduce ? 0 : [0.12, 0, 0.24][k], filter: { duration: 1.4, ease, delay: [0.3, 0.18, 0.42][k] } }}
                >
                  <Img
                    id={id}
                    alt=""
                    sizes={k === 1 ? '(min-width: 768px) 48vw, 100vw' : '26vw'}
                    priority={index === 0}
                    className="h-full w-full"
                    position={k === 1 ? '50% 22%' : '50% 30%'}
                    imgClassName="scale-[1.03] transition-transform duration-[9000ms] ease-out group-hover/hero:scale-100"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Hairline seams between the prints and a scrim for the type */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-[26%] hidden w-px bg-petal/35 md:block" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-[26%] hidden w-px bg-petal/35 md:block" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(42_20_24/0.18)_0%,rgb(42_20_24/0)_30%,rgb(42_20_24/0.1)_55%,rgb(42_20_24/0.72)_100%)]" />

        {/* The promise */}
        <div className="absolute inset-x-0 bottom-[178px] px-4 text-center text-petal md:bottom-[140px] lg:bottom-[150px]">
          <h1 id="hero-title" className="display text-[clamp(52px,10.5vw,168px)] leading-[0.86] tracking-[0.02em] [text-shadow:0_2px_40px_rgb(42_20_24/0.35)]">
            Wear your
            <span className="serif-italic block normal-case tracking-[-0.01em] text-[1.08em] leading-[0.95]">culture</span>
          </h1>
          <div className="relative mx-auto mt-4 h-8 max-w-[640px] overflow-hidden" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={chapter.id}
                className="serif-italic absolute inset-0 text-[19px] text-petal/90 sm:text-[22px]"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
                transition={{ duration: 0.7, ease, delay: 0.35 }}
              >
                {chapter.line}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Chapter strip */}
        <div className="absolute inset-x-0 bottom-0">
          <div className="shell flex flex-col items-center gap-4 pb-6 sm:pb-7 md:flex-row md:items-end md:justify-between">
            <ol className="flex w-full max-w-[640px] gap-3 sm:gap-5 md:w-auto">
              {heroChapters.map((c, i) => {
                const on = i === index
                return (
                  <li key={c.id} className="flex-1 md:w-[132px] md:flex-none">
                    <button type="button" onClick={() => go(i)} aria-current={on} aria-label={`${c.label} chapter`} className="group/ch block w-full pt-1 text-left">
                      <span className="block h-px overflow-hidden bg-petal/35">
                        {on && (
                          <span
                            key={`${c.id}-${index}`}
                            className="block h-full origin-left bg-petal group-hover/hero:[animation-play-state:paused]"
                            style={reduce ? undefined : { animation: `progress ${DURATION}ms linear forwards` }}
                            onAnimationEnd={() => go(index + 1)}
                          />
                        )}
                      </span>
                      <span className={cn('deva mt-2.5 block text-[15px] transition-colors duration-300', on ? 'text-petal' : 'text-petal/55 group-hover/ch:text-petal/85')}>{c.deva}</span>
                      <span className={cn('caps mt-0.5 block text-[9.5px] transition-colors duration-300', on ? 'text-petal' : 'text-petal/55 group-hover/ch:text-petal/85')}>{c.label}</span>
                    </button>
                  </li>
                )
              })}
            </ol>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={chapter.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.15 } }} transition={{ duration: 0.4, delay: 0.3 }}>
                <Button to={chapter.cta.to} variant="light" size="lg" arrow>
                  {chapter.cta.label}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

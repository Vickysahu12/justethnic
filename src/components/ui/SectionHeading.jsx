import { Link } from 'react-router'
import { Icon } from './Icon'
import { cn } from '../../lib/cn'

/**
 * Section title: thin capitals with an optional crimson italic phrase after them
 * ("The new" + "edit"), a short line under it and an optional link. Centred by default.
 */
export function SectionHeading({ title, italic, sub, link, id, className, align = 'center', light }) {
  const center = align === 'center'
  return (
    <div className={cn('flex flex-col gap-4', center ? 'items-center text-center' : 'items-start', className)}>
      <h2 id={id} className={cn('display text-[32px] leading-[1.02] sm:text-[48px] lg:text-[56px]', light ? 'text-petal' : 'text-ink')}>
        {title}
        {italic && (
          <>
            {' '}
            <span className={cn('serif-italic normal-case', light ? 'text-rose-soft' : 'text-madder')}>{italic}</span>
          </>
        )}
      </h2>
      {sub && <p className={cn('max-w-[52ch] text-[15.5px] leading-relaxed', light ? 'text-petal/80' : 'text-ink-soft')}>{sub}</p>}
      {link && (
        <Link to={link.to} className={cn('group mt-1 inline-flex items-center gap-2', light ? 'text-petal' : 'text-madder')}>
          <span className="caps link-under text-[10.5px]">{link.label}</span>
          <Icon name="arrow" size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  )
}

/** Page title for inner pages. */
export function PageTitle({ title, sub, className, children }) {
  return (
    <div className={cn('pb-6', className)}>
      <h1 className="serif-italic text-[38px] leading-tight text-madder sm:text-[52px]">{title}</h1>
      {sub && <p className="mt-2 text-[15px] text-ink-soft">{sub}</p>}
      {children}
    </div>
  )
}

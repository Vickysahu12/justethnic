import { Link } from 'react-router'
import { Icon } from './Icon'
import { cn } from '../../lib/cn'

// Each variant sets its resting colours and the colour that sweeps in from the left on hover.
const variants = {
  primary: '',
  rose: '[--btn-bg:var(--color-rose)] [--btn-fg:var(--color-petal)] [--btn-fill:var(--color-rose-deep)] [--btn-fill-fg:var(--color-petal)]',
  indigo: '[--btn-bg:var(--color-indigo)] [--btn-fg:var(--color-petal)] [--btn-fill:var(--color-ink)] [--btn-fill-fg:var(--color-petal)]',
  light: '[--btn-bg:var(--color-petal)] [--btn-fg:var(--color-madder)] [--btn-fill:var(--color-madder)] [--btn-fill-fg:var(--color-petal)]',
  outline: '[--btn-bg:transparent] [--btn-fg:var(--color-madder)] [--btn-ring:var(--color-madder)] [--btn-fill:var(--color-madder)] [--btn-fill-fg:var(--color-petal)]',
  'outline-light': '[--btn-bg:transparent] [--btn-fg:var(--color-petal)] [--btn-ring:rgb(252_246_244/0.8)] [--btn-fill:var(--color-petal)] [--btn-fill-fg:var(--color-madder)]',
  ghost: '[--btn-bg:var(--color-petal)] [--btn-fg:var(--color-madder)] [--btn-ring:var(--color-line-strong)] [--btn-fill:var(--color-blush-deep)] [--btn-fill-fg:var(--color-madder)]',
}

const sizes = {
  sm: 'h-10 px-5 text-[10.5px]',
  md: 'h-12 px-7 text-[11px]',
  lg: 'h-14 px-10 text-[11.5px]',
}

/**
 * Button. On hover a second colour soaks up from the bottom edge and the arrow (when `arrow`)
 * nudges right. Renders a router <Link> for `to`, an <a> for `href`, else a <button>.
 */
export function Button({ to, href, variant = 'primary', size = 'md', arrow, className, children, ...props }) {
  const classes = cn('btn', variants[variant], sizes[size], className)
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" size={15} weight="regular" className="btn-arrow" />}
    </>
  )
  if (to) return <Link to={to} className={classes} {...props}>{content}</Link>
  if (href) return <a href={href} className={classes} {...props}>{content}</a>
  return <button type="button" className={classes} {...props}>{content}</button>
}

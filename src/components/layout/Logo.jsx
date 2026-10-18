import { Link } from 'react-router'
import { site } from '../../config/site'
import { cn } from '../../lib/cn'

// The client's wordmark (public/brand), lifted off its rose tile so it can sit on any ground.
// `light` uses the petal version for dark grounds; `tile` shows the original rose tile.
export function Logo({ className, imgClassName, light, tile }) {
  const src = tile ? '/brand/logo-tile.png' : light ? '/brand/wordmark-light.png' : '/brand/wordmark.png'
  return (
    <Link to="/" aria-label={`${site.name} home`} className={cn('press group inline-flex items-center', className)}>
      <img
        src={src}
        alt={site.name}
        width={tile ? 639 : 580}
        height={tile ? 263 : 137}
        className={cn('h-9 w-auto transition-[opacity,transform] duration-500 ease-[var(--ease-out)] group-hover:opacity-85 lg:h-11', imgClassName)}
        draggable={false}
      />
    </Link>
  )
}

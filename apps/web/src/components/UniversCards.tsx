'use client'

import Link from 'next/link'
import Icon from './Icon'

interface UniversLink {
  label: string
  href: string
}

interface UniversItem {
  cls: string
  tag: string
  icon: string
  href: string
  a: string
  b: string
  c: string
  body: string
  links: UniversLink[]
}

export default function UniversCards({ items }: { items: UniversItem[] }) {
  return (
    <ul className="univers">
      {items.map((u, i) => (
        <li key={i} className={'uni ' + u.cls}>
          {/* overlay link couvrant toute la carte */}
          <Link href={u.href} className="uni-overlay" aria-label={'Explorer ' + u.tag} tabIndex={0} />
          <span className="ico"><Icon name={u.icon} /></span>
          <span className="tag">{u.tag}</span>
          <h3>{u.a}<u>{u.b}</u>{u.c}</h3>
          <p>{u.body}</p>
          <div className="links">
            {u.links.map((l, j) => (
              <Link key={j} href={l.href} className="uni-sublink">
                {l.label}
              </Link>
            ))}
          </div>
          <span className="arrow">Explorer<Icon name="arrow-right" /></span>
        </li>
      ))}
    </ul>
  )
}

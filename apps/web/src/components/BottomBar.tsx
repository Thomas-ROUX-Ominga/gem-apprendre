'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from './Icon'

export default function BottomBar() {
  const pathname = usePathname()
  if (pathname.startsWith('/rdv')) return null

  return (
    <div className="bottombar">
      <div className="bb-txt">
        <b>Entretien offert</b>
        <span>sans engagement</span>
      </div>
      <Link href="/rdv" className="btn btn-primary">
        Prendre RDV<Icon name="arrow-right" />
      </Link>
    </div>
  )
}

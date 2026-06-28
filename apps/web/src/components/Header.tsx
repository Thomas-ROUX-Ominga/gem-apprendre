'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Icon from './Icon'

const NAV_LINKS = [
  { label: "Le diagnostic", href: '/#diagnostic' },
  { label: "Je suis OÙ ?", href: '/fiche/orientation', strong: 'OÙ ?' },
  { label: "Je suis dans le FLOU", href: '/fiche/bilan', strong: 'FLOU' },
  { label: "Je me FORME", href: '/fiche/entreprise', strong: 'FORME' },
  { label: 'Qui suis-je ?', href: '/qui-suis-je' },
]

const FOCUSABLE_SELECTORS = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'

function NavLabel({ label, strong }: { label: string; strong?: string }) {
  if (!strong) return <>{label}</>
  const parts = label.split(strong)
  return <>{parts[0]}<u>{strong}</u>{parts[1]}</>
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const burgerRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Focus management: move into drawer on open, return to burger on close
  const prevOpen = useRef(false)
  useEffect(() => {
    if (open && !prevOpen.current) {
      requestAnimationFrame(() => {
        drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTORS)?.focus()
      })
    } else if (!open && prevOpen.current) {
      burgerRef.current?.focus()
    }
    prevOpen.current = open
  }, [open])

  // Keyboard: Escape closes drawer; Tab traps focus inside drawer
  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const items = Array.from(
          drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
        )
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <header className="hdr">
        <div className="shell hdr-row">
          <Link href="/" className="brand">
            <Image src="/gem-apprendre-mark.png" alt="" width={38} height={38} />
            <span className="gem-name">Gem<em>&apos;</em>Apprendre</span>
          </Link>

          <nav className="nav" aria-label="Navigation principale">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                <NavLabel label={l.label} strong={l.strong} />
              </Link>
            ))}
          </nav>

          <Link href="/rdv" className="btn btn-primary hdr-cta">
            Prendre RDV<Icon name="arrow-right" />
          </Link>

          <button
            ref={burgerRef}
            className="burger"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-controls="nav-drawer"
            onClick={() => setOpen(true)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>

      {open && (
        <div
          ref={drawerRef}
          id="nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          className="drawer"
        >
          <div className="drawer-panel">
            <div className="drawer-top">
              <span className="gem-name">Gem<em>&apos;</em>Apprendre</span>
              <button className="burger" aria-label="Fermer le menu" onClick={close}>
                <Icon name="x" />
              </button>
            </div>
            <nav className="drawer-nav" aria-label="Navigation">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} onClick={close}>
                  <span><NavLabel label={l.label} strong={l.strong} /></span>
                  <Icon name="chevron-right" />
                </Link>
              ))}
            </nav>
            <Link href="/rdv" className="btn btn-primary" onClick={close}>
              Prendre RDV<Icon name="arrow-right" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

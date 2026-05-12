import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'À Propos',   href: '#about'    },
  { label: 'Programmes', href: '#programs' },
  { label: 'Coaches',    href: '#coaches'  },
  { label: 'Galerie',    href: '#gallery'  },
  { label: 'Tarifs',     href: '#pricing'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="logo-wrap">
          <img
            src="/logo.png"
            alt="O'Zone Fitness GYM"
            className="logo-img"
          />
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta">Nous Rejoindre</a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-cta-wrap">
          <a href="#contact" className="mobile-cta" onClick={closeMenu}>
            💪 Nous Rejoindre
          </a>
        </div>
        <div className="mobile-contact">
          <p>Appelez-nous maintenant</p>
          <a href="tel:+2250799578976">+225 07 99 57 89 76</a>
        </div>
      </div>
    </>
  )
}
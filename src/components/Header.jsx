import { useState } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ejemplos', href: '#ejemplos' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <nav className="navbar">
        <a className="logo" href="#inicio" onClick={closeMenu}>
          Wahandri
        </a>
        <button
          className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
          aria-label="Abrir menú"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Cómo trabajo', href: '/proceso' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contacto', href: '/contacto' },
]

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  const nextThemeLabel = theme === 'dark' ? 'claro' : 'oscuro'

  return (
    <header className="header">
      <nav className="navbar" aria-label="Principal">
        <Link href="/" className="logo-text" onClick={closeMenu}>
          Wahandri<span className="highlight">.dev</span>
        </Link>
        <div className="navbar-content">
          <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  className={pathname === href ? 'active' : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Cambiar a modo ${nextThemeLabel}`}
            title={`Cambiar a modo ${nextThemeLabel}`}
          >
            <span aria-hidden="true" className="theme-toggle__icon">
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
          </button>
          <button
            className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
            aria-expanded={menuOpen}
            aria-label={`${menuOpen ? 'Cerrar' : 'Abrir'} menú`}
            onClick={toggleMenu}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

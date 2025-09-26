import { useState } from 'react'
import './Header.css'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Ejemplos', href: '#ejemplos' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  const nextThemeLabel = theme === 'dark' ? 'claro' : 'oscuro'

  return (
    <header className="header">
      <nav className="navbar" aria-label="Principal">
        <a className="logo" href="#inicio" onClick={closeMenu}>
          Wahandri
        </a>
        <div className="navbar-content">
          <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>
                  {label}
                </a>
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
              {theme === 'dark' ? '🌙' : '☀️'}
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

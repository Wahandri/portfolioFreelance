import Link from 'next/link'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Wahandri</h3>
          <p>Desarrollo web freelance para negocios que quieren crecer.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Navegación</h4>
            <nav>
              <Link href="/">Inicio</Link>
              <Link href="/servicios">Servicios</Link>
              <Link href="/proceso">Cómo trabajo</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contacto">Contacto</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <nav>
              <a href="#">Aviso Legal</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Política de Cookies</a>
            </nav>
          </div>

          <div className="footer-column">
            <h4>Social</h4>
            <nav>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Wahandri. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

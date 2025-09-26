import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Wahandri - Desarrollo Web Freelance</p>
        <nav className="footer-nav">
          <a href="#inicio">Inicio</a>
          <span>|</span>
          <a href="#servicios">Servicios</a>
          <span>|</span>
          <a href="#ejemplos">Ejemplos</a>
          <span>|</span>
          <a href="#precios">Precios</a>
          <span>|</span>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

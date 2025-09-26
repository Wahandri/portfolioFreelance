import './Hero.css'
import heroImg from '../../images/hero.jpg'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <span className="hero-tag">Desarrollo web freelance</span>
        <h1>
          ¿Necesitas una <span className="highlight">página web moderna</span> para tu negocio?
        </h1>
        <p>
          Soy Wahandri, desarrollador web freelance. Creo landing pages rápidas, creativas y
          profesionales para impulsar tus ventas.
        </p>
        <div className="hero-actions">
          <a href="#contacto" className="btn-primary">
            Pide tu web ahora
          </a>
          <a href="#ejemplos" className="btn-outline">
            Ver ejemplos
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-illustration">
          <img
            src={heroImg}
            alt="Ilustración de proyecto web"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

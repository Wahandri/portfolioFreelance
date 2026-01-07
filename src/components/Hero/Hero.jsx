import './Hero.css'
import heroImg from '../../images/hero.jpg'
import Button from '../ui/Button'

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <span className="hero-tag">Desarrollo Web Freelance</span>
        <h1>
          Ayudo a pequeños negocios a <span className="highlight">vender más</span> con webs rápidas y modernas.
        </h1>
        <p>
          Diseño y desarrollo web enfocado en resultados. Convierte visitantes en clientes
          sin complicaciones técnicas ni mantenimientos costosos.
        </p>
        <div className="hero-actions">
          <a href="#servicios" tabIndex="-1">
            <Button variant="primary" size="large">Ver Servicios</Button>
          </a>
          <a href="#contacto" tabIndex="-1">
            <Button variant="secondary" size="large">Hablemos</Button>
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-illustration">
          <img
            src={heroImg.src}
            alt="Estrategia digital y desarrollo web"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

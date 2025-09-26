import { projects } from '../data'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className="section portfolio" id="ejemplos">
      <h2 className="section-title">Ejemplos de proyectos que enamoran a tus clientes</h2>
      <p className="portfolio-subtitle">
        Cada landing page está pensada para convertir visitas en oportunidades reales. Aquí tienes
        algunas ideas listas para personalizar.
      </p>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <article key={project.id} className="portfolio-card">
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a className="btn-outline" href={project.demoUrl}>
                Ver demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio

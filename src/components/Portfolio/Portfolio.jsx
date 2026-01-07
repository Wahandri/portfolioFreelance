import { projects } from '../../data/portfolio'
import './Portfolio.css'
import Section from '../ui/Section'
import Button from '../ui/Button'

function Portfolio() {
  return (
    <Section className="portfolio" id="ejemplos" background="default">
      <div className="section-header">
        <h2 className="section-title">Proyectos que convierten</h2>
        <p className="section-subtitle">
          Ejemplos reales de cómo una buena web puede transformar un negocio.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <article key={project.id} className="portfolio-card">
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="portfolio-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.demoUrl} tabIndex="-1">
                <Button variant="outline" size="small">Ver demo</Button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Portfolio

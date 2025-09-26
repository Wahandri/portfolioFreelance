import './PortfolioSection.css';
import { projects } from '../data';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section fade-in" id="portfolio">
      <div className="section-header">
        <h2>Portfolio</h2>
        <p>Muestras de proyectos donde el estilo oscuro y creativo toma protagonismo.</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <article key={project.id} className="portfolio-card">
            <div className="portfolio-card__image" aria-hidden="true">
              <div className="portfolio-card__placeholder" />
            </div>
            <div className="portfolio-card__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

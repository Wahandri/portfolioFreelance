import './PortfolioSection.css';
import { benefits } from '../../data';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section fade-in" id="beneficios">
      <div className="section-header">
        <h2>Beneficios de tu nueva web</h2>
        <p>
          Cada landing page está pensada para atraer, convencer y convertir a tus
          visitantes en clientes reales.
        </p>
      </div>
      <div className="portfolio-grid">
        {benefits.map((benefit) => (
          <article key={benefit.id} className="portfolio-card">
            <div className="portfolio-card__image" aria-hidden="true">
              <div className="portfolio-card__placeholder" />
            </div>
            <div className="portfolio-card__content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;

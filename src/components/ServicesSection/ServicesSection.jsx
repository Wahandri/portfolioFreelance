import './ServicesSection.css';
import { plans } from '../../data';

const ServicesSection = () => {
  return (
    <section className="services-section fade-in" id="planes">
      <div className="section-header">
        <h2>Planes a la medida de tu lanzamiento</h2>
        <p>Elige la propuesta que mejor se adapte al momento actual de tu negocio.</p>
        <p className="services-section__price-note">
          Todos los planes incluyen copywriting, diseño responsive y optimización SEO técnica.
        </p>
      </div>
      <div className="services-grid">
        {plans.map((plan) => (
          <article key={plan.id} className="service-card">
            <div className="service-card__icon" aria-hidden="true">
              <span />
            </div>
            <div className="service-card__content">
              <h3>{plan.title}</h3>
              <p>{plan.description}</p>
              <p className="service-card__price">{plan.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

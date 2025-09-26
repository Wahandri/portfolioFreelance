import './ServicesSection.css';
import { services } from '../data';

const ServicesSection = () => {
  return (
    <section className="services-section fade-in" id="servicios">
      <div className="section-header">
        <h2>Servicios</h2>
        <p>Soluciones enfocadas en darle vida digital a tu marca.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.id} className="service-card">
            <div className="service-card__icon" aria-hidden="true">
              <span />
            </div>
            <div className="service-card__content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

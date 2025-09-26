import './ContactSection.css';
import { socialLinks } from '../../data';

const ContactSection = () => {
  return (
    <section className="contact-section fade-in" id="contacto">
      <div className="section-header">
        <h2>Contacto</h2>
        <p>
          Reserva una llamada gratuita y recibe una propuesta personalizada en menos de 24 horas.
        </p>
      </div>
      <div className="contact-section__content">
        <form className="contact-form">
          <label className="contact-form__field">
            <span>Nombre</span>
            <input type="text" name="nombre" placeholder="Tu nombre" />
          </label>
          <label className="contact-form__field">
            <span>Email</span>
            <input type="email" name="email" placeholder="tu@email.com" />
          </label>
          <label className="contact-form__field">
            <span>Mensaje</span>
            <textarea name="mensaje" placeholder="Cuéntame sobre tu proyecto" rows="4" />
          </label>
          <button type="submit" className="button-glow contact-form__submit">
            Agendar llamada
          </button>
        </form>
        <div className="contact-section__sidebar">
          <h3>Atención directa</h3>
          <ul className="contact-section__links">
            {socialLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url} target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-link__icon" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

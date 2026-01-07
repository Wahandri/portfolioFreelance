import './Contact.css'
import Section from '../ui/Section'
import Button from '../ui/Button'

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
    // Here you would handle the form submission
    alert('¡Gracias! Te contactaré pronto.')
  }

  return (
    <Section className="contact" id="contacto" background="default">
      <div className="contact-wrapper">
        <div className="contact-info">
          <span className="contact-tag">Hablemos</span>
          <h2 className="section-title">¿Listo para lanzar tu web?</h2>
          <p>
            Cuéntame sobre tu proyecto y recibirás una propuesta personalizada en menos de 24 horas.
            Sin compromiso.
          </p>

          <div className="contact-methods">
            <a href="https://wa.me/123456789" target="_blank" rel="noreferrer" className="contact-method whatsapp">
              <span className="method-icon">💬</span>
              <div>
                <span className="method-label">WhatsApp</span>
                <span className="method-value">+34 600 000 000</span>
              </div>
            </a>

            <a href="mailto:hola@wahandri.dev" className="contact-method email">
              <span className="method-icon">✉️</span>
              <div>
                <span className="method-label">Email</span>
                <span className="method-value">hola@wahandri.dev</span>
              </div>
            </a>
          </div>

          <div className="contact-socials">
            <p className="socials-label">Sígueme en:</p>
            <div className="socials-list">
              <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" type="text" placeholder="Tu nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="tu@email.com" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="type">Tipo de Proyecto</label>
              <select id="type" name="type">
                <option value="landing">Landing Page</option>
                <option value="corporate">Web Corporativa</option>
                <option value="ecommerce">E-commerce</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Presupuesto</label>
              <select id="budget" name="budget">
                <option value="low">300€ - 600€</option>
                <option value="medium">600€ - 1200€</option>
                <option value="high">+1200€</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="4" placeholder="Cuéntame qué necesitas..." required />
          </div>

          <Button type="submit" variant="primary" size="large" className="full-width">
            Enviar consulta
          </Button>
        </form>
      </div>
    </Section>
  )
}

export default Contact

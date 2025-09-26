import './Contact.css'

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="section contact" id="contacto">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2 className="section-title">¿Listo para lanzar tu web?</h2>
          <p>
            Cuéntame sobre tu proyecto y recibirás una propuesta personalizada en menos de 24 horas.
          </p>
          <div className="contact-direct">
            <span>O escríbeme directamente a:</span>
            <a href="mailto:hola@wahandri.dev">hola@wahandri.dev</a>
          </div>
          <div className="contact-socials">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" placeholder="Tu nombre" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="tu@email.com" required />

          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="5" placeholder="Cuéntame qué necesitas" required />

          <button type="submit" className="btn-primary">
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

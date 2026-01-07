import './Testimonials.css'
import Section from '../ui/Section'

const testimonials = [
  {
    name: 'María López',
    role: 'Fundadora de Brisa Café',
    quote:
      'Wahandri captó la esencia de mi negocio y en menos de una semana tenía una landing hermosa y lista para vender más.',
    avatar: 'https://via.placeholder.com/80.png?text=M',
  },
  {
    name: 'Carlos Gómez',
    role: 'CEO de NextFin',
    quote:
      'El proceso fue súper sencillo. La web quedó rápida, clara y con todas las secciones que necesitábamos para cerrar clientes.',
    avatar: 'https://via.placeholder.com/80.png?text=C',
  },
  {
    name: 'Lucía Fernández',
    role: 'Eventos Impulso',
    quote:
      'Me encantó la atención al detalle y la disponibilidad para hacer ajustes. ¡Repetiré sin dudarlo!',
    avatar: 'https://via.placeholder.com/80.png?text=L',
  },
]

function Testimonials() {
  return (
    <Section className="testimonials" id="testimonios" background="soft">
      <div className="section-header">
        <h2 className="section-title">Clientes felices</h2>
        <p className="section-subtitle">Lo que dicen quienes ya han confiado en mí.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card">
            <div className="testimonial-content">
              <p>“{testimonial.quote}”</p>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonial.name.charAt(0)}
              </div>
              <div className="author-info">
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials

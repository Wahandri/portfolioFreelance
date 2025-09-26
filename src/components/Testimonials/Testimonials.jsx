import './Testimonials.css'

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
    <section className="section testimonials" id="testimonios">
      <h2 className="section-title">Clientes felices que recomiendan mi trabajo</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonial.avatar} alt={testimonial.name} />
              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>
            <p>“{testimonial.quote}”</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

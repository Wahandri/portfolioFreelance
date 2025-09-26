import './Services.css'

const services = [
  {
    title: 'Landing Pages Express',
    description: 'Webs de una sola página, rápidas y optimizadas para captar clientes desde el primer día.',
    icon: '🚀',
  },
  {
    title: 'Diseño Creativo',
    description: 'Estética moderna, atractiva y alineada con la identidad de tu negocio para destacar frente a la competencia.',
    icon: '🎨',
  },
  {
    title: 'Mantenimiento Web',
    description: 'Actualizaciones, cambios y mejoras continuas para que tu web siga generando resultados.',
    icon: '🛠️',
  },
]

function Services() {
  return (
    <section className="section services" id="servicios">
      <h2 className="section-title">Servicios que impulsan tu presencia online</h2>
      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon" aria-hidden>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services

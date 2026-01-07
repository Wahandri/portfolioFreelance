import './Services.css'
import Section from '../ui/Section'
import Button from '../ui/Button'

const services = [
  {
    title: 'Landing Page Express',
    description: 'Ideal para validar ideas, promocionar eventos o campañas específicas.',
    price: 'Desde 300€',
    features: [
      'Diseño en 1 semana',
      'Optimizado para móvil',
      'Botón WhatsApp flotante',
      'Integración con Analytics'
    ],
    icon: '🚀',
    recommended: false
  },
  {
    title: 'Web Corporativa',
    description: 'Tu negocio abierto 24/7. Transmite confianza y profesionalidad.',
    price: 'Desde 650€',
    features: [
      'Hasta 5 páginas',
      'Blog / Noticias',
      'SEO Básico incluido',
      'Formulario de contacto',
      'Panel autogestionable'
    ],
    icon: '🏢',
    recommended: true
  },
  {
    title: 'E-commerce Starter',
    description: 'Empieza a vender online con una tienda segura y fácil de gestionar.',
    price: 'Desde 950€',
    features: [
      'Catálogo de productos',
      'Pasarela de pagos (Stripe/PayPal)',
      'Panel de gestión de pedidos',
      'Formación de uso'
    ],
    icon: '🛍️',
    recommended: false
  },
]

function Services() {
  return (
    <Section className="services" id="servicios" background="soft">
      <div className="section-header">
        <h2 className="section-title">Soluciones a medida para tu negocio</h2>
        <p className="section-subtitle">Paquetes claros, sin sorpresas ni costes ocultos.</p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article
            key={service.title}
            className={`service-card ${service.recommended ? 'recommended' : ''}`}
          >
            {service.recommended && <span className="badge">Más Popular</span>}
            <div className="service-header">
              <div className="service-icon" aria-hidden>{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>

            <div className="service-price">
              {service.price}
            </div>

            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>
                  <svg className="check-icon" viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="service-action">
              <a href="#contacto" tabIndex="-1">
                <Button
                  variant={service.recommended ? 'primary' : 'outline'}
                  className="full-width"
                >
                  Lo quiero
                </Button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export default Services

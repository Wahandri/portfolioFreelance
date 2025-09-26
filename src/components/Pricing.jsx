import './Pricing.css'

const plans = [
  {
    name: 'Básico',
    price: '250 €',
    description: [
      'Landing page express (1 página).',
      'Listo en 7 días.',
    ],
    featured: false,
  },
  {
    name: 'Estándar',
    price: '400 €',
    description: [
      'Landing con extras (formulario, redes sociales).',
      'Incluye hosting 1 año.',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: '600 €',
    description: [
      'Web completa de hasta 3 páginas.',
      'Con mantenimiento 1 mes gratis.',
    ],
    featured: false,
  },
]

function Pricing() {
  return (
    <section className="section pricing" id="precios">
      <h2 className="section-title">Planes transparentes pensados para tu negocio</h2>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
            <div className="pricing-header">
              <h3>{plan.name}</h3>
              <p className="pricing-price">{plan.price}</p>
            </div>
            <ul>
              {plan.description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className={plan.featured ? 'btn-primary' : 'btn-outline'} href="#contacto">
              Contratar
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing

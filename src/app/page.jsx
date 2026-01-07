import Hero from '../components/Hero/Hero'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Hero />

            {/* Services Teaser */}
            <Section id="servicios-teaser" background="soft">
                <div className="section-header">
                    <h2 className="section-title">Lo que puedo hacer por ti</h2>
                    <p className="section-subtitle">Soluciones digitales para hacer crecer tu negocio.</p>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link href="/servicios" tabIndex="-1">
                        <Button variant="primary" size="large">Ver Servicios y Precios</Button>
                    </Link>
                </div>
            </Section>

            {/* Portfolio Teaser */}
            <Section id="portfolio-teaser">
                <div className="section-header">
                    <h2 className="section-title">Últimos Proyectos</h2>
                    <p className="section-subtitle">Resultados reales para clientes reales.</p>
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link href="/portfolio" tabIndex="-1">
                        <Button variant="outline" size="large">Ver Portfolio Completo</Button>
                    </Link>
                </div>
            </Section>

            <Testimonials />
            <Contact />
        </>
    )
}

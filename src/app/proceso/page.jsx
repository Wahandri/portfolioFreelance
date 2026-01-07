import Process from '../../components/Process/Process'
import Section from '../../components/ui/Section'
import Button from '../../components/ui/Button'

export const metadata = {
    title: 'Cómo Trabajo | Wahandri Freelance',
    description: 'Mi proceso de diseño y desarrollo web paso a paso.',
}

export default function ProcessPage() {
    return (
        <>
            <Process />
            <Section background="soft" className="text-center">
                <h2 className="section-title">¿Tienes dudas sobre el proceso?</h2>
                <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
                    Escríbeme y te explico cómo podemos adaptar esto a tu proyecto.
                </p>
                <a href="/contacto" tabIndex="-1">
                    <Button variant="primary" size="large">Resolver dudas</Button>
                </a>
            </Section>
        </>
    )
}

import React from 'react'
import './Process.css'
import Section from '../ui/Section'

const steps = [
    {
        number: '01',
        title: 'Descubrimiento',
        description: 'Hablamos sobre tu negocio, tus objetivos y lo que necesitas. Definimos la estructura y el contenido clave.',
    },
    {
        number: '02',
        title: 'Diseño y Desarrollo',
        description: 'Creo una propuesta visual y la transformo en código limpio y rápido. Te mantengo informado del progreso.',
    },
    {
        number: '03',
        title: 'Lanzamiento',
        description: 'Revisamos todo, hacemos las pruebas finales y publicamos tu web. Te enseño a usarla si es necesario.',
    },
]

function Process() {
    return (
        <Section className="process" id="proceso">
            <div className="section-header">
                <h2 className="section-title">¿Cómo trabajamos juntos?</h2>
                <p className="section-subtitle">Un proceso simple y transparente, sin tecnicismos innecesarios.</p>
            </div>

            <div className="process-grid">
                {steps.map((step, index) => (
                    <div key={step.number} className="process-step">
                        <div className="step-number">{step.number}</div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-description">{step.description}</p>
                        {index < steps.length - 1 && <div className="step-connector" aria-hidden="true"></div>}
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Process

import './AboutSection.css';
import { processSteps } from '../../data';

const AboutSection = () => {
  return (
    <section className="about-section fade-in" id="proceso">
      <div className="about-section__content">
        <h2>Así trabajaremos tu landing</h2>
        <p>
          Un proceso claro y colaborativo para que te olvides de lo técnico y te concentres en
          cerrar ventas.
        </p>
      </div>
      <ul className="about-section__skills" aria-label="Pasos del proceso">
        {processSteps.map((step) => (
          <li key={step} className="skill-tag">
            {step}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutSection;

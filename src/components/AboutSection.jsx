import './AboutSection.css';
import { skills } from '../data';

const AboutSection = () => {
  return (
    <section className="about-section fade-in" id="sobre-mi">
      <div className="about-section__content">
        <h2>Sobre mí</h2>
        <p>
          Soy Wahandri, un desarrollador web junior que transforma ideas en páginas modernas.
          Me inspiran las atmósferas futuristas, el anime y la estética cyberpunk.
        </p>
      </div>
      <ul className="about-section__skills" aria-label="Habilidades principales">
        {skills.map((skill) => (
          <li key={skill} className="skill-tag">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutSection;

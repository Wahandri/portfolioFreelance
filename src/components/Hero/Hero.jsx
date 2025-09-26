import './Hero.css';
import { heroContent } from '../../data';

const Hero = () => {
  return (
    <section className="hero fade-in" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title" className="hero__title">
          {heroContent.title}
        </h1>
        <p className="hero__subtitle">{heroContent.subtitle}</p>
        <p className="hero__price">{heroContent.priceHighlight}</p>
        <a className="hero__cta button-glow" href="#contacto">
          {heroContent.cta}
        </a>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__placeholder" />
      </div>
    </section>
  );
};

export default Hero;

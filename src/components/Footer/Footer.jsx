import './Footer.css';
import { navLinks } from '../../data';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Wahandri - Landing pages que venden</p>
      <nav className="footer__nav" aria-label="Enlaces rápidos">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="footer__link">
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;

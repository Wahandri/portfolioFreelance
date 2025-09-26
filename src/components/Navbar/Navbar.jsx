import './Navbar.css';
import { navLinks } from '../../data';

const Navbar = () => {
  return (
    <header className="navbar" id="inicio">
      <div className="navbar__logo">Wahandri</div>
      <nav className="navbar__menu">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="navbar__link">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;

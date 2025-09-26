import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header.js'
import Hero from './components/Hero/Hero.js'
import Services from './components/Services/Services.js'
import Portfolio from './components/Portfolio/Portfolio.js'
import Pricing from './components/Pricing/Pricing.js'
import Testimonials from './components/Testimonials/Testimonials.js'
import Contact from './components/Contact/Contact.js'
import Footer from './components/Footer/Footer.js'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const body = document.body
    body.classList.toggle('light-theme', theme === 'light')
    body.classList.toggle('dark-theme', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

  return (
    <div className="App">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

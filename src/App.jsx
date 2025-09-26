import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header.js'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

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

'use client'

import { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function ClientLayout({ children }) {
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
            <main>{children}</main>
            <Footer />
        </div>
    )
}

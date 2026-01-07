import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '../components/Layout/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Wahandri | Desarrollador Web Freelance',
    description: 'Ayudo a pequeños negocios y emprendedores a conseguir más clientes con webs modernas, rápidas y efectivas.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    )
}

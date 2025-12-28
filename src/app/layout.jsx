import './globals.css'

export const metadata = {
    title: 'Wahandri Freelance',
    description: 'Portfolio of Wahandri',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

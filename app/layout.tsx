import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const title = "Wahandri | Desarrollador Web Freelance";
const description = "Portfolio creativo de Wahandri, desarrollador web freelance especializado en landing pages modernas.";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen bg-base text-light`}>
        {children}
      </body>
    </html>
  );
}

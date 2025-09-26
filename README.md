# Portfolio Freelance - Wahandri

Base profesional para el portfolio de Wahandri, desarrollador web freelance junior especializado en landing pages creativas. Construido con **Next.js 13 (App Router)** y **Tailwind CSS**.

## Características
- Diseño oscuro con acentos en verde neón inspirado en estética Matrix/cyberpunk.
- Componentes modulares ubicados en `components/` para facilitar personalización.
- Contenido dinámico centralizado en `data/siteData.ts` (navegación, proyectos, servicios, redes, etc.).
- Animaciones suaves con Tailwind (hover, glow, fade-in).
- Secciones completas: Hero, Portfolio, Servicios, Sobre mí, Contacto y Footer.
- Layout responsive optimizado para móvil, tablet y escritorio.

## Requisitos previos
- Node.js 18 o superior.
- npm 9 o superior.

## Instalación
```bash
npm install
```
> Si aparece un error de red al instalar dependencias en entornos restringidos, vuelve a ejecutar el comando en tu entorno local con acceso al registro de npm.

## Scripts disponibles
- `npm run dev` – Inicia el servidor de desarrollo en `http://localhost:3000`.
- `npm run build` – Genera la build de producción.
- `npm start` – Ejecuta la build de producción.
- `npm run lint` – Ejecuta las reglas de linting de Next.js.

## Personalización
- Actualiza el contenido en `data/siteData.ts` para modificar proyectos, servicios y enlaces.
- Sustituye las imágenes de `public/images/` por capturas reales de tus proyectos.
- Ajusta colores, tipografías o animaciones en `tailwind.config.ts` y `app/globals.css`.

## Estructura de carpetas
```
app/              # Páginas usando el App Router de Next.js
components/       # Componentes UI reutilizables
data/             # Configuración y contenido dinámico
public/images/    # Recursos estáticos (placeholders para proyectos)
```

---
Hecho con creatividad para destacar la propuesta de Wahandri.

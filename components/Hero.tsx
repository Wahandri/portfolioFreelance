import Link from "next/link";
import { heroContent } from "@/data/siteData";

const Hero = () => (
  <section
    id="inicio"
    className="section-fade relative flex min-h-screen items-center overflow-hidden pt-32"
  >
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(0,255,149,0.18),_transparent_55%)]" />
    <div className="absolute inset-y-0 right-0 -z-10 w-1/2 bg-[linear-gradient(135deg,rgba(0,255,149,0.15),rgba(15,15,15,0.9))] blur-3xl" />

    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center">
      <div className="flex-1 space-y-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-base/70 px-5 py-2 text-xs uppercase tracking-[0.4em] text-accent">
          creativo & moderno
        </span>
        <h1 className="font-heading text-4xl font-bold leading-tight text-light md:text-6xl">
          {heroContent.title}
        </h1>
        <p className="max-w-xl text-lg text-light/80 md:text-xl">
          {heroContent.subtitle}
        </p>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href={heroContent.cta.href}
            className="rounded-full border border-accent/50 bg-accent/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent transition-all duration-500 hover:bg-accent/40 hover:text-base hover:shadow-glow"
          >
            {heroContent.cta.label}
          </Link>
          <span className="text-sm uppercase tracking-[0.3em] text-light/60">
            landing pages para negocios visionarios
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center">
        <div className="matrix-overlay relative h-80 w-full max-w-sm overflow-hidden rounded-3xl border border-accent/40 bg-base/70">
          <div
            className="absolute inset-0 animate-matrix-rain opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, rgba(0,255,149,0.15) 0px, rgba(0,255,149,0.05) 2px, transparent 6px)",
              backgroundSize: "100% 60px"
            }}
          />
          <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
            <span className="text-xs uppercase tracking-[0.4em] text-accent/80">ilustración</span>
            <p className="font-heading text-2xl font-semibold text-light/90">
              Espacio reservado para tu universo visual
            </p>
            <p className="text-sm text-light/60">
              Añade aquí una ilustración, render 3D o foto que represente tu estilo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

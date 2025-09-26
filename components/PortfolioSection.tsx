import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import { projects } from "@/data/siteData";

const PortfolioSection = () => (
  <section id="portfolio" className="section-fade py-24">
    <div className="mx-auto max-w-6xl px-6">
      <SectionTitle
        overline="portfolio"
        title="Proyectos seleccionados"
        description="Historias reales de negocios que querían destacar y conectar con su audiencia con una estética única."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-accent/30 bg-base/80 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-heading text-xl text-light">{project.title}</h3>
              <p className="text-sm text-light/70">{project.description}</p>
              <span className="text-xs uppercase tracking-[0.3em] text-accent/80">ver proyecto</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;

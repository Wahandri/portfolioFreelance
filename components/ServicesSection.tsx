import { Sparkles, Shield, Workflow, Zap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { services } from "@/data/siteData";

const iconMap = {
  sparkles: Sparkles,
  shield: Shield,
  workflow: Workflow,
  zap: Zap
} as const;

const ServicesSection = () => (
  <section id="servicios" className="section-fade py-24">
    <div className="mx-auto max-w-6xl px-6">
      <SectionTitle
        overline="servicios"
        title="Soluciones pensadas para lanzar y escalar"
        description="Desde la idea hasta la optimización, cada servicio está diseñado para que tu presencia digital sea tan memorable como efectiva."
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <div
              key={service.title}
              className="group flex flex-col gap-4 rounded-3xl border border-accent/30 bg-base/80 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/80 hover:shadow-glow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 bg-accent/10 text-accent shadow-glow transition group-hover:bg-accent group-hover:text-base">
                {Icon && <Icon size={22} />}
              </div>
              <h3 className="font-heading text-lg text-light">{service.title}</h3>
              <p className="text-sm text-light/70">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesSection;

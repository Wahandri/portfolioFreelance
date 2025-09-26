import SectionTitle from "./SectionTitle";
import { about } from "@/data/siteData";

const AboutSection = () => (
  <section id="sobre-mi" className="section-fade py-24">
    <div className="mx-auto max-w-5xl px-6">
      <SectionTitle
        overline="sobre mí"
        title={about.title}
        description={about.description}
      />

      <div className="flex flex-wrap gap-3">
        {about.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

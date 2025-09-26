interface SectionTitleProps {
  overline?: string;
  title: string;
  description?: string;
}

const SectionTitle = ({ overline, title, description }: SectionTitleProps) => (
  <div className="mb-12 space-y-4 text-center md:text-left">
    {overline && (
      <span className="text-xs uppercase tracking-[0.4em] text-accent/70">{overline}</span>
    )}
    <h2 className="font-heading text-3xl font-semibold text-light md:text-4xl">{title}</h2>
    {description && <p className="text-base text-light/70 md:text-lg">{description}</p>}
  </div>
);

export default SectionTitle;

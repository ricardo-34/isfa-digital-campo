interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeader = ({ eyebrow, title, description, center }: Props) => (
  <div className={`max-w-3xl mb-12 lg:mb-16 ${center ? "mx-auto text-center" : ""}`}>
    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
      {eyebrow}
    </span>
    <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
      {title}
    </h2>
    {description && <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>}
  </div>
);

export default SectionHeader;

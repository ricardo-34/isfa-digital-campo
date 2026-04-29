import { ScrollText, CalendarDays, BadgeCheck, ClipboardList } from "lucide-react";
import SectionHeader from "./SectionHeader";

const items = [
  { icon: ScrollText, title: "Manual de convivencia", text: "Lineamientos que orientan la sana convivencia escolar." },
  { icon: CalendarDays, title: "Calendario académico", text: "Organización por periodos según el calendario oficial." },
  { icon: BadgeCheck, title: "Educación pública gratuita", text: "Acceso garantizado para toda la comunidad rural." },
  { icon: ClipboardList, title: "Matrícula presencial", text: "El proceso se realiza directamente en la institución." },
];

const Academico = () => {
  return (
    <section id="academico" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <SectionHeader eyebrow="Información Académica" title="Lo esencial para tu proceso" center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-elevated hover:border-primary/40 transition-smooth hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-foreground mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academico;

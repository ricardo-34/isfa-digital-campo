import { Users, UserCog, School, Handshake, GraduationCap } from "lucide-react";
import SectionHeader from "./SectionHeader";

const stats = [
  { icon: Users, value: "236", label: "Estudiantes aprox." },
  { icon: School, value: "Varias", label: "Sedes rurales" },
  { icon: GraduationCap, value: "29+", label: "Promociones" },
];

const convenios = ["SENA", "Universidad de Nariño", "Universidad Nacional de Colombia"];

const Comunidad = () => {
  return (
    <section id="comunidad" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <SectionHeader
          eyebrow="Comunidad Educativa"
          title="Una familia rural unida por la educación"
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-1 bg-gradient-leaf rounded-2xl p-8 text-primary-foreground shadow-elevated relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-foreground/10 blur-2xl" />
            <UserCog className="w-10 h-10 mb-5 relative" />
            <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2 relative">Rector</div>
            <h3 className="font-display text-2xl font-bold leading-tight relative">
              Pedro Eliecer Delgado Córdoba
            </h3>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-card border border-border rounded-2xl p-6 shadow-soft text-center hover:border-primary/40 transition-smooth">
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-4xl font-bold text-foreground mb-1">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <h4 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> Gobierno escolar
            </h4>
            <ul className="space-y-3">
              {["Padres y madres de familia", "Consejo estudiantil", "Consejo directivo", "Docentes en sedes rurales"].map((i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {i}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
            <h4 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Handshake className="w-5 h-5 text-primary" /> Convenios
            </h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {convenios.map((c) => (
                <span key={c} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  {c}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Alianzas estratégicas que ofrecen formación técnica complementaria a nuestros
              estudiantes de media, ampliando sus oportunidades académicas y laborales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comunidad;

import { Baby, BookOpen, GraduationCap, Tractor } from "lucide-react";
import SectionHeader from "./SectionHeader";

const niveles = [
  { icon: Baby, name: "Preescolar", desc: "Primeros pasos con calidez y juego." },
  { icon: BookOpen, name: "Primaria", desc: "Bases sólidas con enfoque rural." },
  { icon: GraduationCap, name: "Secundaria", desc: "Formación integral y crítica." },
  { icon: Tractor, name: "Media Técnica", desc: "Especialidad agropecuaria certificada." },
];

const enfoques = ["Agricultura", "Pecuaria", "Agroindustria", "Emprendimiento rural"];

const Oferta = () => {
  return (
    <section id="oferta" className="py-24 lg:py-32 bg-background">
      <div className="container">
        <SectionHeader
          eyebrow="Oferta Académica"
          title="Educación que crece con el campo"
          description="Cobertura desde preescolar hasta media técnica, con un sello agropecuario que prepara a nuestros estudiantes para la vida y el desarrollo rural sostenible."
          center
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {niveles.map(({ icon: Icon, name, desc }, i) => (
            <div
              key={name}
              className="group relative bg-card rounded-2xl p-7 border border-border hover:border-primary/40 shadow-soft hover:shadow-elevated transition-smooth hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 font-display text-7xl font-bold text-primary/5 leading-none p-3">
                0{i + 1}
              </div>
              <Icon className="w-10 h-10 text-primary mb-4 relative" />
              <h4 className="font-display text-xl font-bold text-foreground mb-2 relative">{name}</h4>
              <p className="text-sm text-muted-foreground relative">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-leaf rounded-3xl p-8 lg:p-12 text-primary-foreground shadow-elevated">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-balance">
                Enfoque agropecuario integral
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Nuestra formación combina teoría y práctica para que cada estudiante desarrolle
                competencias reales, aplicables en su entorno y al servicio de su comunidad.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {enfoques.map((e) => (
                <span
                  key={e}
                  className="px-4 py-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/25 text-sm font-medium"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oferta;

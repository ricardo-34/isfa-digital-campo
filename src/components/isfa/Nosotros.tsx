import { Target, Eye, Heart, BookOpenCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";
import estudiantes from "@/assets/estudiantes-campo.jpg";

const timeline = [
  { year: "1988", text: "Surge la institución por iniciativa comunitaria." },
  { year: "1991", text: "Se oficializa como Colegio Agropecuario San Francisco de Asís." },
  { year: "2003", text: "Se convierte en Institución Educativa, integrando varias sedes rurales." },
  { year: "2020", text: "Se institucionaliza formalmente." },
  { year: "Hoy", text: "Más de 29 promociones de bachilleres agropecuarios." },
];

const pilares = [
  { icon: Target, title: "Misión", text: "Formar seres humanos integrales con competencias académicas y agropecuarias, promoviendo el desarrollo rural sostenible." },
  { icon: Eye, title: "Visión", text: "Ser para el 2026 una institución líder en educación rural en el municipio de Linares." },
  { icon: Heart, title: "Filosofía", text: "Educación basada en el respeto, la sostenibilidad, la inclusión y el compromiso con la vida." },
];

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container">
        <SectionHeader
          eyebrow="Nosotros"
          title="Una historia sembrada por la comunidad"
          description="Más de tres décadas educando con identidad rural, integrando saberes académicos y prácticas agropecuarias en el corazón de Nariño."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-leaf rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-smooth" />
            <img
              src={estudiantes}
              alt="Estudiantes ISFA en el campo"
              loading="lazy"
              width={1280}
              height={896}
              className="relative rounded-2xl shadow-elevated w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-elevated p-5 hidden sm:flex items-center gap-3">
              <BookOpenCheck className="w-8 h-8 text-primary" />
              <div>
                <div className="font-display text-2xl font-bold text-primary leading-none">29+</div>
                <div className="text-xs text-muted-foreground mt-1">Promociones</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Reseña histórica</h3>
            <ol className="relative border-l-2 border-primary/20 space-y-6 pl-6">
              {timeline.map((t) => (
                <li key={t.year} className="relative">
                  <span className="absolute -left-[34px] flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold ring-4 ring-background">
                    •
                  </span>
                  <div className="font-display text-xl font-bold text-primary mb-1">{t.year}</div>
                  <p className="text-muted-foreground leading-relaxed">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pilares.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-smooth hover:-translate-y-1 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-leaf flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
                <Icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="font-display text-2xl font-bold text-foreground mb-3">{title}</h4>
              <p className="text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

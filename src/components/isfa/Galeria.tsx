import SectionHeader from "./SectionHeader";
import a from "@/assets/instalaciones.jpg";
import b from "@/assets/estudiantes-campo.jpg";
import c from "@/assets/cultivo.jpg";
import d from "@/assets/pecuaria.jpg";
import e from "@/assets/proyecto-ambiental.jpg";
import f from "@/assets/hero-campo.jpg";

const items = [
  { src: a, alt: "Instalaciones ISFA", span: "md:col-span-2 md:row-span-2" },
  { src: b, alt: "Estudiantes en el campo", span: "" },
  { src: c, alt: "Cultivos" },
  { src: d, alt: "Manejo pecuario" },
  { src: e, alt: "Proyectos ambientales" },
  { src: f, alt: "Paisaje rural", span: "md:col-span-2" },
];

const Galeria = () => {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container">
        <SectionHeader
          eyebrow="Galería"
          title="Momentos que cuentan nuestra historia"
          description="Instalaciones, actividades y proyectos agropecuarios que viven a diario en ISFA."
          center
        />

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elevated transition-smooth ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                <span className="text-primary-foreground font-medium text-sm">{it.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;

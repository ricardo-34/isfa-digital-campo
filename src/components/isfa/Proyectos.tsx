import SectionHeader from "./SectionHeader";
import cultivo from "@/assets/cultivo.jpg";
import pecuaria from "@/assets/pecuaria.jpg";
import ambiental from "@/assets/proyecto-ambiental.jpg";
import { Leaf, Beef, TreePine, Mountain } from "lucide-react";

const proyectos = [
  { img: cultivo, icon: Leaf, title: "Cultivos agrícolas", text: "Siembra, cuidado y cosecha de cultivos propios de la región andina." },
  { img: pecuaria, icon: Beef, title: "Manejo de animales", text: "Prácticas pecuarias con bovinos, aves y especies menores." },
  { img: ambiental, icon: TreePine, title: "Proyectos ambientales", text: "Reforestación, huertas escolares y educación para la sostenibilidad." },
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container">
        <SectionHeader
          eyebrow="Proyectos Agropecuarios"
          title="Aprender haciendo, en la finca escolar"
          description="Nuestros estudiantes participan activamente en proyectos productivos reales, fortaleciendo el vínculo con la tierra y la comunidad."
        />

        <div className="bg-card rounded-3xl shadow-elevated overflow-hidden mb-12 border border-border/50">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 bg-gradient-earth p-10 lg:p-12 text-accent-foreground flex flex-col justify-center">
              <Mountain className="w-12 h-12 mb-5" />
              <div className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Finca Escolar</div>
              <h3 className="font-display text-4xl lg:text-5xl font-bold mb-4">El Paramillo</h3>
              <div className="font-display text-6xl font-bold leading-none mb-2">9.5</div>
              <div className="font-medium opacity-90">hectáreas para aprender, cultivar y crecer.</div>
            </div>
            <div className="lg:col-span-3 p-10 lg:p-12">
              <h4 className="font-display text-2xl font-bold text-foreground mb-4">
                Un laboratorio vivo al aire libre
              </h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En El Paramillo, los estudiantes aplican conocimientos académicos en escenarios
                reales: cultivos, manejo animal, agroindustria y conservación del entorno. Es el
                corazón productivo y formativo de nuestra institución.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cultivos", "Pecuaria", "Agroindustria", "Sostenibilidad"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {proyectos.map(({ img, icon: Icon, title, text }) => (
            <article
              key={title}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-smooth hover:-translate-y-1 border border-border/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={img} alt={title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-card/90 backdrop-blur flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-display text-xl font-bold text-foreground mb-2">{title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;

import heroImg from "@/assets/hero-campo.jpg";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Paisaje rural de la Vereda San Francisco, Linares, Nariño"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container relative z-10 py-24 lg:py-32">
        <div className="max-w-3xl text-primary-foreground animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm text-xs font-medium uppercase tracking-widest mb-6">
            <MapPin className="w-3.5 h-3.5" /> Linares · Nariño · Colombia
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance mb-6">
            Institución Educativa <span className="text-accent">San Francisco de Asís</span>
          </h1>
          <p className="font-display italic text-xl sm:text-2xl text-primary-foreground/90 mb-10 text-balance">
            «Formamos hombres y mujeres comprometidos con la vida»
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#nosotros"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-elevated hover:shadow-glow transition-smooth hover:-translate-y-0.5"
            >
              Conocer la institución
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-smooth backdrop-blur-sm"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/60 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/80" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

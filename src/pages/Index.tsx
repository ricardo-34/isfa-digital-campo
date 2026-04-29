import Navbar from "@/components/isfa/Navbar";
import Hero from "@/components/isfa/Hero";
import Nosotros from "@/components/isfa/Nosotros";
import Oferta from "@/components/isfa/Oferta";
import Proyectos from "@/components/isfa/Proyectos";
import Comunidad from "@/components/isfa/Comunidad";
import Galeria from "@/components/isfa/Galeria";
import Academico from "@/components/isfa/Academico";
import Contacto from "@/components/isfa/Contacto";
import Footer from "@/components/isfa/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "ISFA · Institución Educativa San Francisco de Asís — Linares, Nariño";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Institución Educativa San Francisco de Asís (ISFA): educación rural con enfoque agropecuario en Linares, Nariño. Preescolar, primaria, secundaria y media técnica."
    );
    const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    linkCanonical.setAttribute("rel", "canonical");
    linkCanonical.setAttribute("href", window.location.origin + "/");
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Nosotros />
      <Oferta />
      <Proyectos />
      <Comunidad />
      <Galeria />
      <Academico />
      <Contacto />
      <Footer />
    </main>
  );
};

export default Index;

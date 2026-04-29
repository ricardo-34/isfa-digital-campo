import { Facebook, Instagram, Sprout, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-leaf">
                <Sprout className="w-5 h-5 text-primary-foreground" />
              </span>
              <span className="font-display font-bold text-xl">ISFA</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Institución Educativa San Francisco de Asís. Educación rural con enfoque
              agropecuario en el corazón de Nariño.
            </p>
            <p className="font-display italic text-accent text-sm">
              «Formamos hombres y mujeres comprometidos con la vida»
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /> Vereda San Francisco, Linares, Nariño</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /> 312 709 7459 · 317 796 9185</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/isfa.linares"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/isfalinares"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row gap-3 justify-between items-center text-xs text-background/60">
          <p>© {new Date().getFullYear()} Institución Educativa San Francisco de Asís — Linares, Nariño.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

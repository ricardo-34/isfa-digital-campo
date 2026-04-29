import { useEffect, useState } from "react";
import { Menu, X, Sprout } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#oferta", label: "Oferta" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#galeria", label: "Galería" },
  { href: "#academico", label: "Académico" },
  { href: "#contacto", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-leaf text-primary-foreground transition-smooth group-hover:scale-110`}>
            <Sprout className="w-5 h-5" />
          </span>
          <span className={`font-display font-bold text-lg leading-tight ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
            ISFA
            <span className={`block text-[10px] font-body font-medium tracking-widest uppercase ${scrolled ? "text-muted-foreground" : "text-primary-foreground/80"}`}>
              San Francisco de Asís
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-smooth hover:text-accent ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-primary" : "text-primary-foreground"}`}
          aria-label="Menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-md text-foreground hover:bg-secondary transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

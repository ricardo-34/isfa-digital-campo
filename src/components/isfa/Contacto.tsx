import { useState } from "react";
import { Phone, MapPin, Clock, Send, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje recibido",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container">
        <SectionHeader
          eyebrow="Contacto"
          title="Estamos para servirte"
          description="Comunícate con nosotros o visítanos en la Vereda San Francisco."
          center
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={Phone} title="Teléfonos">
                <a href="tel:3127097459" className="block hover:text-primary transition-smooth">312 709 7459</a>
                <a href="tel:3177969185" className="block hover:text-primary transition-smooth">317 796 9185</a>
              </InfoCard>
              <InfoCard icon={Clock} title="Horario">
                <p>Lun – Vie</p>
                <p>7:30 a.m. – 1:10 p.m.</p>
                <p>2:00 p.m. – 4:00 p.m.</p>
              </InfoCard>
            </div>
            <InfoCard icon={MapPin} title="Dirección">
              <p>Vereda San Francisco, municipio de Linares</p>
              <p>Departamento de Nariño, Colombia</p>
              <a
                href="https://maps.app.goo.gl/Xv6tKWFgkwWSqKpB9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold mt-2 hover:underline"
              >
                Ver en Google Maps →
              </a>
            </InfoCard>

            <div className="rounded-2xl overflow-hidden shadow-soft border border-border h-64">
              <iframe
                title="Ubicación ISFA"
                src="https://www.google.com/maps?q=Vereda+San+Francisco,+Linares,+Nari%C3%B1o,+Colombia&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-soft border border-border space-y-5"
          >
            <h3 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" /> Escríbenos
            </h3>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Nombre completo</label>
              <input
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Correo electrónico</label>
              <input
                required
                type="email"
                value={form.correo}
                onChange={(e) => setForm({ ...form, correo: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                placeholder="ejemplo@correo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
              <textarea
                required
                rows={5}
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold shadow-soft hover:shadow-elevated hover:bg-primary-glow transition-smooth"
            >
              Enviar mensaje <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
      <Icon className="w-5 h-5" />
    </div>
    <div className="font-display text-lg font-bold text-foreground mb-2">{title}</div>
    <div className="text-muted-foreground text-sm space-y-1">{children}</div>
  </div>
);

export default Contacto;

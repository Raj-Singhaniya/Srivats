import { Cpu, Plane, Satellite } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">About Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Pioneering aerospace technology from <span className="text-gradient">Bhopal, India</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Srivats Aerotech Private Limited is a forward-thinking aerospace company
              specializing in professional drone services and the development of radar and
              electronic navigation equipment.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2026 and led by directors Suprit Kumar Shukla and Shashikant Chaubey,
              we combine deep engineering expertise with a clear mission — to make advanced
              aerial intelligence accessible, reliable, and ready for the real world.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Plane, title: "Aerial Operations", desc: "Mission-ready drone solutions" },
              { icon: Satellite, title: "Radar Systems", desc: "Precision navigation tech" },
              { icon: Cpu, title: "Custom Electronics", desc: "Engineered for reliability" },
              { icon: Plane, title: "Made in India", desc: "Engineered locally, trusted globally" },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-gradient-card border border-border/50 rounded-xl p-6 shadow-card hover:border-primary/40 hover:shadow-glow transition-all"
              >
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display font-semibold mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

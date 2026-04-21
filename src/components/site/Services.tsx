import droneImg from "@/assets/service-drone.jpg";
import radarImg from "@/assets/service-radar.jpg";

const services = [
  {
    image: droneImg,
    title: "Professional Drone Services",
    desc: "Mission-grade aerial operations including surveying, mapping, inspection, surveillance, and aerial cinematography — executed by trained pilots with industrial-grade equipment.",
    features: ["Aerial Surveys", "Industrial Inspection", "Mapping & GIS", "Cinematography"],
  },
  {
    image: radarImg,
    title: "Radar & Navigation Equipment",
    desc: "Officially registered manufacturer of radar systems and electronic navigation instruments — engineered for accuracy, durability, and mission-critical reliability.",
    features: ["Radar Systems", "Navigation Instruments", "Custom Electronics", "R&D"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-secondary/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-4">
            Three pillars. <span className="text-gradient">One vision.</span>
          </h2>
          <p className="text-muted-foreground">
            We bring together drones, intelligence, and hardware engineering under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-gradient-card border border-border/50 rounded-2xl overflow-hidden shadow-card hover:shadow-elegant hover:border-primary/40 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-foreground/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

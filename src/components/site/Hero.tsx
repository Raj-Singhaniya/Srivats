import { Button } from "@/components/ui/button";
import { ArrowRight, Radar } from "lucide-react";
import heroImage from "@/assets/hero-drone.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional drone in flight at dusk"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-glow animate-pulse-glow" />

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
            <Radar className="h-4 w-4 text-primary animate-radar" />
            <span className="text-sm text-primary font-medium">Engineering the Future of Aerial Intelligence</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Drones. <br />
            <span className="text-gradient">Radar Innovation.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Srivats Aerotech delivers next-generation drone operations and precision radar &
            navigation systems — built in India, engineered for the world.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="#services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { v: "2+", l: "Core Verticals" },
              { v: "100%", l: "Made in India" },
              { v: "24/7", l: "Mission Ready" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

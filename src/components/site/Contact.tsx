import { Clock, MapPin, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Let's build what's <span className="text-gradient">next.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Have a project in mind? Looking for drone operations or custom radar engineering?
              We'd love to hear from you.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:contact@srivatsaerotech.com">
                <Mail className="mr-2 h-4 w-4" /> Contact Us
              </a>
            </Button>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-card border border-border/50 rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-semibold">Join Our Team</h3>
                    <Badge variant="default" className="text-xs">Hiring</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    We're looking for talented engineers and drone operators. Be part of India's growing aerotech industry.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://forms.gle/8jLKrgurXoawB3F19" target="_blank" rel="noopener noreferrer">
                      Apply Now <Briefcase className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card border border-border/50 rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Office Address</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    First Floor, DK-1, G-7, 313 Road,<br />
                    Danish Kunj, Kolar Rd,<br />
                    Bhopal, Madhya Pradesh 462042
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-card border border-border/50 rounded-xl p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Operating Hours</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Monday – Friday: 10:00 AM – 6:00 PM<br />
                    Saturday: 10:00 AM – 2:00 PM<br />
                    <span className="text-foreground/60">Closed on Sundays</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

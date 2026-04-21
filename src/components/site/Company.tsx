const details = [
  { label: "Entity Type", value: "Private Limited Company" },
  { label: "CIN", value: "U26515MP2026PTC082952" },
  { label: "Date of Incorporation", value: "March 19, 2026" },
  { label: "Status", value: "Active" },
  { label: "Registered Location", value: "Bhopal, Madhya Pradesh, India" },
  { label: "Directors", value: "Suprit Kumar Shukla, Shashikant Chaubey" },
];

export const Company = () => {
  return (
    <section id="company" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">Company Details</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Officially registered. <span className="text-gradient">Built to last.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-elegant">
          <dl className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
            {details.map((d) => (
              <div key={d.label} className="border-b border-border/40 pb-4">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{d.label}</dt>
                <dd className="font-display font-medium text-foreground">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

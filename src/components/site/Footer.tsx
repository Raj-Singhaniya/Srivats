import logo from "@/assets/logo-mark.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Srivats Aerotech logo" width={36} height={36} loading="lazy" className="h-9 w-9 object-contain" />
          <span className="font-display font-semibold text-sm">
            SRIVATS AEROTECH PVT LTD
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Srivats Aerotech Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

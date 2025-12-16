import { TreePine } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <TreePine className="text-accent" size={24} />
            <span className="font-serif text-xl font-bold text-foreground">
              Truphena Muthoni
            </span>
          </div>

          {/* SDG Colors */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground mr-2">Aligned with UN SDGs</span>
            <span className="w-3 h-3 rounded-full bg-sdg-red" />
            <span className="w-3 h-3 rounded-full bg-sdg-orange" />
            <span className="w-3 h-3 rounded-full bg-sdg-yellow" />
            <span className="w-3 h-3 rounded-full bg-sdg-green" />
            <span className="w-3 h-3 rounded-full bg-sdg-blue" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-sans">
            © {currentYear} • HSC Awardee • Kenya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

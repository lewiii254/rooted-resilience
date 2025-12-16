import heroImage from '@/assets/truphena-tree-hug.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Truphena Muthoni embracing a tree during her 72-hour marathon"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.7) contrast(1.1)' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Vignette Effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, hsl(var(--charcoal)) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 pt-24">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight text-textured opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            ROOTED IN{' '}
            <span className="text-accent italic">RESILIENCE</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="mt-6 md:mt-8 text-lg md:text-xl font-sans text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            72 Hours. One Tree. A Fight for Mental Health & Indigenous Forests.
          </p>

          {/* CTA Button */}
          <div 
            className="mt-10 md:mt-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
          >
            <a
              href="#involved"
              className="btn-wood inline-flex items-center gap-3 text-foreground animate-pulse-glow"
            >
              <span className="relative z-10">Join the Movement</span>
              <span className="relative z-10 w-2 h-2 rounded-full bg-accent animate-pulse" />
            </a>
          </div>

          {/* Stats */}
          <div 
            className="mt-16 md:mt-20 grid grid-cols-3 gap-6 max-w-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl font-bold text-accent">72</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Hours</p>
            </div>
            <div className="text-center border-x border-border/30">
              <span className="font-serif text-3xl md:text-4xl font-bold text-accent">1</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Indigenous Tree</p>
            </div>
            <div className="text-center">
              <span className="font-serif text-3xl md:text-4xl font-bold text-accent">∞</span>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Impact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

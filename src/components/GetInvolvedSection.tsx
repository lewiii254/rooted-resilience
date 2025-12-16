import { TreePine, Share2, Heart } from 'lucide-react';

const actions = [
  {
    icon: TreePine,
    title: 'Plant a Tree',
    description: 'Join our reforestation initiatives across Kenya',
  },
  {
    icon: Share2,
    title: 'Spread the Word',
    description: 'Share her story and amplify the message',
  },
  {
    icon: Heart,
    title: 'Support the Cause',
    description: 'Contribute to mental health & environmental programs',
  },
];

const GetInvolvedSection = () => {
  return (
    <section id="involved" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-sans text-sm tracking-widest uppercase">Take Action</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4">
            Get Involved
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-sans">
            Be part of the movement. Every action counts in the fight for our forests and minds.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => (
            <button
              key={index}
              className="glass rounded-2xl p-8 text-left hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/40 transition-colors">
                <action.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {action.title}
              </h3>
              <p className="text-muted-foreground font-sans text-sm">
                {action.description}
              </p>
            </button>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <a
            href="mailto:contact@truphena.org"
            className="btn-wood inline-flex items-center gap-3 text-foreground animate-pulse-glow text-lg"
          >
            <span className="relative z-10">Connect With Truphena</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;

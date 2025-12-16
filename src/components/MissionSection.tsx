import { Brain, Leaf, Users } from 'lucide-react';

const missions = [
  {
    icon: Brain,
    title: 'Mental Health',
    description: 'Breaking stigma around mental health in Kenya through the healing power of nature and environmental connection.',
    color: 'sdg-blue',
  },
  {
    icon: Leaf,
    title: 'Indigenous Forests',
    description: 'Protecting and restoring Kenya\'s indigenous forests, home to countless species and vital carbon sinks.',
    color: 'sdg-green',
  },
  {
    icon: Users,
    title: 'Youth Empowerment',
    description: 'Inspiring the next generation of environmental leaders through education and hands-on activism.',
    color: 'sdg-orange',
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-sans text-sm tracking-widest uppercase">The Mission</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4">
            Mental Health & Climate
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-sans">
            Truphena's mission bridges two interconnected crises—recognizing that environmental 
            destruction and mental health challenges share common roots and solutions.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl bg-${mission.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <mission.icon size={28} className={`text-${mission.color}`} />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                {mission.title}
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic max-w-3xl mx-auto">
            "When we heal the earth, we heal ourselves. When we protect forests, we protect minds."
          </blockquote>
          <p className="mt-4 text-accent font-sans">— Truphena Muthoni</p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;

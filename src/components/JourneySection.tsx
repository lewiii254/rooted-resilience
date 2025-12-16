import { TreePine, Heart, Award, Globe } from 'lucide-react';
import truphenaGuitar from '@/assets/truphena-guitar.jpg';

const timelineItems = [
  {
    icon: TreePine,
    title: 'The Beginning',
    description: 'Started her journey as a young environmental activist in Nyeri, Kenya, with a deep connection to indigenous forests.',
  },
  {
    icon: Heart,
    title: 'Mental Health Advocacy',
    description: 'Bridging environmental activism with mental health awareness, understanding the healing power of nature.',
  },
  {
    icon: Award,
    title: '72-Hour Marathon',
    description: 'Set a Guinness World Record attempt by embracing a tree for 72 consecutive hours in John Michuki Memorial Park.',
  },
  {
    icon: Globe,
    title: 'Global Recognition',
    description: 'Recognized by the Head of State with HSC commendation, becoming a voice for indigenous forests worldwide.',
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="relative py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-sans text-sm tracking-widest uppercase">The Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4">
            From Nyeri to the World
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={truphenaGuitar}
                alt="Truphena Muthoni with guitar by bamboo"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 max-w-xs">
              <p className="text-sm text-muted-foreground italic font-serif">
                "The trees speak to those who listen. We must be their voice."
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <item.icon size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

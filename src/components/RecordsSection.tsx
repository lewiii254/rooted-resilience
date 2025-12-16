import { Clock, MapPin, Trophy } from 'lucide-react';
import truphenaStateHouse from '@/assets/truphena-state-house.jpg';

const RecordsSection = () => {
  return (
    <section id="records" className="relative py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-sans text-sm tracking-widest uppercase">The Records</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4">
            Breaking Boundaries
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* Record Card */}
            <div className="glass rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="text-sdg-yellow" size={32} />
                <span className="font-serif text-2xl font-bold text-foreground">Guinness World Record Attempt</span>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Clock className="text-accent" size={20} />
                  <div>
                    <span className="text-foreground font-semibold">72 Hours</span>
                    <p className="text-sm text-muted-foreground">Consecutive tree-hugging marathon</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-accent" size={20} />
                  <div>
                    <span className="text-foreground font-semibold">John Michuki Memorial Park</span>
                    <p className="text-sm text-muted-foreground">Nyeri, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recognition */}
            <div className="glass rounded-2xl p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Head of State Commendation (HSC)
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Recognized by Kenya's President for her extraordinary contribution to environmental 
                conservation and mental health advocacy, becoming an inspiration for youth across Africa.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={truphenaStateHouse}
                alt="Truphena Muthoni at State House receiving recognition"
                className="w-full h-[600px] object-cover object-top"
              />
            </div>
            {/* Badge */}
            <div className="absolute top-6 right-6 glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-sdg-green animate-pulse" />
              <span className="text-sm font-sans text-foreground">HSC Awardee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordsSection;

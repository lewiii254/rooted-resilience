import { useEffect, useState, useRef } from 'react';
import { TreePine, Clock, Users, Award, Globe, Heart } from 'lucide-react';

const stats = [
  { icon: Clock, value: 72, suffix: '', label: 'Hours Tree-Hugging', color: 'text-sdg-green' },
  { icon: TreePine, value: 1000, suffix: '+', label: 'Trees Planted', color: 'text-accent' },
  { icon: Users, value: 50000, suffix: '+', label: 'People Reached', color: 'text-sdg-blue' },
  { icon: Award, value: 2, suffix: '', label: 'World Record Attempts', color: 'text-sdg-yellow' },
  { icon: Globe, value: 15, suffix: '+', label: 'Countries Inspired', color: 'text-sdg-orange' },
  { icon: Heart, value: 10000, suffix: '+', label: 'Mental Health Advocates', color: 'text-sdg-red' },
];

const useCountUp = (target: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, startCounting]);

  return count;
};

const CounterItem = ({ 
  icon: Icon, 
  value, 
  suffix, 
  label, 
  color, 
  isVisible 
}: { 
  icon: typeof Clock; 
  value: number; 
  suffix: string; 
  label: string; 
  color: string;
  isVisible: boolean;
}) => {
  const count = useCountUp(value, 2500, isVisible);

  return (
    <div className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} className={color} />
      </div>
      <div className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-muted-foreground font-sans text-sm">{label}</p>
    </div>
  );
};

const ImpactCounters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-card overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-sans text-sm tracking-widest uppercase">Impact</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4">
            Making a Difference
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-sans">
            Every hour spent, every tree planted, every mind touched—measuring the ripples of change.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <CounterItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              color={stat.color}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;

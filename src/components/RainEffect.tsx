import { useMemo } from 'react';

const RainEffect = () => {
  const raindrops = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {raindrops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-[2px] h-16 bg-gradient-to-b from-transparent via-rain/60 to-transparent rounded-full animate-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            opacity: drop.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RainEffect;

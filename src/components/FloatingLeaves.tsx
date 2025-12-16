import { useMemo } from 'react';
import { Leaf } from 'lucide-react';

const FloatingLeaves = () => {
  const leaves = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 16 + Math.random() * 20,
      opacity: 0.2 + Math.random() * 0.3,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-leaf"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            opacity: leaf.opacity,
          }}
        >
          <Leaf
            size={leaf.size}
            className="text-accent rotate-45"
            style={{ filter: 'blur(1px)' }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves;

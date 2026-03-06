import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/portfolioData';

function CounterItem({ label, value, index }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCount((prev) => {
            if (prev >= value) {
              clearInterval(interval);
              return value;
            }
            return prev + Math.ceil(value / 50);
          });
        }, 30);

        return () => clearInterval(interval);
      }, index * 100);

      return () => clearTimeout(timer);
    }
  }, [inView, value, index]);

  return (
    <div
      ref={ref}
      className="text-center py-6 px-4 hover:scale-105 transition-transform duration-300"
    >
      <strong className="text-4xl md:text-5xl font-bold text-yellow-400">
        {count}
      </strong>
      <span> </span>
      <span className="text-gray-300 text-lg">{label}</span>
    </div>
  );
}

export default function CounterSection() {
  const { stats, personal } = portfolioData;

  return (
    <section
      className="ftco-section bg-cover bg-center py-16 md:py-24"
      id="section-counter"
    >
      <div className="relative z-10">
        {/* Counter Stats */}
        <div className="bg-black/80 py-12 border-y border-yellow-600/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <CounterItem
                  key={index}
                  label={stat.label}
                  value={stat.value}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div
          className="relative bg-cover bg-center py-16 md:py-24"
          style={{
            backgroundImage: 'url(/images/bg_1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More projects on
              <span className="text-yellow-400 ml-2">my GitHub</span>
            </h2>

            <h4 className="text-lg md:text-xl text-gray-100 mb-8">
              I love building web applications and exploring new technologies
            </h4>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

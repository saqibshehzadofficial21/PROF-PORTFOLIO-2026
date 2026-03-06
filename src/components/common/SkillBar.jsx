import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function SkillBar({ skill, percentage, delay = 0 }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedPercentage((prev) => {
            if (prev >= percentage) {
              clearInterval(interval);
              return percentage;
            }
            return prev + 1;
          });
        }, 10);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, percentage, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-yellow-500">{skill}</span>
        <span style={{ color: "#d4af37" }} className="font-bold">
          {animatedPercentage}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full transition-all duration-500 rounded-full"
          style={{
            width: `${animatedPercentage}%`,
            background: "linear-gradient(90deg, #d4af37 0%, #ffd700 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}

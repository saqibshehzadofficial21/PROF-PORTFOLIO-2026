import { useInView } from "react-intersection-observer";

export default function ExperienceCard({
  title,
  company,
  date,
  description,
  index,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-md p-6 md:p-8 mb-6 hover:shadow-lg hover:border-yellow-600 transition-shadow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2">
              {title}
            </h3>
            <p style={{ color: "#d4af37" }} className="font-semibold">{company}</p>
          </div>
          <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
            {date}
          </span>
        </div>

        {typeof description === "string" ? (
          <p className="text-gray-300 leading-relaxed">{description}</p>
        ) : (
          <ul className="text-gray-300 space-y-2">
            {description.map((point, idx) => (
              <li key={idx} className="flex gap-3">
                <span style={{ color: "#d4af37" }}>•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

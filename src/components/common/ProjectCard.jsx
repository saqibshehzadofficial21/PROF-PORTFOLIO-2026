import { useInView } from "react-intersection-observer";

export default function ProjectCard({ project, index }) {
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
      <div className="bg-gray-800 border border-yellow-600/30 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 md:h-56 overflow-hidden bg-gray-700 zoom-effect group">
          <img
            src={`/images/${project.image}`}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-yellow-400 mb-3 hover:text-yellow-300 transition-colors">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {project.title}
            </a>
          </h3>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-black rounded font-semibold text-sm transition-all hover:shadow-lg hover:shadow-yellow-500/50 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300"
            >
              GitHub
            </a>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-black rounded font-semibold text-sm transition-all hover:shadow-lg hover:shadow-yellow-500/50 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300"
              >
                View Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

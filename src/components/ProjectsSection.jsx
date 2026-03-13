import { portfolioData } from "../data/portfolioData";
import ProjectCard from "./common/ProjectCard";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="ftco-section bg-page dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">
            Projects
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
            Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mb-8 rounded-full mx-auto"></div>
          <p className="text-secondary max-w-2xl mx-auto">
            Below are some of my web development projects showcasing front-end
            and full-stack skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Last two projects - centered */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {projects.slice(3).map((project, index) => (
            <div key={project.id} className="w-full md:w-1/3">
              <ProjectCard project={project} index={index + 3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

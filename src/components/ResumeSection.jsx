import { Link as ScrollLink } from "react-scroll";
import { portfolioData } from "../data/portfolioData";
import ExperienceCard from "./common/ExperienceCard";

export default function ResumeSection() {
  const { experience, certificates, education, portfolioProjects, personal } =
    portfolioData;

  return (
    <section
      id="resume"
      className="ftco-section bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">
            Resume
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
            Resume
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Motivated and detail-oriented Full Stack Web Developer with 3 months
            of front-end internship experience using HTML, CSS, and JavaScript.
            Completed IBM projects on Coursera and currently developing back-end
            skills with Node.js, Express, and MySQL.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-yellow-400 mb-2">
            Experience
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mb-8 rounded-full"></div>

          {experience.map((job, index) => (
            <ExperienceCard
              key={job.id}
              title={job.title}
              company={job.company}
              date={job.date}
              description={job.description}
              index={index}
            />
          ))}
        </div>

        {/* Portfolio Projects Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-yellow-400 mb-2">Projects</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mb-8 rounded-full"></div>

          <div className="bg-gray-800 border border-yellow-600/30 rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {portfolioProjects.map((project, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-yellow-400 font-bold">•</span>
                  <div>
                    <strong className="text-gray-200">{project.name}:</strong>
                    <span className="text-gray-400">
                      {" "}
                      {project.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-yellow-400 mb-2">
            Certificates
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mb-8 rounded-full"></div>

          <div className="bg-gray-800 border border-yellow-600/30 rounded-lg shadow-lg p-6">
            <ul className="space-y-4">
              {certificates.map((cert, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-yellow-400 font-bold">•</span>
                  <div>
                    <strong className="text-gray-200">{cert.title}:</strong>
                    <span className="text-gray-400"> {cert.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-yellow-400 mb-2">Education</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mb-8 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-gray-800 border border-yellow-600/30 rounded-lg shadow-lg p-6 hover:border-yellow-400/50 transition-all hover:shadow-xl hover:shadow-yellow-500/10"
              >
                <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wide">
                  {edu.date}
                </span>
                <h4 className="text-xl font-bold text-gray-100 mt-2 mb-2">
                  {edu.degree}
                </h4>
                <p className="text-yellow-400 font-semibold text-sm mb-3">
                  {edu.school}
                </p>
                <p className="text-gray-400">{edu.achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download CV Button */}
        <div className="text-center">
          <a
            href={personal.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 uppercase tracking-wide text-lg"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SkillBar from "./common/SkillBar";
import { useTheme } from "./ThemeContext";

export default function AboutSection() {
  const { personal, about, skills } = portfolioData;
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const aboutInfo = [
    { label: "Profile", value: about.profile },
    { label: "Domain", value: about.domain },
    { label: "Education", value: about.education },
    { label: "Language", value: about.languages },
    { label: "Technical Skills", value: about.technicalSkills },
    { label: "Soft Skills", value: about.softSkills },
    { label: "Interest", value: about.interests },
  ];

  return (
    <section
      id="about"
      className="ftco-section bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black light:from-gray-100 light:to-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Profile Image and Info */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-gray-800 dark:bg-gray-800 light:bg-white border border-yellow-600/30 dark:border-yellow-600/30 light:border-gray-300/30 rounded-lg overflow-hidden shadow-2xl p-6 hover:border-yellow-400/50 transition-all">
              {/* Profile Image */}
              <div className="mb-6">
                <img
                  src="/images/about-me.png"
                  alt={personal.name}
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-all"
                />
              </div>

              {/* About Info */}
              <div className="space-y-3 mb-8">
                <div className="border-b border-yellow-600/20 pb-2">
                  <span className="font-semibold text-yellow-400">Name: </span>
                  <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                    {personal.name}
                  </span>
                </div>
                <div className="border-b border-yellow-600/20 pb-2">
                  <span className="font-semibold text-yellow-400">
                    Job Role:{" "}
                  </span>
                  <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                    {personal.title}
                  </span>
                </div>
                <div className="border-b border-yellow-600/20 pb-2">
                  <span className="font-semibold text-yellow-400">
                    Experience:{" "}
                  </span>
                  <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                    3 Months Internship
                  </span>
                </div>
                <div className="border-b border-yellow-600/20 pb-2">
                  <span className="font-semibold text-yellow-400">
                    Address:{" "}
                  </span>
                  <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                    {personal.address}
                  </span>
                </div>
                <div className="border-b border-yellow-600/20 pb-2">
                  <span className="font-semibold text-yellow-400">
                    Contact:{" "}
                  </span>
                  <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                    {personal.contact}
                  </span>
                </div>
                <div className="border-b border-yellow-600/20 pb-2">
                  <span className="font-semibold text-yellow-400">Email: </span>
                  <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                    {personal.email}
                  </span>
                </div>
                <div className="border-b border-yellow-600/20 pb-2">
                  <span className="font-semibold text-yellow-400">
                    GitHub:{" "}
                  </span>
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    saqibshehzadofficial21
                  </a>
                </div>
              </div>

              {/* Skills Section */}
              <div className="bg-black/50 dark:bg-black/50 light:bg-gray-200/50 p-4 rounded-lg border border-yellow-600/20 dark:border-yellow-600/20 light:border-gray-300/20">
                <h4 className="text-lg font-bold mb-4 text-yellow-400">
                  Skills
                </h4>
                {skills.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - About Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">
                About
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
                About Me
              </h2>
              <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-6">
                {about.description}
              </p>
            </div>

            {/* About Info Table */}
            <div className="space-y-4 mb-8">
              <motion.div
                className="perspective-1000"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-yellow-600/10 to-black/50 dark:from-yellow-600/10 dark:to-black/50 light:from-yellow-600/10 light:to-white/50 p-6 rounded-lg border border-yellow-600/30 dark:border-yellow-600/30 light:border-gray-300/30 hover:border-yellow-400/50 transition-all transform-gpu hover:shadow-2xl hover:shadow-yellow-500/20">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">
                    Profile Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-800 dark:bg-gray-800 light:bg-gray-100 p-4 rounded-lg border border-yellow-600/20 dark:border-yellow-600/20 light:border-gray-300/20 hover:border-yellow-400/30 transition-all cursor-pointer"
                        whileHover={{ scale: 1.05, rotateY: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="font-semibold text-yellow-400 block mb-1">
                          {info.label}:
                        </span>
                        <span className="text-gray-300 dark:text-gray-300 light:text-gray-700">
                          {info.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Counter */}
            <div className="bg-gradient-to-br from-yellow-600/10 to-black/50 dark:from-yellow-600/10 dark:to-black/50 light:from-yellow-600/10 light:to-white/50 p-6 rounded-lg border border-yellow-600/30 dark:border-yellow-600/30 light:border-gray-300/30 hover:border-yellow-400/50 transition-all">
              <p className="text-lg text-gray-200 dark:text-gray-200 light:text-gray-800">
                <span className="text-4xl font-bold text-yellow-400">
                  {about.projectsCompleted}+
                </span>
                <span className="ml-2">Projects completed</span>
              </p>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-bold rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all hover:shadow-lg hover:shadow-yellow-500/50"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

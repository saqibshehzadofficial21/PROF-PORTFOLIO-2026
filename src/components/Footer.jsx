import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className="bg-black dark:bg-black light:bg-white text-gray-400 dark:text-gray-400 light:text-gray-600 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-yellow-400 mb-4">
            Connect with Me
          </h3>
          <div className="flex justify-center gap-6">
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.2, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.2, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.2, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.2, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.2, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.2, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaYoutube size={24} />
            </motion.a>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © {currentYear} {portfolioData.personal.name}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

import {
  FaMapLocationDot,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { portfolioData } from "../data/portfolioData";

function ContactCard({ icon: Icon, title, items }) {
  return (
    <div className="bg-gray-800 border border-yellow-600 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(212, 175, 55, 0.1)" }}
        >
          <Icon className="w-8 h-8" style={{ color: "#d4af37" }} />
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-bold text-yellow-400 mb-3">
        {title}
      </h3>
      {Array.isArray(items) ? (
        items.map((item, idx) => (
          <p
            key={idx}
            className="text-gray-300 transition-colors hover:text-yellow-300"
          >
            {typeof item === "object" ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d4af37" }}
                className="hover:text-yellow-300"
              >
                {item.text}
              </a>
            ) : (
              item
            )}
          </p>
        ))
      ) : (
        <p className="text-gray-300 transition-colors hover:text-yellow-300">
          {typeof items === "object" ? (
            <a
              href={items.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#d4af37" }}
              className="hover:text-yellow-300"
            >
              {items.text}
            </a>
          ) : (
            items
          )}
        </p>
      )}
    </div>
  );
}

export default function ContactSection() {
  const { personal } = portfolioData;

  const contactCards = [
    {
      icon: FaMapLocationDot,
      title: "Address",
      items: personal.address,
    },
    {
      icon: FaPhone,
      title: "Contact Number",
      items: personal.contact,
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      items: personal.email,
    },
    {
      icon: FaGlobe,
      title: "Download Resume",
      items: { text: "Open-Me", href: personal.cv },
    },
  ];

  return (
    <section
      id="contact"
      className="ftco-section bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent mb-4">
            Contact
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mb-8 rounded-full mx-auto"></div>
          <p className="text-gray-300">
            Below are the details to reach out to me!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, index) => (
            <ContactCard
              key={index}
              icon={card.icon}
              title={card.title}
              items={card.items}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-800 border border-yellow-600/30 rounded-lg shadow-md p-8 md:p-12 text-center mb-8 hover:border-yellow-400/50 transition-all">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-6">
            Have a <span className="text-yellow-400">Question?</span>
          </h2>
          <a
            href={`mailto:${personal.email}`}
            className="inline-block px-8 py-4 text-black font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 uppercase tracking-wide text-lg"
          >
            Email Me
          </a>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <p className="text-gray-300 font-semibold mb-4">Find me on</p>
          <div className="flex justify-center gap-6">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center text-black transition-all hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-yellow-600/30 flex items-center justify-center text-yellow-400 transition-all hover:scale-110 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/50"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

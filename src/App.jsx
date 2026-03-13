import "./index.css";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectsSection";
import CounterSection from "./components/CounterSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <div className="page-divider" />
          <AboutSection />
          <div className="page-divider" />
          <ResumeSection />
          <div className="page-divider" />
          <ProjectsSection />
          <div className="page-divider" />
          <CounterSection />
          <div className="page-divider" />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

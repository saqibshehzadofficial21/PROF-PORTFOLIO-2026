import "./index.css";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";
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
      <div className="min-h-screen bg-black dark:bg-black light:bg-white">
        <Navbar />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <ResumeSection />
          <ProjectsSection />
          <CounterSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

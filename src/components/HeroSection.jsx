import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Link as ScrollLink } from "react-scroll";
import Typewriter from "typewriter-effect";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import { portfolioData } from "../data/portfolioData";
import { useTheme } from "./ThemeContext";

export default function HeroSection() {
  const { personal } = portfolioData;
  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / 10);
    mouseY.set((e.clientY - centerY) / 10);
  };

  return (
    <section id="home" className="pt-20 pb-0 md:pt-32">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-screen"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-full flex items-center"
            style={{
              backgroundImage: "url(/images/bg_1.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseMove={handleMouseMove}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60 dark:from-black/80 dark:via-black/70 dark:to-black/60 light:from-white/80 light:via-white/70 light:to-white/60"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-white dark:text-white light:text-gray-800 order-2 md:order-1">
                  <p className="text-lg md:text-xl mb-2 font-light text-gray-300 dark:text-gray-300 light:text-gray-700">
                    Hello!
                  </p>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white dark:text-white light:text-gray-800">
                    I'm{" "}
                    <span className="text-yellow-400">{`${personal.name}`}</span>
                  </h1>

                  <div className="h-16 md:h-20 mb-6 text-2xl md:text-3xl font-semibold text-yellow-300">
                    <Typewriter
                      options={{
                        strings: personal.roles,
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 100,
                      }}
                    />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-100 dark:text-gray-100 light:text-gray-800">
                    {`${personal.title.toUpperCase()}`}
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <ScrollLink
                      to="contact"
                      smooth={true}
                      duration={500}
                      className="px-8 py-4 text-black font-bold rounded-lg transition-all duration-300 cursor-pointer text-center hover:shadow-lg hover:shadow-yellow-500/50 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 uppercase tracking-wide"
                    >
                      Hire Me
                    </ScrollLink>
                    <a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 text-black font-bold rounded-lg transition-all duration-300 text-center hover:shadow-lg hover:shadow-yellow-500/50 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 uppercase tracking-wide"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

<div
      className="hidden md:block order-1 md:order-2 h-[700px] w-full perspective-1000"
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientY - top - height / 2) / height) * 30; // rotateX max 30°
        const y = -((e.clientX - left - width / 2) / width) * 30;  // rotateY max 30°
        rotateX.set(x);
        rotateY.set(y);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      <motion.img
        src="/images/S-1.png"
        alt="Hero"
        className="w-full h-100 object-cover rounded-lg shadow-2xl cursor-pointer"
        style={{
          //rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.08, y: -20 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      />
    </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

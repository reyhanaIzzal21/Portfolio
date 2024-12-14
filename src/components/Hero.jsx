import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { herofoto } from "../assets";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Cek ukuran layar untuk menentukan apakah mobile
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup listener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    if (window.Typed) {
      const typed = new window.Typed("#text", {
        strings: [
          "I'm Front-End Developer based in Indonesia",
          "Let's create your website with me",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className={`${styles.heroHeadText} text-white shadow-text`}
          >
            Hi, I'm <span className="text-[#fff]">Reyhan</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 bg-gradient-to-r from-blue-400 via-blue-100 to-[#915EFF] bg-clip-text text-transparent`}
          >
            <span id="text"></span>
          </p>
        </div>
      </div>

      {isMobile ? (
        <div className="w-full h-[100vh] flex justify-center items-center pt-[100px]">
          <img
            src={herofoto}
            alt="computer"
            className="hero-foto w-[80%]"
          />
        </div>
      ) : (
        <ComputersCanvas />
      )}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

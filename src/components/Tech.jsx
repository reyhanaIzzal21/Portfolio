import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { tecnologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on component mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobile: screen width <= 768px
    };

    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()} className="sm:mt-16 mt-10">
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I use
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech Stack.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-row flex-wrap justify-center gap-y-10 gap-x-14">
        {isMobile
          ?
          tecnologies.map((technology) => (
            <div className="tooltip-container" key={technology.name}>
              <div className="icon">
                <div className="layer">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="facebookSVG">
                    <img src={technology.icon} alt={technology.name} />
                  </span>
                </div>
                <div className="text text-nowrap">{technology.name}</div>
              </div>
            </div>
          ))
          :
          tecnologies.map((technology) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");

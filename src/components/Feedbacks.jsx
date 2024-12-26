import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// import { techUsed } from "../constants";

const ToolCard = ({
  index,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='w-full relative right-0 left-0'
  >
    <div className='mt-1 [transform:rotate(-3deg)] overflow-hidden'>
      <p id="text_1"
        className='custom-text-outline text-end relative [transform:translateX(-1000px)] text-transparent tracking-wider text-[3rem] md:text-[5rem] uppercase font-extrabold whitespace-nowrap'>
        REACT JS.<span className="span-1 text-pink-600">REACT JS</span>.REACT JS.<span className="span-1 text-pink-600">REACT JS</span>.REACT JS.<span className="span-1 text-pink-600">REACT JS</span>.
      </p>
      <p id="text_2"
        className='custom-text-outline text-start relative [transform:translateX(0px)] text-transparent tracking-wider text-[3rem] md:text-[5rem] uppercase font-extrabold whitespace-nowrap'>
        TAILWIND.<span className="span-2 text-blue-600">TAILWIND</span>.TAILWIND.<span className="span-2 text-blue-600">TAILWIND</span>.TAILWIND.<span className="span-2 text-blue-600">TAILWIND</span>.
      </p>
      <p id="text_1"
        className='custom-text-outline text-end relative [transform:translateX(-1000px)] text-transparent tracking-wider text-[3rem] md:text-[5rem] uppercase font-extrabold whitespace-nowrap'>
        GSAP.<span className="span-3 text-green-600">GSAP</span>.GSAP.<span className="span-3 text-green-600">GSAP</span>.GSAP.<span className="span-3 text-green-600">GSAP</span>.GSAP.<span className="span-3 text-green-600">GSAP</span>
      </p>
      <p id="text_2"
        className='custom-text-outline text-start relative [transform:translateX(0px)] text-transparent tracking-wider text-[3rem] md:text-[5rem] uppercase font-extrabold whitespace-nowrap'>
        THREE JS.<span className="span-4 text-white">THREE JS</span>.THREE JS.<span className="span-4 text-white">THREE JS</span>.THREE JS.<span className="span-4 text-white">THREE JS</span>.
      </p>

    </div>
  </motion.div>
);

const Feedbacks = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animasi text_1
    gsap.to("#text_1", {
      scrollTrigger: {
        trigger: "#text_1",
        start: "top bottom", 
        end: "top top", 
        scrub: 1, 
      },
      x: -200, 
      duration: 1, 
    });

    // Animasi text_2
    gsap.to("#text_2", {
      scrollTrigger: {
        trigger: "#text_2",
        start: "top bottom", 
        end: "top top", 
        scrub: 1, 
      },
      x: -800, 
      duration: 1, 
    });
  }, []);
  return (
    <div className={`sm:mt-16 mt-10`}>
      <div
        className={`${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What tech did I use to build this portfolio?</p>
          <h2 className={styles.sectionHeadText}>The tech i use.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 w-full flex flex-col gap-4 justify-center items-center`}>
        <ToolCard />
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

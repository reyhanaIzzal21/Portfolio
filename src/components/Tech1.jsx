import React from "react";

import { motion } from "framer-motion";
import { BallCanvasOne } from "./canvas";
import { SectionWrapper } from "../hoc";
import { tecnologyOne } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech1 = () => {
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

      <div className=' mt-20 flex flex-row flex-wrap justify-center gap-10'>
        {tecnologyOne.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvasOne icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech1, "");

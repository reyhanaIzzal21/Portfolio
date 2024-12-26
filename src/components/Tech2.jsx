import React from "react";

import { motion } from "framer-motion";
import { BallCanvasTwo } from "./canvas";
import { SectionWrapper } from "../hoc";
import { tecnologyTwo } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech2 = () => {
  return (
    <div className='mt-[2rem] flex flex-row flex-wrap justify-center gap-10'>
      {tecnologyTwo.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvasTwo icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech2, "");

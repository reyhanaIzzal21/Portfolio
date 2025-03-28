import React from "react";
import { motion } from "framer-motion";
import { Ballpit } from "./canvas";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-white text-center text-xs">
                Copyright &copy; 2025 - Reyhana izzal muttaqim
            </p>
        </div>

        // <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%' }}>
        //     <Ballpit
        //         count={100}
        //         gravity={0.5}
        //         friction={0.9}
        //         wallBounce={0.95}
        //         followCursor={false}
        //     />
        // </div>
    );
};

export default SectionWrapper(Footer, "footer");
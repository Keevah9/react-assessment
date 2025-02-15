"use client";

import React from "react";
import { motion } from "framer-motion";

interface HeroContainerProps {
  img?: string;
  children: React.ReactNode;
}

const HeroContainer: React.FC<HeroContainerProps> = ({ img, children }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.7 } },
  };

  return (
    <div
      style={img ? { backgroundImage: `url(${img})` } : {}}
      className="flex justify-center items-center flex-col h-[600px] lg:h-screen bg-cover bg-center"
    >
      <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
        {children}
      </motion.div>
    </div>
  );
};

export default HeroContainer;

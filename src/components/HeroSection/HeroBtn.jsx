import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variants";

const HeroBtn = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex gap-4 mt-6 justify-center md:justify-start"
    >
      <a
        href="https://github.com/SwaroopDangal"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-2 rounded-2xl text-white bg-cyan hover:bg-cyan/80 transition-all duration-300"
      >
        <FaGithub className="text-lg" />
        GitHub
      </a>
      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 px-6 py-2 rounded-2xl text-white bg-orange hover:bg-orange/80 transition-all duration-300"
      >
        <HiOutlineDocumentDownload className="text-lg" />
        Resume
      </a>
    </motion.div>
  );
};

export default HeroBtn;

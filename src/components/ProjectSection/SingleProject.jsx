import React from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variants";

const SingleProject = ({ name, year, align, image, link, gitLink }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end sm:flex-col sm:gap-4`}
    >
      <div className={`${align === "left" ? "mr-4" : "ml-4"}`}>
        <div
          className={`flex flex-col ${
            align === "left" ? "items-end" : "items-start"
          } sm:items-start  `}
        >
          <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
          <h2 className="text-xl font-thin text-white font-special">{year}</h2>
        </div>
        <div
          className={`flex gap-4 mt-2 items-center sm:justify-center sm:mb-5 ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          }`}
        >
          <a
            target="_blank"
            href={link}
            className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer sm:justify-self-center ${
              align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
          >
            View <BsFillArrowUpRightCircleFill />
          </a>
          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500"
          >
            GitHub <FaGithub />
          </a>
        </div>
      </div>
      <div
        className={`max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 ralative border border-white  ${
          align === "left" ? "md:mr-7" : "md:ml-7"
        } `}
      >
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="website image" className="w-full  h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;

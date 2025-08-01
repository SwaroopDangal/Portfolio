import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variants";
const projects = [
  {
    name: "Kapda Pasal",
    year: "August 2025",
    align: "right",
    image: "/images/kapda.jpg",
    link: "https://kapdaghar.onrender.com/",
    gitLink: "https://github.com/SwaroopDangal/KapdaGhar",
  },
  {
    name: "Reademy",
    year: "July 2025",
    align: "left",
    image: "/images/reademy.jpg",
    link: "https://reademy.onrender.com/",
    gitLink: "https://github.com/SwaroopDangal/Reademy",
  },
  {
    name: "Musify",
    year: "June 2025",
    align: "right",
    image: "/images/musify.jpg",
    link: "#",
    gitLink: "https://github.com/SwaroopDangal/musify",
  },
  {
    name: "Chatify",
    year: "May 2025",
    align: "left",
    image: "/images/chatify.jpg",
    link: "https://chatify-vn65.onrender.com/",
    gitLink: "https://github.com/SwaroopDangal/mern-chat-app",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectText />
      </motion.div>

      <div>
        {projects.map((item, index) => (
          <SingleProject
            key={index}
            name={item.name}
            year={item.year}
            align={item.align}
            image={item.image}
            link={item.link}
            gitLink={item.gitLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectMain;

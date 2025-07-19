import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I’m a full stack MERN developer with a passion for building dynamic and
        scalable web applications. I specialize in MongoDB, Express.js, React,
        and Node.js, creating responsive front-end interfaces and robust
        back-end systems. I enjoy turning complex problems into elegant
        solutions and continuously strive to learn and grow in the ever-evolving
        world of web development.
      </p>
      <button className="border cursor-pointer text-white hover:text-cyan transition-all duration-500 border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange   md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

import React from "react";
import NavbarMain from "./components/Navbar/NavbarMain";
import HeroMain from "./components/HeroSection/HeroMain";
import HeroGradient from "./components/HeroSection/HeroGradient";
import SubHeroMain from "./components/HeroSection/SubHeroSection";
import AboutMeMain from "./components/AboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillMain from "./components/SkillSection/SkillMain";
import SubSkills from "./components/SkillSection/SubSkills";
import ExperienceMain from "./components/ExperienceSection/ExperienceMain";
import ProjectMain from "./components/ProjectSection/ProjectMain";
import ContactMeMain from "./components/ContactMeSection/ContactMeMain";
import FooterMain from "./components/FooterSection/FooterMain";

const App = () => {
  return (
    <main className="font-body overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillMain />
      <SubSkills />
      {/* <ExperienceMain /> */}
      <ProjectMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
};

export default App;

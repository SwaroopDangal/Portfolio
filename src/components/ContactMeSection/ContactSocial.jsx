import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import SingleContactSocial from "./SingleContactSocial";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/swaroop-dangal-891a05375/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/SwaroopDangal"
        Icon={FiGithub}
      />
    </div>
  );
};

export default ContactSocial;

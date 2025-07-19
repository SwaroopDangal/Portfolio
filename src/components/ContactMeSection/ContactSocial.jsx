import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import SingleContactSocial from "./SingleContactSocial";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial
        link="https://github.com/SwaroopDangal"
        Icon={FiGithub}
      />
    </div>
  );
};

export default ContactSocial;

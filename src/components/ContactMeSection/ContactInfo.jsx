import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white  ">
      <SingleInfo text="swaroopdangal732@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+977 9842036996" Image={FiPhone} />
      <SingleInfo text="Itahari,Nepal" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

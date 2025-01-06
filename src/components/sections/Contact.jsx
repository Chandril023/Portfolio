import user_info from "../../data/user_info.js";

import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm.jsx";

function Contact() {
  return (
    <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
      {/* =========== TITLE =========== */}
      {/* Heading */}
      <h4 className="text-black text-left text-3xl font-bold mb-8 dark:text-gray-200">
        cd /home/Connect
      </h4>

      {/* =========== DESCCRIPTION =========== */}
     
   

      {/* =========== LINKS =========== */}
      <div className="mt-12">
      <ContactForm/>
        {/* =========== FACEBOOK =========== */}
        <a
          href={user_info.socials.facebook}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300  hover:text-zinc-700 transition-all duration-300"
        >
          <FaFacebook className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Facebook</span>
        </a>

        {/* =========== X =========== */}
        <a
          href={user_info.socials.twitter}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaSquareXTwitter className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on X</span>
        </a>
        
        {/* =========== INSTAGRAM =========== */}
        <a
          href={user_info.socials.instagram}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaInstagram className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Instagram</span>
        </a>

        {/* =========== LINKEDIN =========== */}
        <a
          href={user_info.socials.linkedin}
          className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
        >
          <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500" />
          <span className="self-center">Follow on Linkedin</span>
        </a>
      </div>

      <hr className="mt-6 w-72 border dark:border-zinc-800" />

      {/* =========== EMAIL =========== */}
      <a
        href={`mailto:${user_info.main.email}`}
        className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
      >
        <MdEmail className="self-center text-lg text-red-800 dark:text-red-500" />
        <span>{user_info.main.email}</span>
      </a>
    </section>
  );
}

export default Contact;

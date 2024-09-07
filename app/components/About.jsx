"use client"
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion
import MusaPhoto from "../assets/musa.png";
import Illustration from "../assets/pic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faXTwitter, faThreads } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full py-8 px-4 sm:px-12 lg:px-20 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }} 
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 my-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto">
        {/* Images Section */}
        <motion.div
          className="relative max-w-[400px] flex justify-center items-center mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src={Illustration}
            alt="Illustration image"
            width={550}
            height={474}
            className="w-full h-auto relative hover:scale-105 transition"
          />
          <Image
            src={MusaPhoto}
            alt="Musa Musa Kannike"
            width={150}
            height={225}
            className="absolute bottom-0 left-[50%] md:left-0 translate-x-[-50%] md:translate-x-[-30%] translate-y-[30%] rounded hover:scale-110 transition"
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h6 className="text-gray-500 mb-5">ABOUT ME</h6>
          <h3 className="text-5xl font-medium mb-3">
            An Experienced Fullstack Web Developer
          </h3>
          <p className="mb-5">
            I'm a dedicated web developer with a strong focus on both frontend
            and backend technologies. I specialize in building responsive web
            applications using React.js, Next.js, Node.js, and other modern
            tools. With a passion for creating seamless user experiences and
            efficient backend systems, I am always eager to learn and apply the
            latest in web development. Let’s connect and build something great
            together!
          </p>
          <h6 className="text-gray-400 mb-3">CONTACT ME:</h6>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-3">
            <a href="https://linkedin.com/in/musamusakannike" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
            </a>
            <a href="https://github.com/musamusakannike" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <a href="https://twitter.com/musa_codes" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} size="xl" />
            </a>
            <a href="https://threads.net/musa.codes" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faThreads} size="xl" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

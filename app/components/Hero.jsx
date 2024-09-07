"use client";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Importing some icons as an example

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-start text-start overflow-hidden">
      {/* Animated Container */}
      <motion.div
        className="container mx-auto max-w-[1200px] text-center xl:text-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-2xl">I am</p>
        <h1 className="text-8xl xl:text-9xl font-semibold">
          <ReactTyped strings={["Musa Musa Kannike"]} typeSpeed={80} />
        </h1>
        <p className="text-2xl">A Passionate Fullstack Web Developer</p>
      </motion.div>

      {/* Floating Icons */}
      <div>
      <FaReact size={"50px"} className="absolute text-blue-500 top-10 left-5 animate-bounce" />
      <FaNodeJs size={"50px"} className="absolute text-green-500 top-20 right-10 animate-bounce" />
      <FaHtml5 size={"50px"} className="absolute text-orange-500 bottom-20 left-10 animate-spin" />
      <FaCss3Alt size={"50px"} className="absolute text-blue-400 bottom-10 right-5 animate-pulse" />
      <FaJsSquare size={"50px"} className="absolute text-yellow-500 top-[10px] left-1/3 animate-ping" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import {
  useAnimatedLetters,
  AnimatedLetters,
} from "../../animation/AnimatedLetter";
import "../body.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaJava,
  FaPython,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiRedux,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import { DiMsqlServer } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscDebugAlt } from "react-icons/vsc";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function Skills() {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const skills = ["S", "k", "i", "l", "l", "s"];

  return (
    <>
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={skills}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
        <h3 data-aos="fade-right" className="text-white opacity-90">
          //This is the TECHNOLOGY I've worked with 🧑‍💻
        </h3>
      </div>
      <section className=" pt-[2rem] md:pt-[2rem] pb-[2rem] skill">
        <div className="container mx-auto">
          <div className="border-2 border-white rounded-lg p-4 bg-transparent">
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay={true}
              autoPlaySpeed={800} // Adjust speed as needed
              centerMode={false}
              infinite
              responsive={responsive}
              slidesToSlide={1} // Move one item at a time
              itemClass="px-2" // Adjust padding between items
              className="flex"
            >
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-4xl text-orange-500" />
                <h5 className="text-lg mt-2 text-orange-500">HTML 5</h5>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3 className="text-4xl text-blue-500" />
                <h5 className="text-lg mt-2 text-blue-500">CSS 3</h5>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-4xl text-yellow-500" />
                <h5 className="text-lg mt-2 text-yellow-500">JavaScript</h5>
              </div>
              <div className="flex flex-col items-center">
                <RiTailwindCssFill className="text-4xl text-teal-500" />
                <h5 className="text-lg mt-2 text-teal-500">Tailwind CSS</h5>
              </div>
              <div className="flex flex-col items-center">
                <FaBootstrap className="text-4xl text-indigo-600" />
                <h5 className="text-lg mt-2 text-indigo-600">Bootstrap</h5>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl text-blue-400" />
                <h5 className="text-lg mt-2 text-blue-400">React</h5>
              </div>
              <div className="flex flex-col items-center">
                <SiRedux className="text-4xl text-purple-600" />
                <h5 className="text-lg mt-2 text-purple-600">Redux</h5>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-4xl text-blue-600" />
                <h5 className="text-lg mt-2 text-blue-600">TypeScript</h5>
              </div>
              <div className="flex flex-col items-center">
                <FaGitAlt className="text-4xl text-red-600" />
                <h5 className="text-lg mt-2 text-red-600">Git</h5>
              </div>
              <div className="flex flex-col items-center">
                <SiNextdotjs className="text-4xl text-white" />
                <h5 className="text-lg mt-2 text-white">Next.js</h5>
              </div>
              <div className="flex flex-col items-center">
                <VscDebugAlt className="text-4xl text-green-600" />
                <h5 className="text-lg mt-2 text-green-600">Debugging</h5>
              </div>
              <div className="flex flex-col items-center">
                <SiFramer className="text-4xl text-pink-500" />
                <h5 className="text-lg mt-2 text-pink-500">Framer Motion</h5>
              </div>
              <div className="flex flex-col items-center">
                <SiStripe className="text-4xl text-blue-500" />
                <h5 className="text-lg mt-2 text-blue-500">Stripe Payment</h5>
              </div>
              <div className="flex flex-col items-center">
                <DiMsqlServer className="text-4xl text-red-500" />
                <h5 className="text-lg mt-2 text-red-500">MS SQL Server</h5>
              </div>
              <div className="flex flex-col items-center">
                <FaJava className="text-4xl text-red-600" />
                <h5 className="text-lg mt-2 text-red-600">Java</h5>
              </div>
              <div className="flex flex-col items-center">
                <FaPython className="text-4xl text-blue-400" />
                <h5 className="text-lg mt-2 text-blue-400">Python</h5>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoPostgresql className="text-4xl text-blue-600" />
                <h5 className="text-lg mt-2 text-blue-600">PostgreSQL</h5>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-4xl text-green-600" />
                <h5 className="text-lg mt-2 text-green-600">MongoDB</h5>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-4xl text-gray-600" />
                <h5 className="text-lg mt-2 text-gray-600">Express</h5>
              </div>
              <div className="flex flex-col items-center">
                <FaNode className="text-4xl text-green-500" />
                <h5 className="text-lg mt-2 text-green-500">Node</h5>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

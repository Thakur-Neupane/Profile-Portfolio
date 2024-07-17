import React from "react";
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
import {
  AnimatedLetters,
  useAnimatedLetters,
} from "../../animation/AnimatedLetter"; // Ensure this hook is available

const Skills = () => {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const skillsTitle = ["M", "y", " ", "S", "k", "i", "l", "l", "s"];

  const skills = [
    { icon: <FaHtml5 />, label: "HTML 5", color: "text-orange-500" },
    { icon: <FaCss3 />, label: "CSS 3", color: "text-blue-500" },
    { icon: <FaJs />, label: "JavaScript", color: "text-yellow-500" },
    {
      icon: <RiTailwindCssFill />,
      label: "Tailwind CSS",
      color: "text-teal-500",
    },
    { icon: <FaBootstrap />, label: "Bootstrap", color: "text-indigo-600" },
    { icon: <FaReact />, label: "React", color: "text-blue-400" },
    { icon: <SiRedux />, label: "Redux", color: "text-purple-600" },
    { icon: <SiTypescript />, label: "TypeScript", color: "text-blue-600" },
    { icon: <FaGitAlt />, label: "Git", color: "text-red-600" },
    { icon: <SiNextdotjs />, label: "Next.js", color: "text-white" },
    { icon: <VscDebugAlt />, label: "Debugging", color: "text-green-600" },
    { icon: <SiFramer />, label: "Framer Motion", color: "text-pink-500" },
    { icon: <SiStripe />, label: "Stripe Payment", color: "text-blue-500" },
    { icon: <DiMsqlServer />, label: "MS SQL Server", color: "text-red-500" },
    { icon: <FaJava />, label: "Java", color: "text-red-600" },
    { icon: <FaPython />, label: "Python", color: "text-blue-400" },
    { icon: <BiLogoPostgresql />, label: "PostgreSQL", color: "text-blue-600" },
    { icon: <SiMongodb />, label: "MongoDB", color: "text-green-600" },
    { icon: <SiExpress />, label: "Express", color: "text-gray-600" },
    { icon: <FaNode />, label: "Node", color: "text-green-500" },
  ];

  return (
    <section className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] skill">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div
            id="skills"
            className="flex flex-col max-w-7xl h-full mx-auto py-20 px-8"
          >
            <div className="flex flex-col items-center gap-4">
              <h1 className="heading">
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={skillsTitle}
                  idx={5}
                  isHovering={isHovering}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </h1>
              <p className="text-gray-400 text-lg md:text-xl">
                Using the latest tech this world has to offer
              </p>
            </div>
            <div className="marquee border-2 border-white rounded-lg p-4 bg-transparent">
              <div className="marquee-content">
                {skills.map(({ icon, label, color }, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center mx-4`}
                  >
                    <div className={`text-4xl ${color}`}>{icon}</div>
                    <h5 className={`text-lg mt-2 ${color}`}>{label}</h5>
                  </div>
                ))}
                {/* Repeat skills for continuous effect */}
                {skills.map(({ icon, label, color }, index) => (
                  <div
                    key={`repeat-${index}`}
                    className={`flex flex-col items-center mx-4`}
                  >
                    <div className={`text-4xl ${color}`}>{icon}</div>
                    <h5 className={`text-lg mt-2 ${color}`}>{label}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

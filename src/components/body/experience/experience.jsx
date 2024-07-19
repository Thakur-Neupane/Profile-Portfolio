import React from "react";
import digeco from "../../../image/digeco.jpg";
import {
  AnimatedLetters,
  useAnimatedLetters,
} from "../../animation/AnimatedLetter";

const Experience = () => {
  const { letterClass, isHovering, handleMouseEnter, handleMouseLeave } =
    useAnimatedLetters();
  const work = ["W", "o", "r", "k"];
  const workExp = [
    {
      icon: digeco,
      companyName: "Rebb-Tech",
      startDate: "05-02-2024",
      endDate: "Present",
      position: "Web developer / Full Stack dev",
      description: `I began my career at Rebb-Tech this February as a full stack developer specializing in the MERN stack. Rebb-Tech is a dynamic startup where we innovate and develop a diverse range of products, including outsourced and in-house applications, web apps, mobile apps, and websites. During my tenure here, I have significantly expanded my skills across the entire MERN stack. I am proficient in designing and implementing scalable backend solutions using Node.js and Express.js, managing databases with MongoDB, and creating dynamic and responsive front-end interfaces with React.js. Additionally, I have gained experience in integrating AI technologies to enhance user experiences and optimize system performance. My time at Rebb-Tech has not only honed my technical skills but also strengthened my ability to collaborate effectively within cross-functional teams, contributing to our success in delivering high-quality products to our clients.
`,
    },
  ];

  return (
    <div
      id="experience"
      className="max-w-7xl h-full mx-auto py-20 px-8 relative"
    >
      <div data-aos="fade-right" className="mb-10">
        <h1 className="font-semibold text-3xl text-white opacity-90 relative inline-block">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={work}
            idx={5}
            isHovering={isHovering}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div data-aos="fade-right" className="h-0.5 bg-blue-500"></div>
        </h1>
      </div>
      <div className="flex flex-col ">
        {workExp.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col shadow-md shadow-[#06092e41] p-5 rounded-md"
          >
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center gap-2 my-3">
                <img src={digeco} alt="" width={40} className="rounded-full" />
                <p className="text-xl">{experience.companyName}</p>
              </div>
              <p className="text-sm opacity-50">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <div>
              <p className="text-sm text-white opacity-50">
                {experience.position}
              </p>
            </div>
            <div className="py-5">
              <p className="text-white text-sm">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

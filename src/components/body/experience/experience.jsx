import React from "react";
import RebbTechPhoto from "../../../image/rebb-tech.jpg";
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
      icon: RebbTechPhoto,
      companyName: "Rebb-Tech",
      startDate: "05-02-2024",
      endDate: "Present",
      position: "Web developer / Full Stack dev",
      description: `
        I began my career at Rebb-Tech in February 2024 as a full stack developer specializing in the MERN stack. Working in Rebb Tech as a Full Stack Developer, I expanded my skills in designing and implementing dynamic webs contributing to the delivery of high quality products. Skills I generate here in Rebb tech are:
        - Backend: Express JS, Node JS, Postman, ThunderClient, Working with JWT tokens, Cookies, different middlewares such as Joi, auth, Uploading photos by cloudinary plus multer, email by Nodemailer, PassportJs, Stripe Payment, mongoose, morgan and MongoDb.
        
        - Frontend: Html5, CSS3, SCSS, JavaScript, TypeScript, Bootstrap, Tailwind, React, Redux, UI/UX design, React-router-dom, Toastify, Axios, React-icons, GoogleFonts, FontAwesome, etc.
        
        - Others: Working with npm and yarn, Trello, Jira, AgileMethodoloy, AWS, Docker, Render, Cyclic and Vercel, Git and Github, Slack, Teamwork.
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
      <div className="flex flex-col">
        {workExp.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col shadow-md shadow-[#06092e41] p-5 rounded-md"
          >
            <div className="flex justify-between items-center text-white">
              <div className="flex items-center gap-2 my-3">
                <img
                  src={experience.icon}
                  alt=""
                  width={40}
                  className="rounded-full"
                />
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
              <h2 className="text-white text-sm mb-2">Overview:</h2>
              <div className="text-white text-sm mb-4">
                {experience.description
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <div key={index}>
                      {paragraph.startsWith("- Backend:") && (
                        <p>
                          <span className="text-yellow-400 text-3xl">
                            Backend:
                          </span>{" "}
                          {paragraph.replace("- Backend:", "").trim()}
                        </p>
                      )}
                      {paragraph.startsWith("- Frontend:") && (
                        <p>
                          <span className="text-yellow-400 text-3xl">
                            Frontend:
                          </span>{" "}
                          {paragraph.replace("- Frontend:", "").trim()}
                        </p>
                      )}
                      {paragraph.startsWith("- Others:") && (
                        <p>
                          <span className="text-yellow-400 text-3xl">
                            Others:
                          </span>{" "}
                          {paragraph.replace("- Others:", "").trim()}
                        </p>
                      )}
                      {!paragraph.startsWith("- ") &&
                        !paragraph.trim().startsWith("I began") && (
                          <p>{paragraph.trim()}</p>
                        )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

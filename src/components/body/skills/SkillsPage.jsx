import React from "react";
import Section from "./Section";
import SkillDescription from "./SkillDescription";
import Details from "./Details";
import SkillsMarquee from "./SkillMarquee";

const SkillsPage = () => {
  return (
    <Section
      id="skills"
      title="expertise"
      subtitle="I am proficient in performing tasks related to all of the listed skills below."
      className="relative"
    >
      <div className="md:px-20 px-5 overflow-x-hidden max-w-[24rem] md:max-w-[50rem] lg:max-w-[75rem] xl:max-w-[80rem] 2xl:max-w-[100rem]">
        <SkillsMarquee />
      </div>

      <div className="md:mx-10 lg:px-20 2xl:px-40 px-5 grid grid-cols-1 md:grid-cols-2 md:space-x-5">
        <Details />

        <SkillDescription />
      </div>
    </Section>
  );
};

export default SkillsPage;

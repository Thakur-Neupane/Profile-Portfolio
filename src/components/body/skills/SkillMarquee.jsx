import "./SkillMarquee.css";
import react from "../../../image/blogify.png";
import javascript from "../../../image/blogify.png";
import nextjs from "../../../image/blogify.png";
import redux from "../../../image/blogify.png";
import css3 from "../../../image/css.png";
import git from "../../../image/blogify.png";

const skillsData = [
  {
    id: 1,
    image: javascript,
    title: "Javascript",
  },
  {
    id: 2,
    image: react,
    title: "React.js",
  },
  {
    id: 3,
    image: redux,
    title: "React-Redux",
  },
  {
    id: 4,
    image: nextjs,
    title: "Next.js",
  },
  {
    id: 5,
    image: css3,
    title: "CSS",
  },
  {
    id: 6,
    image: git,
    title: "Git",
  },
];

function SkillsMarquee() {
  return (
    <div className="relative overflow-hidden">
      <div className="py-5 flex animate-marquee whitespace-nowrap">
        {/* Render the skills twice for continuous effect */}
        {[...skillsData, ...skillsData].map(({ id, image, title }) => (
          <div key={id} className="skill--box flex justify-start p-3">
            <img src={image} alt={title} className="skill-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsMarquee;

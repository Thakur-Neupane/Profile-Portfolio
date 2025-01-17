import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import AppFooterCopyright from "./FooterCopyright";

const socialLinks = [
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://www.github.com/himanshuchandola",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/himanshuchandola/",
  },

  {
    id: 5,
    icon: <MdEmail />,
    url: "mailto:himanshuchandolaofficial@gmail.com",
  },
];

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 border-t-2 dark:border-neutral-600 border-neutral-300">
        {/* Footer social links */}
        <div className="flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-amber-500 dark:text-amber-500 mb-5">
            Connect With Me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.id}
                className="dark:bg-[#111111] hover:bg-neutral-200 dark:hover:bg-[#1b1b1b] cursor-pointer rounded-xl bg-gray-100 shadow-sm p-4 border dark:border-white/5 border-black/5 hover:text-indigo-600 transition-transform duration-300 transform hover:scale-105"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
        <div className="font-general-regular flex justify-center items-center text-center">
          <a
            href="https://vercel.com/?utm_source=himanshuchandola&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Powered by Vercel"
          >
            <img
              src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
              alt="Powered by Vercel"
            />
          </a>
        </div>
        <br />
        <AppFooterCopyright />
      </div>
    </div>
  );
};

export default Footer;

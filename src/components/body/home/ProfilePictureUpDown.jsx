import React, { useState } from "react";
import FloatingAnimation from "../../animation/FloatingAnimation";
import logoProgLang from "../../arrays/logoProgLang";
import "./home.css";
import hero from "../../../image/hero.jpg";

function ProfilePictureUpDown() {
  const [lastClickedId, setLastClickedId] = useState(null);

  return (
    <div className="p-10 relative max-sm:p-2">
      <div className="relative w-72 h-72 rounded-full bg-slate-900 overflow-hidden flex items-center justify-center">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={hero} // Replace with your hero image URL
          alt="Hero"
        />
        <FloatingAnimation
          wrapperClassName="p-6 rounded-full border border-white border-opacity-50 hover:border-opacity-100 hover:border-blue-500 focus:outline-none focus:border-opacity-100 transition-colors"
          yValues={[0, -5, 0, 5, 0]}
          delay={0.5}
          children={
            <div className="profilePTag rounded-full bg-opacity-70 w-72 h-72 hover:shadow-md hover:shadow-[#06092e41] duration-500">
              <img
                className="brightness-110 contrast-125 object-cover object-center w-full h-full"
                src={hero}
                alt="Thakur"
              />
            </div>
          }
        />
      </div>

      {logoProgLang.map((item, index) => (
        <FloatingAnimation
          key={index}
          id={index}
          lang={item.lang}
          lastClickedId={lastClickedId}
          setLastClickedId={setLastClickedId}
          yValues={item.yValues}
          isClick={true}
          delay={item.delay}
          wrapperClassName={item.wrapperClassName}
          children={
            <span className={item.childCLassName}>
              <img className="w-full h-full" src={item.src} alt="" />
            </span>
          }
        />
      ))}
    </div>
  );
}

export default ProfilePictureUpDown;

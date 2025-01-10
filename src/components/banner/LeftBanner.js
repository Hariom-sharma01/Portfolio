import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import SpringBootIcon from "../../assets/SpringBootIcon";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Java Developer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full  flex flex-col gap-20 ">
      <div className="flex flex-col gap-5 items-center">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Mukul Kholiya</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a full stack java developer with expertise in modern Technologies
          like Spring Boot, React, Hibernate, Microservices, Express and Node.js .
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a className="bannerIcon" href="https://www.facebook.com/mukul.kholiya.5">
                        <FaFacebookF />
                      </a>
                      <a className="bannerIcon" href="https://github.com/MukulKholiya">
                        <FaGithub />
                      </a>
                      <a className="bannerIcon" href="https://www.linkedin.com/in/mukul-kholiya-b76b75263/">
                        <FaLinkedinIn />
                      </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SpringBootIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;

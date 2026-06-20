import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPython,
  SiApachespark,
  SiDatabricks,
  SiMicrosoftazure,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Data Engineer.",
      "Databricks Developer.",
      "Azure Data Engineer.",
      "Big Data Engineer.",
      "ETL Pipeline Developer.",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full flex flex-col gap-20">
      {/* Hero Content */}
      <div className="flex flex-col gap-5 items-center text-center">
        <h4 className="text-lg font-normal tracking-widest text-gray-400">
          WELCOME TO MY WORLD
        </h4>

        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Hariom Sharma
          </span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          a{" "}
          <span className="text-designColor">
            {text}
          </span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>

        <p className="max-w-4xl text-base md:text-lg font-bodyFont leading-8 tracking-wide text-gray-300">
          Data Engineer with experience in designing and optimizing scalable
          data pipelines, ETL workflows, and cloud-based data solutions.
          Skilled in Python, SQL, Databricks, Apache Spark, Azure Data Factory,
          and Azure cloud services. Passionate about transforming complex data
          into actionable insights and building reliable data platforms that
          drive business decisions.
        </p>
      </div>

      {/* Social Links & Skills */}
      <div className="flex flex-col xl:flex-row gap-10 justify-between">
        {/* Social Links */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find Me On
          </h2>

          <div className="flex gap-4">
            <a
              className="bannerIcon"
              href="https://www.instagram.com/hariom_sharma210/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              className="bannerIcon"
              href="https://github.com/Hariom-sharma01"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              className="bannerIcon"
              href="https://www.linkedin.com/in/hariom-sharma-7a3681250/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Core Skills
          </h2>

          <div className="flex gap-4 flex-wrap">
            <span className="bannerIcon">
              <SiPython />
            </span>

            <span className="bannerIcon">
              <FaDatabase />
            </span>

            <span className="bannerIcon">
              <SiApachespark />
            </span>

            <span className="bannerIcon">
              <SiDatabricks />
            </span>

            <span className="bannerIcon">
              <SiMicrosoftazure />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
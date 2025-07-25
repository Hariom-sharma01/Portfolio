import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo,projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Alumni Connect"
          des=" Build an interactive Alumni Connect platform to facilitate seamless networking between alumni and students,
 enhancing professional connections and mentorship opportunities Technologies involved in development are :- React.js, Node.js, Tailwind CSS and MongoDB."
          src={projectOne}
          link="#"
        />
        <ProjectsCard
          title="XCEL IT Solutions Website "
          des="Designed a responsive and visually appealing website for XCEL IT Solutions to showcase IT services and client
 projects effectively."
          src={projectTwo}
          link="https://xcelitsol.com/"
        />
        
        <ProjectsCard
        title="MyBook"
        des=" Built a secure and user-friendly digital journaling platform where users can write, manage, and personalize their
              private entries.Implemented authentication using JWT with secure HTTP-only cookies and developed frontend features such as
              entry tracking, profile customization, and responsive UI with Tailwind CSS"
        src={projectThree}
        link="https://mybookbyhs.vercel.app/"
        />
       

      </div>
    </section>
  );
}

export default Projects
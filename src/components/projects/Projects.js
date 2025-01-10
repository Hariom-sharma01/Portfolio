import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Build Smart Online"
          des="An online marketplace where you can buy all your essentials while contruction of your homes, offices, etc.
          Technologies involved in development are :- Java(Spring Boot), Java Script(React), Thymeleaf, HTML, CSS. "
          src={projectOne}
        />
        <ProjectsCard
          title="Smart Contact Manager"
          des=" A web Application created on Java and Spring Boot to manage your contacts with login, signup and Email-verification functionality."
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Coming Soon..."
          src={projectThree}
        />
        
      </div>
    </section>
  );
}

export default Projects
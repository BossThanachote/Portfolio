"use client";
import React, { useState,useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion,useInView } from 'framer-motion';

const projectsData = [
    {
        id:1,
        title: "Selling Fruit Website",
        description:"Designing a section of the website for a fruit selling website",
        image: "/img/pro1.jpg",
        tag:["All","No-Database"],
        gitUrl: "https://github.com/BossThanachote/Design_Selling_Fruit_Website",
        previewUrl: "https://effortless-chaja-487aeb.netlify.app/",
    },
    {
        id:2,
        title: "Login Template",
        description:"Designing the login section to be used as a template",
        image: "/img/logintemplate1.jpg",
        tag:["All","No-Database"],
        gitUrl: "https://github.com/BossThanachote/logintest1",
        previewUrl: "https://bosstemplate01.netlify.app/",
    },
    
];

const ProjectsSection = () => {
  const [tag,setTag] = useState("All");
  const ref = useRef(null)
  const isInview = useInView(ref,{once:true});
  const handleTagChange = (newTag) =>{
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: {y:50,opacity:0},
    animate: {y:0,opacity:1},
  }
  return (
    <section>
        <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
          <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"} 
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="Database" 
            isSelected={tag === "Database"} 
            />
            <ProjectTag 
            onClick={handleTagChange} 
            name="No-Database" 
            isSelected={tag === "No-Database"} 
            />
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12 mt-10 mx-20'>
          {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants} 
            initial="initial" 
            animate={isInview ? "animate" : "initial"}
            transition={{duration:0.3, delay:index * 0.4 }}>
          <ProjectCard
            key={project.id}
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
          </motion.li>
          ))}
        </ul>
    </section>
  )
}

export default ProjectsSection
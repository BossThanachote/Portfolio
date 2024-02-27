"use client";
import React , {useTransition, useState}from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title:"Skills",
        id: "skills",
        content:(
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
                <li>JavaScript</li>
                <li>React.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content:(
            <ul>
                <li>RANGSIT UNIVERSITY INTERNATIONAL COLLEGE</li>
            </ul>
        )
    },
    {
        title: "Hobbies",
        id: "hobbies",
        content:(
            <ul className="list-disc pl-2">
                <li>Learning Code</li>
                <li>Touch Some Grass ?</li>
                <li>Playing Video Games</li>
            </ul>
        )
    }
]

const AboutSection = () =>{
    const [tab,setTab] = useState("skills");
    const [isPending,startTransition] = useTransition();
    
    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        });
    };
    return <section className="text-white" id="#about">
                <div className="md:grid md:grid-cols-2 grid gap-8 items-center py-8 px-4 xl:gap-0 sm:py-16 sm:px-16">
                    <Image className="rounded-lg shadow-xl "
                        src="/img/catcom.gif"
                        width={500}
                        height={500}
                        alt="cat"
                        >
                    </Image>
                    <div className="mt-4 md:mt-20 text-left flex flex-col h-full ">
                        <h2 className="lg:text-4xl md:text-2xl font-bold text-white mb-4">About me</h2>
                        <p className="text-base lg:text-lg ">
                            {"I am deeply passionate about Front-end web development, a skill I have consistently honed and practiced. I am currently exploring Backend development as well, aiming to further grow and enhance my skill set in this area."}
                        </p>
                        <div className="flex flex-row mt-8 justify-start">
                            <TabButton 
                                selectTab={() => handleTabChange("skills")} 
                                active={tab === "skills"}
                            >
                                {""}
                                Skills{""}
                            </TabButton>
                            <TabButton 
                                selectTab={() => handleTabChange("education")} 
                                active={tab === "education"}
                            >
                                {""}
                                Education{""}
                            </TabButton>
                            <TabButton 
                                selectTab={() => handleTabChange("hobbies")} 
                                active={tab === "hobbies"}
                            >
                                {""}
                                Hobbies{""}
                            </TabButton>                        
                        </div>
                        <div className="mt-5">
                                {TAB_DATA.find((t) => t.id === tab).content}
                            </div>
                    </div>        
                </div>
            </section>;
};

export default AboutSection;
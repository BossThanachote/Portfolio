"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeaderSection =() =>{
    return(
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div 
                    initial={{ opacity:0, scale:0.5 }} 
                    animate={{ opacity:1, scale:1}}
                    transition={{ duration: 0.5 }} 
                    className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            {"Hello,I'm"}
                        </span> 
                        <br></br>
                        <TypeAnimation
                            sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Boss',
                            3000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Developer',
                            2000,
                          ]}
                          wrapper="span"
                          speed={50}
                          repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Maxime eaque mollitia 
                    </p>
                    <div>
                        <button className="px-10 py-3 rounded-full mr-4 text-white bg-white hover:bg-slate-200 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">Hire Me</button>
                        <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Download CV</button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity:0, scale:0.5 }} 
                    animate={{ opacity:1, scale:1}}
                    transition={{ duration: 0.5 }}  
                    className="col-span-5 place-self-center mt-10 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative ">
                        <Image 
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            src="/img/rikka-dance.gif" 
                            alt="rikka"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeaderSection;
"use client";
import React, {useState} from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Projects",
        path: "#projects",
    },
    {
        title:"Contact",
        path:"#contact",
    },
]

const Navbar =() =>{
    const [navbarOpen, setNavbarOpen] = useState(false);
    return(
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto p-6">
                <Link 
                    href={"/"} 
                    className="text-2xl md:text-5xl text-white font-semibold"
                ><Image
                    alt="cat" 
                    src="/img/cattt.gif" 
                    className="rounded-lg"
                    width={100}
                    height={75}>
                </Image>
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ?(
                            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {navLinks.map((link,index)=>(
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar;

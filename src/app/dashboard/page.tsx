"use client";
import { useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import InstructrLogo from "/Instructrpng.png"
import Image from "next/image";
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    return(
    <html>
       <div className="flex">
    <div
     className={`bg-secondary-content h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"}
         duration-300 relative`}
    >
        <BsArrowLeftShort 
        className={`bg-white text-primary text-2xl
        rounded-full absolute -right-3 top-9 border
        border-primary cursor-pointer 
        ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)} 
    />
        {/* Logo container with fixed size */}
        <div className="flex items-center">
            <div className="relative w-12 h-12"> {/* Fixed size wrapper */}
                <Image
                src="/Instructrpng.png"
                layout="fill"
                objectFit="contain" // Keeps aspect ratio without cropping
                alt="Instructr"
                />
            </div>
            <h1 className={`text-white origin-left font-medium text-2xl duration-300 ml-4 ${!open && "scale-0"}`}>Lesson Plan</h1>
        </div>
        {/* Search and other components */}
    </div>    
</div>
    </html>
    )
}
export default Dashboard;
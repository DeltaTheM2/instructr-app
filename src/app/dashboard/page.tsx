"use client";
import { useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import InstructrLogo from "/Instructrpng.png"
import Image from "next/image";
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    return(
    <html>
        <div className="flex">
            <div className={`bg-secondary-content h-screen p-5 pt-8 ${
                open ? "w-72" : "w_2"} duration-300 relative`}>
                <BsArrowLeftShort 
                className={`bg-white text-primary text-3xl
                rounded-full absolute -right-3 top-9 border
                border-primary cursor-pointer ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)} />
                <div className="inline-flex">
                    <Image
                    src="/Instructrpng.png"
                    width={60}
                    height={60}
                    alt="Instructr"
                    className="fill-primary text-4xl rounded cursor-pointer block float-left mr-2"
                    />
                    <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}> Lesson Plan</h1>
                </div>
            </div>    
        </div>    
    </html>
    )
}
export default Dashboard;
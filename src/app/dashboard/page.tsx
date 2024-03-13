"use client";
import { useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import { BsArrowLeftShort, BsChevronDown, BsSearch } from "react-icons/bs";
import { AiFillEnvironment, AiFillProfile, AiOutlineSetting } from "react-icons/ai";
import InstructrLogo from "/Instructrpng.png"
import Image from "next/image";
import { RiDashboardFill } from "react-icons/ri";
const Dashboard = () => {
    const [open, setOpen] = useState(true);
    const [SubMenuopen, setSubmMenuOpen] = useState(true);
    const Menus =[
        {
            title: "Topic 1",
            subMenu: true,
            subMenuItems: [
                {title: "Lesson 1"},
                {title: "Lesson 2"},
                {title: "Lesson 3"}
            ],
        },
        {title: "Settings", icon: <AiOutlineSetting/>},
        {title: "Profile", icon: <AiFillProfile/>}
        
    ];
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
        <div className="flex items-center space-x-4">
                <Image
                src="/Instructrpng.png"
                width={50} 
                objectFit="contain"
                height={50}
                alt="Instructr"
                className="fill-primary text-4xl rounded cursor-pointer block float-left mr-2"
                />
    
            <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Lesson Plan</h1>
        </div>
        <div className={`flex items-center rounded-md
        bg-green-900 mt-6 ${!open ? "px-4": "px-3"} py-2`}>
            <BsSearch className={`text-white text-lg block float-left
            cursor-pointer ${open && "mr-2"}`} />

            <input type={"search"} placeholder="Search" className=
            {`text-base bg-transparent w-full text
            focus:outline-none ${!open && "hidden"}`} />
        </div>
        <ul className="pt-2">
            {Menus.map((menu, index) => (
                <>
                <li
                key={index}
                className={`text-grey-300 text-sm flex
                 items-center gap-x-4 cursor-pointer p-2
                 hover:bg-primary hover:text-secondary-content rounded-md
                 mt-2`}>
                    <span className="text-2xl block float-left">
                        <RiDashboardFill />
                    </span>
                    <span>{menu.title}</span>
                    {menu.subMenu && open && (
                        <BsChevronDown className={`${SubMenuopen && "rotate-180"}`} onClick={() => setSubmMenuOpen(!SubMenuopen)} />
                    )}

                </li>
                {menu.subMenu && SubMenuopen && open && (
                    <ul>
                        {menu.subMenuItems.map((submenuItem, index) => (
                            <li key={index} className="text-grey-300 text-sm flex
                            items-center gap-x-4 cursor-pointer p-2 px-5
                            hover:bg-primary hover:text-secondary-content rounded-md
                            mt-2">
                                {submenuItem.title}
                            </li>
                        ))}
                    </ul>
                )}
                </>
            )
            )}
            
        </ul>
    </div>    
</div>    

    </html>
    )
}
export default Dashboard;
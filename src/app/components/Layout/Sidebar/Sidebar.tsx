// src/components/layout/Sidebar.tsx
'use client'
import React from "react";
import { useState, Fragment } from 'react';
import Image from 'next/image';
import { BsArrowLeftShort, BsChevronDown, BsSearch } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import Link from 'next/link';
import {Input} from "@nextui-org/react";


interface SubMenuItem {
    title: string;
    path: string;
}

interface SideBarItem {
    title: string;
    subMenu?: boolean;
    subMenuItems?: SubMenuItem[];
    icon?: JSX.Element;
    path?: string;
    action?: () => void;
}

interface SidebarProps {
    menus: SideBarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menus }) => {
    const [open, setOpen] = useState(true);
    const [subMenuOpen, setSubMenuOpen] = useState(true);

    return (
        <div className={`bg-secondary-content h-auto p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
            <BsArrowLeftShort
                className={`bg-white text-primary text-2xl rounded-full absolute -right-3 top-9 border border-primary cursor-pointer ${!open && 'rotate-180'}`}
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
                <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && 'scale-0'}`}>Lesson
                    Plan</h1>
            </div>
            <div className={`flex items-center rounded-md -900 mt-6 ${!open ? 'px-4' : 'px-3'} py-2`}>
                <BsSearch className={`text-white text-lg block float-left cursor-pointer ${open && 'mr-2'}`}/>
                <Input type="search" placeholder="Search" color={'default'}
                       className={`text-base bg-transparent w-full text focus:outline-none ${!open && 'hidden'}`}/>
            </div>
            <ul className="pt-2">
                {menus.map((menu, index) => (
                    <li key={index} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-primary hover:text-secondary-content rounded-md mt-2">
                        {menu.path ? (
                            <Link href={menu.path} className="flex items-center gap-x-4 w-full">
                                {menu.icon && <span className="text-2xl">{menu.icon}</span>}
                                <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}>
                    {menu.title}
                </span>
                            </Link>
                        ) : (
                            <button onClick={menu.action} className="flex items-center gap-x-4 w-full">
                                {menu.icon && <span className="text-2xl">{menu.icon}</span>}
                                <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden'}`}>
                    {menu.title}
                </span>
                            </button>
                        )}
                        {menu.subMenu && open &&
                            <BsChevronDown
                                className={`text-xl cursor-pointer ${subMenuOpen && 'rotate-180'}`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSubMenuOpen(!subMenuOpen);
                                }}
                            />
                        }
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default Sidebar;

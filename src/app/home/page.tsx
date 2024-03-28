import React from "react";
import Sidebar from "@/app/components/Layout/Sidebar/Sidebar";
import {AiFillProfile, AiOutlineSetting, AiFillPlusCircle} from "react-icons/ai";
import Card from "@/app/components/Card";


const Home = () => {
    const menus = [
        {
            title: 'New Lesson',
            icon: <AiFillPlusCircle/>
        },
        {title: 'Settings', icon: <AiOutlineSetting/>},
        {title: 'Profile', icon: <AiFillProfile/>}
    ];
    return(
        <>
            <div className={'flex'}>
                <Sidebar menus={menus} />
                <Card image={'sth'} title={'testing'} subTitle={'just to test'} description={"lorem ipsum and shit"}/>
            </div>
            

        </>
    )
}

export default Home;
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
            <div className={'grid grid-cols-4 p-10 gap-4'}>
                <Card image={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'} title={'testing'} subTitle={'just to test'} description={"lorem ipsum and shit"}/>
                <Card image={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'} title={'testing'} subTitle={'just to test'} description={"lorem ipsum and shit"}/>
                <Card image={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'} title={'testing'} subTitle={'just to test'} description={"lorem ipsum and shit"}/>
                <Card image={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'} title={'testing'} subTitle={'just to test'} description={"lorem ipsum and shit"}/>
                <Card image={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'} title={'testing'} subTitle={'just to test'} description={"lorem ipsum and shit"}/>
                <Card image={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'} title={'testing'} subTitle={'just to test'} description={"lorem ipsum and shit"}/>
            </div>
        </div>
        </>
    )
}

export default Home;
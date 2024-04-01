import React from "react";
import Sidebar from "@/app/components/Layout/Sidebar/Sidebar";
import {AiFillProfile, AiOutlineSetting, AiFillPlusCircle} from "react-icons/ai";
import Card from "@/app/components/Card";
import card from "@/app/components/Card";
interface CardData {
    id: number;
    image: string;
    title: string;
    subTitle: string;
    description: string;
}

const Home = () => {
    const menus = [
        { title: 'New Lesson', icon: <AiFillPlusCircle/> },
        { title: 'Settings', icon: <AiOutlineSetting/> },
        { title: 'Profile', icon: <AiFillProfile/> }
    ];

    // Example cards array (empty to simulate no cards)
    const cards: CardData[] = [
        {
        id: 0,
        image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        title: 'testing',
        subTitle: 'just to test',
        description: "lorem ipsum and shit"
        },
        {
            id: 0,
            image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            title: 'testing',
            subTitle: 'just to test',
            description: "lorem ipsum and shit"
        },
        {
            id: 0,
            image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            title: 'testing',
            subTitle: 'just to test',
            description: "lorem ipsum and shit"
        },
        {
            id: 0,
            image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            title: 'testing',
            subTitle: 'just to test',
            description: "lorem ipsum and shit"
        },
        {
            id: 0,
            image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            title: 'testing',
            subTitle: 'just to test',
            description: "lorem ipsum and shit"
        },
        {
            id: 0,
            image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            title: 'testing',
            subTitle: 'just to test',
            description: "lorem ipsum and shit"
        },
        {
            id: 0,
            image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            title: 'testing',
            subTitle: 'just to test',
            description: "lorem ipsum and shit"
        },
        {
            id: 0,
            image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            title: 'testing',
            subTitle: 'just to test',
            description: "lorem ipsum and shit"
        },
        {
            id: 0,
            image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            title: 'testing',
            subTitle: 'just to test',
            description: "lorem ipsum and shit"
        },
        {
            id: 0,
            image:'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
            title: 'testing',
            subTitle: 'just to test',
            description: "lorem ipsum and shit"
        },

    ]; // Use the interface to type your cards array

    return (
        <>
            <div className="flex h-screen">
                <Sidebar menus={menus} />
                <div className="flex-grow overflow-auto">
                    {cards.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 p-10 gap-4">
                            {cards.map((card: CardData, index) => (
                                <Card
                                    key={index}
                                    image={card.image}
                                    title={card.title}
                                    subTitle={card.subTitle}
                                    description={card.description}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500 text-center text-xl">
                                Make a new course
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;

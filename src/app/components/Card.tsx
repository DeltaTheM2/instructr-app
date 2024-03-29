import React from "react";
interface CardProps {
    image: string;
    title: string;
    subTitle: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, subTitle, description }) => {
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg flex flex-col justify-between min-h-[350px] bg-white"> {/* Adjust min-h as needed */}
            <img className="w-full h-48 object-cover" src={image} alt="Image"/>
            <div className="p-6 flex flex-col justify-start flex-grow">
                <span className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {subTitle}
                </span>
                <div className="title-font text-lg font-medium mb-2">
                    {title}
                </div>
                <p className="flex-grow text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-primary text-white py-2 px-3 text-sm font-semibold rounded-3xl hover:bg-secondary">
                    Open
                </span>
            </div>
        </div>
    );
};


export default Card;
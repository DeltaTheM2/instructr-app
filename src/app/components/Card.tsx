import React from "react";
interface CardProps {
    image: string;
    title: string;
    subTitle: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, subTitle, description }) => {
    return (
        <>
                <div className={'max-w-2xl rounded-2xl overflow-hidden shadow-lg '}>
                    <img className={'w-full'} src={image} alt={'Image'}/>
                    <div className={'px-6 py-4 lg:h-44'}>
                  <span className={'tracking-widest text-xs title-font font-medium text-grey-400 nb-1'}>
                  {subTitle}
                  </span>
                        <div className={'title-font text-lg font-medium mb-2'}>
                            <a href={'#'} className={'no-underline text-gray-900'}>
                                {title}
                            </a>
                        </div>
                        <p className={'text-grey-700 text-base'}>
                            {description}
                        </p>
                    </div>
                    <div className={"px-6 pt-4 pb-2"}>
                  <span className={'inline-block bg-primary text-primary-content py-2 pl-3 pr-3 text-sm font-semibold mb-3 cursor-pointer tracking-widest rounded-2xl hover:bg-accent'}>
                      Open
                  </span>
                    </div>

                </div>
        </>
    );
}

export default Card;
import React from "react";

const Card = (image:string, title:string, subTitle:string, description:string) => {
    return(
      <>
        <div className='lg:p-4 md:w-full flex justify-center mt-40'>
            <div className={'max-w-sm rounded-2xl overflow-hidden shadow-lg'}>
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
                    <span className={'inline-block bg-primary text-primary-content py-2 text-sm font-semibold mb-3 cursor-pointer tracking-widest rounded-full hover:bg-accent'}>
                        Open
                    </span>
                </div>

            </div>
        </div>
      </>
    );
}
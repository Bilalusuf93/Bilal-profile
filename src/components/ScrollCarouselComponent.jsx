'use client'; // For Next JS 13 app router


import React from 'react';
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';


const ScrollCarouselComponent = ({
    image,
    github,
    website,
    githubUrl,
    WebLogo
}) => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop
            stopOnHover={true}
            showThumbs={false}
        >
            <div className='relative w-full h-[230px]'>
                <Image
                    src={image}
                    alt='project_image'
                    className='w-full h-full object-cover rounded-2xl'
                />

                <div className='absolute inset-0 flex justify-end m-3 card-img_hover mr-5'>
                    <div
                        onClick={() => window.open(website, "_blank")}
                        className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1'
                    >
                        <Image
                            src={WebLogo}
                            alt='source code'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                    <div
                        onClick={() => window.open(githubUrl, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-1'
                    >
                        <Image
                            src={github}
                            alt='source code'
                            className='w-1/2 h-1/2 object-contain'
                        />
                    </div>
                </div>
            </div>
           
        </Carousel>
    );
};

export default ScrollCarouselComponent;
import React from 'react';

const About3D = () => {
    return (
        <div className='bg-[url("/img/3d/bg_3.jpg")] bg-cover py-10'>
            <div className='container mx-auto'>
                <div className='grid grid-col-1 justify-items-center md:grid-cols-[300px_auto] gap-10 md:gap-28 items-center'>
                    <div>
                        <img className='w-full' src='/img/3d/logo.png' />
                    </div>
                    <div>
                        <p className='text-base md:text-xl text-justify px-2 md:px-0'>We are a specialized company in 3D modeling and CGI, producing high-quality 3D models, imagery and animations in collaboration with top 3D designers. Along with creating realistic 3D models, we also offer high quality product image        rendering tailored to retail industries, enabling clients to catch the customers     attention with stunning product rendered outputs. Our commitment to delivering exceptional visual experiences not only satisfies our clients but also attracts more business opportunities. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About3D;
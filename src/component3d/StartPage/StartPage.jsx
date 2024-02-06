import React from 'react';

const StartPage = () => {
    return (
        <div className='bg-[url("/img/3d/bg.jpg")] overflow-hidden bg-cover md:min-h-screen pb-20 pt-32 md:pb-0 md:pt-0 flex justify-center items-center'>
            <div className='container mx-auto'>
                <div className='flex justify-center md:justify-end px-2 md:px-0'>
                    <div className='relative'>
                        <h3 className='text-5xl md:text-[80px]  leading-[60px] font-bold md:leading-[80px]'>3D PRODUCT</h3>
                        <h3 className='text-5xl md:text-[85px] md:leading-[85px] pb-4 text-[#8abc8b]'>MODELING</h3>
                        <div className='flex justify-center'>
                            <button className='bg-[url("/img/3d/button.png")] text-xl md:text-[25px] font-medium text-white justify-self-center py-8 px-[75px] bg-[length:100%_100%] bg-no-repeat'>GET QUOTE</button>
                        </div>
                        <img className='absolute  -top-[70px] md:-top-[50px] -right-[65px] w-[120px]' src='/img/3d/Green-Ball.png' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
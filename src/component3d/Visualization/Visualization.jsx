import React from 'react';
import Heading from '../Heading/Heading';

const Visualization = () => {
    return (
        <div className='bg-[#f4f6f0] py-8'>
            <div className='2xl:container 2xl:mx-auto'>
                <div className='flex justify-end'>
                    <img className='w-[80%] md:w-[60%]' src='/img/3d/aav.svg' />
                </div>
            </div>
            <Heading className="pt-12 pb-7 " titleClassName="w-[1500px] " title="ARCHITECTURAL VISUALIZATION"/>
        </div>
    );
};

export default Visualization;
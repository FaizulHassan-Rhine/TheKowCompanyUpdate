import React from 'react';
import Heading from '../Heading/Heading';
import VideoFullScreen from '../../component/VideoFullScreen/VideoFullScreen';

const ProductVisualization = () => {
    return (
        <div className='bg-[#f4f6f0] py-4'>
             <Heading className="pt-12 pb-7 md:pb-16" titleClassName="w-[1500px]" title="PRODUCT VISUALIZATION"/>
            {/* <div className='2xl:container 2xl:mx-auto'>
                <div className='flex justify-center'>
                    <img className='w-[80%] md:w-[40%]' src='/img/3d/ppv.svg' />
                </div>
            </div> */}
            <VideoFullScreen video={'/video/A4Tech_Headphone_Animation_3.mp4'}/>
           
        </div>
    );
};

export default ProductVisualization;
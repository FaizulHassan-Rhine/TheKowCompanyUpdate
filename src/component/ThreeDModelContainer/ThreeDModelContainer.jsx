import React, { Suspense } from 'react';
// import ViewModel from '../ViewModel/ViewModel';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ShoeModel from '../../component3d/ProductVisualization3d/Furniture/Model/ShoeModel';



const ThreeDModelContainer = () => {

    // const showImageList = [
    //     '/model_image/w-Camera_frame01 copy.png',
    //     '/model_image/w-Camera_frame02 copy.png',
    //     '/model_image/w-Camera_frame03 copy.png',
    //     '/model_image/w-Camera_frame04 copy.png',
    //     '/model_image/w-Camera_frame05 copy.png',
    //     '/model_image/w-Camera_frame06 copy.png',
    //     '/model_image/w-Camera_frame07 copy.png',
    //     '/model_image/w-Camera_frame08 copy.png',
    //     '/model_image/w-Camera_frame09 copy.png',
    //     '/model_image/w-Camera_frame10 copy.png',
    //     '/model_image/w-Camera_frame11 copy.png',
    //     '/model_image/w-Camera_frame12 copy.png',
    //     '/model_image/w-Camera_frame13 copy.png',
    //     '/model_image/w-Camera_frame14 copy.png',
    //     '/model_image/w-Camera_frame15 copy.png',
    //     '/model_image/w-Camera_frame16 copy.png',
    //     '/model_image/w-Camera_frame17 copy.png',
    //     '/model_image/w-Camera_frame18 copy.png',
    //     '/model_image/w-Camera_frame19 copy.png',
    //     '/model_image/w-Camera_frame20 copy.png',
    //     '/model_image/w-Camera_frame21 copy.png',
    //     '/model_image/w-Camera_frame22 copy.png',
    //     '/model_image/w-Camera_frame23 copy.png',
    //     '/model_image/w-Camera_frame24 copy.png',
    //     '/model_image/w-Camera_frame25 copy.png',
    //     '/model_image/w-Camera_frame26 copy.png',
    //     '/model_image/w-Camera_frame27 copy.png',
    //     '/model_image/w-Camera_frame28 copy.png',
    //     '/model_image/w-Camera_frame29 copy.png',
    //     '/model_image/w-Camera_frame30 copy.png',
    //     '/model_image/w-Camera_frame31 copy.png',
    //     '/model_image/w-Camera_frame32 copy.png',
    //     '/model_image/w-Camera_frame33 copy.png',
    //     '/model_image/w-Camera_frame34 copy.png',
    //     '/model_image/w-Camera_frame35 copy.png',
    //     '/model_image/w-Camera_frame36 copy.png',
    //     '/model_image/w-Camera_frame37 copy.png',
    //     '/model_image/w-Camera_frame38 copy.png',
    //     '/model_image/w-Camera_frame39 copy.png',
    //     '/model_image/w-Camera_frame40 copy.png',
    //     '/model_image/w-Camera_frame41 copy.png',
    //     '/model_image/w-Camera_frame42 copy.png',
    //     '/model_image/w-Camera_frame43 copy.png',
    //     '/model_image/w-Camera_frame44 copy.png',
    //     '/model_image/w-Camera_frame45 copy.png',
    //     '/model_image/w-Camera_frame46 copy.png',
    //     '/model_image/w-Camera_frame47 copy.png',
    //     '/model_image/w-Camera_frame48 copy.png',
    //     '/model_image/w-Camera_frame49 copy.png',
    //     '/model_image/w-Camera_frame50 copy.png',
    //     '/model_image/w-Camera_frame51 copy.png',
    //     '/model_image/w-Camera_frame52 copy.png',
    //     '/model_image/w-Camera_frame53 copy.png',
    //     '/model_image/w-Camera_frame54 copy.png',
    //     '/model_image/w-Camera_frame55 copy.png',
    //     '/model_image/w-Camera_frame56 copy.png',
    //     '/model_image/w-Camera_frame57 copy.png',
    //     '/model_image/w-Camera_frame58 copy.png',
    //     '/model_image/w-Camera_frame59 copy.png',
    //     '/model_image/w-Camera_frame60 copy.png',
    //     '/model_image/w-Camera_frame61 copy.png',
    //     '/model_image/w-Camera_frame62 copy.png',
    //     '/model_image/w-Camera_frame63 copy.png',
    //     '/model_image/w-Camera_frame64 copy.png',
    //     '/model_image/w-Camera_frame65 copy.png',
    //     '/model_image/w-Camera_frame66 copy.png',
    //     '/model_image/w-Camera_frame67 copy.png',
    //     '/model_image/w-Camera_frame68 copy.png',
    //     '/model_image/w-Camera_frame69 copy.png',
    //     '/model_image/w-Camera_frame70 copy.png',
    //     '/model_image/w-Camera_frame71 copy.png',
    //     '/model_image/w-Camera_frame72 copy.png',
    //     '/model_image/w-Camera_frame73 copy.png',
    //     '/model_image/w-Camera_frame74 copy.png',
    //     '/model_image/w-Camera_frame75 copy.png',
    //     '/model_image/w-Camera_frame76 copy.png',
    //     '/model_image/w-Camera_frame77 copy.png',
    //     '/model_image/w-Camera_frame78 copy.png',
    //     '/model_image/w-Camera_frame79 copy.png',
    //     '/model_image/w-Camera_frame80 copy.png',
    //     '/model_image/w-Camera_frame81 copy.png',
    //     '/model_image/w-Camera_frame82 copy.png',
    //     '/model_image/w-Camera_frame83 copy.png',
    //     '/model_image/w-Camera_frame84 copy.png',
    //     '/model_image/w-Camera_frame85 copy.png',
    //     '/model_image/w-Camera_frame86 copy.png',
    //     '/model_image/w-Camera_frame87 copy.png',
    //     '/model_image/w-Camera_frame88 copy.png',
    //     '/model_image/w-Camera_frame89 copy.png',
    //     '/model_image/w-Camera_frame90 copy.png',
    // ]


    return (
        <>
            <div className='py-10 w-full bg-gray-200 flex items-center'>
                <div className='container mx-auto'>
                    <div className='flex lg:flex-row flex-col gap-1 items-center justify-center'>
                        <div className='flex flex-col gap-5 w-full md:w-[400px]'>
                            <div>
                                <img className='w-[160px] h-[70px]' src='/img/Holosnap-Logo_H_Color.png'/>
                            </div>
                           
                            <p className='text-black text-justify'>Holosnap is an advanced AI-powered 3D asset creation tool that seamlessly converts 2D images into intricate 3D point clouds. Utilizing cutting-edge artificial intelligence algorithms, it automates the transformation of 2D images into 3D Models. Holosnap excels at analyzing 2D images to extrapolate depth information, facilitating the reconstruction of highly detailed and accurate 3D point clouds by identifying key features, textures, and contours.</p>
                            <div className='flex justify-center md:justify-start mb-5 md:mb-0'>

                        <Link to="/contact-us">
                            <button className='text-xs   md:text-sm font-semibold text-white px-6 py-2 bg-[#7C9C30] rounded-3xl'>Explore Holosnap</button>
                        </Link>

                       
                    </div>
                        </div>
                        <div className='h-[320px] md:h-[500px] w-full md:w-[570px]'>
                            <Suspense fallback={<div className='flex justify-center  items-center'>
                            {/* <span className="loader">Load&nbsp;ng</span> */}
                            <img className='md:mt-16 md:ml-2' src='/img/shoeLogo.png'/>
                            </div>}>
             
             <ShoeModel/>
            </Suspense>
                            {/* <ViewModel imgSample={'/model_image/w-Camera_frame01 copy.png'} imageList={showImageList}></ViewModel> */}
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default ThreeDModelContainer;
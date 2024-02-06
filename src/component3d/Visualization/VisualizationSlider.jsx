import React, { useState } from 'react';
import { Carousel } from 'react-div-carousel'
import 'react-div-carousel/dist/index.css'
import Heading from '../Heading/Heading';
const VisualizationSlider = () => {

    const [getShadowWidth, setShadowWidth] = useState(null);

    const sliderList = [
        {
            "image": "/img/3d/slider/IV.jpg",
            "label": "INTERIOR VISUALIZATION",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/EV.jpg",
            "label": "EXTERIOR VISUALIZATION",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/VR.jpg",
            "label": "VR RENDERING",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/IV.jpg",
            "label": "INTERIOR VISUALIZATION",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/EV.jpg",
            "label": "EXTERIOR VISUALIZATION",
            "link": "#"
        },
        {
            "image": "/img/3d/slider/VR.jpg",
            "label": "VR RENDERING",
            "link": "#"
        }

    ]

    const setShadow = () => {
        let children = document.getElementById('eccId_id_100');

        if(children){
            setShadowWidth(children.lastChild.offsetWidth);
            console.log(children.lastChild.offsetWidth)
            console.log("done : " + children);
        }else {
            setTimeout(setShadow, 1000); // Adjust the delay as needed
            console.log("not done");
        }
    }

    useState(() => {
        setShadow();
        // console.log(document.getElementById('eccId_id_100'))
        // var children = document.getElementById('eccId_id_100').children;
        // setShadowWidth(children[0].offsetWidth - 20);
    },[])

    return (
        <div className='bg-[#f1f4ed] py-6' >
            <div>
                {console.log(getShadowWidth)}
                <div className='2xl:container 2xl:mx-auto '>
                    <div className='relative w-full '>
                        <Carousel uniqueId="id_100" delay={5000}
                            item={3}
                            indicators={false}
                            responsive={[
                                {
                                    breakPoint: 641,
                                    item: 1
                                },
                                {
                                    breakPoint: 1025,
                                    item: 2,
                                }
                            ]
                            }
                        >
                            {sliderList.map((item, index) => (
                                // <div className='h-full px-2'><img src={item.image}/></div>
                                <div className='relative flex flex-col md:block mx-2 cursor-pointer'>
                                    <div>
                                        <img src={item.image} className="w-full h-full object-cover" />
                                    </div>
                                    <div className='w-full flex gap-3 absolute left-0 bottom-0 py-4 justify-center z-40'>
                                        <h5 className='text-white z-30'>{item.label}</h5>
                                        <img className='h-6 z-30' src="/img/3d/3D-View.png" />
                                        <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black via-black  opacity-50'></div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                        <div className='z-20 absolute left-[7px] top-0 h-full bg-yellow-950 opacity-40 hidden lg:block' style={{width: getShadowWidth+'px'}}></div>
                        <div className='z-20 absolute right-[7px] top-0 h-full bg-yellow-950 opacity-40 hidden lg:block'  style={{width: getShadowWidth+'px'}}></div>

                    </div>
                </div>
            </div>
            <Heading className="pt-12 pb-7" titleClassName="w-[1500px]" title="ARCHITECTURAL VISUALIZATION" />

        </div>
    );
};

export default VisualizationSlider;
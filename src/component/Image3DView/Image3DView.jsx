import React, { useRef } from 'react';

const Image3DView = ({ imageList = [] }) => {

    const viewSliderRef = useRef();

    const scrollSlide = (e) => {
        const slideWrap = viewSliderRef.current;
        const sldChild = slideWrap.getElementsByClassName("sl3d");

        // console.log(sldChild.length)
        const divWidth = slideWrap.offsetWidth;
        const mousePoint = e.nativeEvent.offsetX;
        const mousePercentage = (100 / divWidth) * mousePoint;
        const imagePercentage = 100 / imageList.length;
        const imageIndexCall = Math.floor(mousePercentage / imagePercentage);

        // console.log("imageList.length : " + sldChild.length + ' img index %: ' + imageIndexCall);

        if (imageIndexCall > -1 && imageIndexCall < sldChild.length) {
            // slideWrap.style.backgroundImage = `url('${imageList[imageIndexCall]}')`;
            for (let i = 0; i < sldChild.length; i++) {
                sldChild[i].style.opacity = '0'
            }
            sldChild[imageIndexCall].style.opacity = '1'
        }

        console.log('mousePoint ' + mousePoint + " imageIndexCall : " + imageIndexCall);
    };

    const leaveFromSld = () =>{
        const slideWrap = viewSliderRef.current;
        const sldChild = slideWrap.getElementsByClassName("sl3d");
        for (let i = 0; i < sldChild.length; i++) {
            sldChild[i].style.opacity = '0'
        }
        sldChild[0].style.opacity = '1'
    }
    
    const handleTouchMove = (event)=>{
        event.preventDefault();
        const mTouch = event.target.getBoundingClientRect()
        const offsetX = (event.touches[0].clientX - window.pageXOffset - mTouch.left) 

        
    }
    
    return (
        <>
            <div ref={viewSliderRef} onTouchMove={handleTouchMove}  onMouseMove={scrollSlide} onMouseLeave={leaveFromSld} className='w-full h-full bg-[length:100%_100%] relative'>
            {/* <div ref={viewSliderRef} onTouchMove={handleTouchMove}  onMouseMove={handleTouchMove} onMouseLeave={leaveFromSld} className='w-full h-full bg-[length:100%_100%] relative'> */}

                {imageList.map(data =>
                    <img className="sl3d absolute top-0 left-0 w-full h-full" src={data} />
                )}
                 </div>
        </>

    );
};

export default Image3DView;
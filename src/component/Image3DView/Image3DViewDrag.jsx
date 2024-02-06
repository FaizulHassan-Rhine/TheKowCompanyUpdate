import React, { useRef, useState } from 'react';

const Image3DViewDrag = ({ imageList = [] }) => {

    const viewSliderRef = useRef();
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [mouseEnterPoint, setMouseEnterPoint] = useState(null);
    const [lastPersentise, setLastPersentise] = useState(null);
    const [takeLastPersentise, setTakeLastPersentise] = useState(null);

    const mouseEnterFunction = (e) => {
        setMouseEnterPoint(() => e.nativeEvent.offsetX);
        setIsMouseDown(true);
    }

    const mouseUpFunction = (e) => {

        setTakeLastPersentise(lastPersentise);

    }
    const scrollSlide = (e) => {
        if (isMouseDown) {
            console.log(mouseEnterPoint)

            const slideWrap = viewSliderRef.current;
            const sldChild = slideWrap.getElementsByClassName("sl3d");

            const totalWidth = slideWrap.offsetWidth;
            const mousePoint = e.nativeEvent.offsetX;
            const mousePosResult = mouseEnterPoint - mousePoint;
            const mousePercentage = (100 / totalWidth) * mousePosResult;
            const imagePercentage = Math.floor(mousePercentage);
            let imageIndexCall = takeLastPersentise !== null ?
                takeLastPersentise + imagePercentage :
                imagePercentage > -1 ? imagePercentage : 100 + imagePercentage;

            imageIndexCall = imageIndexCall > 100 ?
                imageIndexCall - 100 : imageIndexCall < 0 ? 100 + imageIndexCall : imageIndexCall;
            setLastPersentise(() => imageIndexCall);

            if (imageIndexCall > -1 && imageIndexCall < sldChild.length) {
                // slideWrap.style.backgroundImage = `url('${imageList[imageIndexCall]}')`;
                for (let i = 0; i < sldChild.length; i++) {
                    sldChild[i].style.opacity = '0'
                }
                sldChild[imageIndexCall].style.opacity = '1'
            }

            console.log('mousePoint ' + mousePoint + " imagePercentage : " + imagePercentage + " imageIndexCall : " + imageIndexCall);
        }

    };


    const handleTouchMove = (e) => {
        // Extract touch information from the touch event
        const touch = e.touches[0];
        console.log(touch.clientX)
        // Use the touch position to update the slider
        if (touch) {
                console.log(mouseEnterPoint)
    
                const slideWrap = viewSliderRef.current;
                const sldChild = slideWrap.getElementsByClassName("sl3d");
    
                const totalWidth = slideWrap.offsetWidth;
                const mousePoint = touch.clientX;
                const mousePosResult = mouseEnterPoint - mousePoint;
                const mousePercentage = (100 / totalWidth) * mousePosResult;
                const imagePercentage = Math.floor(mousePercentage);
                let imageIndexCall = takeLastPersentise !== null ?
                    takeLastPersentise + imagePercentage :
                    imagePercentage > -1 ? imagePercentage : 100 + imagePercentage;
    
                imageIndexCall = imageIndexCall > 100 ?
                    imageIndexCall - 100 : imageIndexCall < 0 ? 100 + imageIndexCall : imageIndexCall;
                setLastPersentise(() => imageIndexCall);
    
                if (imageIndexCall > -1 && imageIndexCall < sldChild.length) {
                    // slideWrap.style.backgroundImage = `url('${imageList[imageIndexCall]}')`;
                    for (let i = 0; i < sldChild.length; i++) {
                        sldChild[i].style.opacity = '0'
                    }
                    sldChild[imageIndexCall].style.opacity = '1'
                }
    
                console.log('mousePoint ' + mousePoint + " imagePercentage : " + imagePercentage + " imageIndexCall : " + imageIndexCall);
        }
    };
    const touchEnterFunction = (e) => {
        const touch = e.touches[0];
        // console.log(touch.clientX)
        setMouseEnterPoint(() => touch.clientX);
        setIsMouseDown(true);
    }
    return (
        <>
            {console.log("takeLastPersentise : " + takeLastPersentise)}
            <div ref={viewSliderRef}
                onTouchStart={touchEnterFunction}
                onTouchMove={handleTouchMove}
                onTouchEnd={mouseUpFunction}
                onMouseDown={mouseEnterFunction}
                onMouseUp={(e) => { setIsMouseDown(false); mouseUpFunction(e) }}
                onMouseMove={scrollSlide}
                // onMouseLeave={leaveFromSld} 
                className='w-full h-full bg-[length:100%_100%] relative cursor-move'>
                {/* <div ref={viewSliderRef} onTouchMove={handleTouchMove}  onMouseMove={handleTouchMove} onMouseLeave={leaveFromSld} className='w-full h-full bg-[length:100%_100%] relative'> */}
                {imageList.map((data, index) =>
                        index == 0 ?
                         <img draggable="false" className="sl3d absolute top-0 left-0 w-full h-full opacity-1" src={data} />
                         :
                         <img draggable="false" className="sl3d absolute top-0 left-0 w-full h-full opacity-0" src={data} />

                )}
            </div>
        </>

    );
};

export default Image3DViewDrag;
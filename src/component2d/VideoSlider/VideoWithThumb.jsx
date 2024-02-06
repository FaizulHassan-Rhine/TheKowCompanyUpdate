import React, { useState } from 'react';
import { useRef } from 'react';

const VideoWithThumb = ({index, video, thumb, label}) => {
    const [playBool, setPlayBool] = useState(false);
    const videoRef = useRef(null);

    const playVideo = () => {
        setPlayBool(true);
        const video = videoRef.current; 
        // console.log(videoRef.current)
        // const video = document.getElementById("productVideo");
        video.play();
    }

    return (
        <div className='flex flex-col mx-1 gap-2 relative' key={index} >

        <div className="bg-black flex justify-center w-full h-full absolute top-0 opacity-0 transition-all duration-300" style={{ opacity: playBool ? 1 : 0 }}>
            <video ref={videoRef}  width="auto" height="100%" controls muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>

        <div onClick={playVideo} style={{ opacity: playBool ? 0 : 1 }} className='z-10 float-left relative h-full cursor-pointer'>
            <img className='w-full h-full object-cover' src={thumb} alt="slider" />
            <div className='absolute bottom-2 left-0 w-full flex justify-center' style={{ height: 'auto' }}>
                <div className='text-xl flex gap-3 text-white items-center'>
                    <span>{label}</span>
                    <img src='/img/video_slider/play-icon.svg' className='w-[20px] h-[20px]' alt="slider" />
                </div>
            </div>
        </div>
    </div>
    );
};

export default VideoWithThumb;
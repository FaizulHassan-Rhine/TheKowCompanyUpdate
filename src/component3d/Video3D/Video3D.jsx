import React from 'react';
import video from "../../video/production.mp4"
import VideoFullScreen from '../../component/VideoFullScreen/VideoFullScreen';

const Video3D = () => {
    return (
        <div>
            <div>

           
            <VideoFullScreen video={'/video/production.mp4'}/>
                <source src={video} type="video/mp4" />
           
            </div>
        </div>
    );
};

export default Video3D;
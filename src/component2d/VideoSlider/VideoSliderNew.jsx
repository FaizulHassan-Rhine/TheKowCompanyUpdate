import { useEffect, useRef } from "react";
import { Carousel } from "react-div-carousel";
import Heading2D from "../../component3d/Heading/Heading2D";

const VideoSliderNew = () => {
  const sliderList = [
    {
      video: "/video/video_2d/Audio_Editing_Service.mp4",
      label: "Audio Editing Service",
    },
    {
      video: "/video/video_2d/Subtitile_Addition_Service.mp4",
      label: "Subtitile Addition Service",
    },
    {
      video: "/video/video_2d/Title_Addition_Service.mp4",
      label: "Title Addition Service",
    },
    {
      video: "/video/video_2d/Video_Cropping_Service.mp4",
      label: "Video Cropping  Service",
    },
  ];

  useEffect(() => {
    const videosState = JSON.parse(localStorage.getItem("videosState")) || {};
    sliderList.forEach((item, index) => {
      const videoElement = document.getElementById(`video_${index}`);
      if (videoElement && videosState[item.video]) {
        videoElement.currentTime = videosState[item.video];
      }
    });
  }, []); // Run only once when component mounts

  const saveVideoState = (videoUrl, currentTime) => {
    const videosState = JSON.parse(localStorage.getItem("videosState")) || {};
    videosState[videoUrl] = currentTime;
    localStorage.setItem("videosState", JSON.stringify(videosState));
  };

  const handleTimeUpdate = (event, videoUrl) => {
    saveVideoState(videoUrl, event.target.currentTime);
  };

  return (
    <div className="pb-4 pt-10 ">
              <Heading2D
        className="pt-6 pb-12"
        titleClassName="w-[500px]"
        title="VIDEOS"
      />
      <div>
        <div className="2xl:container 2xl:mx-auto ">
          <div className="relative w-full ">
            <Carousel
              uniqueId="id_125"
              delay={5000}
              item={3}
              indicators={false}
              responsive={[
                {
                  breakPoint: 641,
                  item: 1,
                },
                {
                  breakPoint: 1025,
                  item: 2,
                },
              ]}
            >
              {sliderList.map((item, index) => (
                <div className=" flex flex-col md:block mx-2 " key={index}>
                  <div>
                    <video
                      id={`video_${index}`}
                      playsInline
                      autoPlay
                      muted
                      loop
                      onTimeUpdate={(event) =>
                        handleTimeUpdate(event, item.video)
                      }
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                  <div className="w-full flex gap-3 py-4 justify-center">
                    <h5 className="text-black text-lg uppercase font-medium">{item.label}</h5>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSliderNew;

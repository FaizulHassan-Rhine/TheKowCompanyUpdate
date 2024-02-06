import avatar1 from "../../images/avatarV1.png";
import avatar2 from "../../images/avatarV2.png";
import avatar3 from "../../images/avatarV3.png";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { Carousel } from "react-div-carousel";
import "react-div-carousel/dist/index.css";

const TheSquadSlide = () => {
  return (
    <div id="squad" className="pt-20 bg-white">
      <div className="container mx-auto ">
        <div className="">
          <Carousel
            uniqueId="id_114"
            delay={3000}
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
            <div className="relative flex flex-col items-center h-[450px]">
              <img
                className="z-10"
                src={avatar1}
                width={300}
                alt="trends photo"
              />
              <div className="w-[200px] flex gap-4 mt-6  z-0">
                <div className="flex flex-col items-center justify-center relative gap-3">
                  <div className="absolute -top-[78px] bg-[#666666] w-[1px] h-[80px] z-0"></div>
                  <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                    <div className="bg-kow-green p-2 rounded-full"></div>
                  </div>
                </div>

                <div className="font-semibold text-black flex flex-col">
                  <h1 className="text-xl leading-5">NAME IS HERE</h1>
                  <h1 className="text-xs">DESIGNATION</h1>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center h-[450px]">
              <img
                className="z-10"
                src={avatar2}
                width={300}
                alt="trends photo"
              />
              <div className="w-[200px] flex gap-4 mt-6  z-0">
                <div className="flex flex-col items-center justify-center relative gap-3">
                  <div className="absolute -top-[78px] bg-[#666666] w-[1px] h-[80px] z-0"></div>
                  <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                    <div className="bg-kow-green p-2 rounded-full"></div>
                  </div>
                </div>

                <div className="font-semibold text-black flex flex-col">
                  <h1 className="text-xl leading-5">NAME IS HERE</h1>
                  <h1 className="text-xs">DESIGNATION</h1>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center h-[450px]">
              <img
                className="z-10"
                src={avatar3}
                width={300}
                alt="trends photo"
              />
              <div className="w-[200px] flex gap-4 mt-6  z-0">
                <div className="flex flex-col items-center justify-center relative gap-3">
                  <div className="absolute -top-[78px] bg-[#666666] w-[1px] h-[80px] z-0"></div>
                  <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                    <div className="bg-kow-green p-2 rounded-full"></div>
                  </div>
                </div>

                <div className="font-semibold text-black flex flex-col">
                  <h1 className="text-xl leading-5">NAME IS HERE</h1>
                  <h1 className="text-xs">DESIGNATION</h1>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col items-center h-[450px]">
              <img
                className="z-10"
                src={avatar1}
                width={300}
                alt="trends photo"
              />
              <div className="w-[200px] flex gap-4 mt-6  z-0">
                <div className="flex flex-col items-center justify-center relative gap-3">
                  <div className="absolute -top-[78px] bg-[#666666] w-[1px] h-[80px] z-0"></div>
                  <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                    <div className="bg-kow-green p-2 rounded-full"></div>
                  </div>
                </div>

                <div className="font-semibold text-black flex flex-col">
                  <h1 className="text-xl leading-5">NAME IS HERE</h1>
                  <h1 className="text-xs">DESIGNATION</h1>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center h-[450px]">
              <img
                className="z-10"
                src={avatar2}
                width={300}
                alt="trends photo"
              />
              <div className="w-[200px] flex gap-4 mt-6  z-0">
                <div className="flex flex-col items-center justify-center relative gap-3">
                  <div className="absolute -top-[78px] bg-[#666666] w-[1px] h-[80px] z-0"></div>
                  <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                    <div className="bg-kow-green p-2 rounded-full"></div>
                  </div>
                </div>

                <div className="font-semibold text-black flex flex-col">
                  <h1 className="text-xl leading-5">NAME IS HERE</h1>
                  <h1 className="text-xs">DESIGNATION</h1>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center h-[450px]">
              <img
                className="z-10"
                src={avatar3}
                width={300}
                alt="trends photo"
              />
              <div className="w-[200px] flex gap-4 mt-6  z-0">
                <div className="flex flex-col items-center justify-center relative gap-3">
                  <div className="absolute -top-[78px] bg-[#666666] w-[1px] h-[80px] z-0"></div>
                  <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                    <div className="bg-kow-green p-2 rounded-full"></div>
                  </div>
                </div>

                <div className="font-semibold text-black flex flex-col">
                  <h1 className="text-xl leading-5">NAME IS HERE</h1>
                  <h1 className="text-xs">DESIGNATION</h1>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="flex justify-center gap-10 my-6">
          <h1 className="w-[400px] border-b border-[#7C9C30]"></h1>
          <h1 className=" text-[40px] -mb-4 text-center font-bold">
            THE SQUAD
          </h1>
          <h1 className="w-[400px] border-b border-[#7C9C30]"></h1>
        </div>
      </div>
    </div>
  );
};

export default TheSquadSlide;

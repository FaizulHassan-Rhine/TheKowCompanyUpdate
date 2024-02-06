import video from "../../video/production.mp4";
import order1 from "../../images/order1.png";
import order2 from "../../images/order2.png";
import order3 from "../../images/order3.png";
import order4 from "../../images/order4.png";
import order5 from "../../images/order5.png";
import order6 from "../../images/order6.png";

import arrow from "../../assets/arrow.png";
import arrow3 from "../../images/arrow3.png";
import Heading2D from "../../component3d/Heading/Heading2D";
const OrderGuide = () => {
  return (
    <div className="bg-white" id="order-guide">

      {/* <div className="relative flex flex-col justify-center items-center h-screen">
        <div className="flex justify-center w-full h-full">
          <video className="object-cover" width="100%" height="auto" playsinline autoPlay muted loop>
            <source src='/video/A4Tech_Headphone_Animation_3.mp4' type="video/mp4" />
          </video>
        </div>
      </div> */}

      <div >
      <div className="container mx-auto">
      <div className="flex justify-center w-full  transition-all duration-300">
          <video
            id="productVideo"
            width="100%"
            height="auto"
            playsinline autoPlay muted loop
          >
            <source src="/video/A4Tech_Headphone_Animation_3.mp4" type="video/mp4" />
          </video>
        </div>
      </div>


        <div className="pt-5 pb-5">
        <Heading2D
        className="pt-6 pb-7"
        titleClassName="w-[800px]"
        title="ORDER GUIDE"
      />
      </div>

        <div className="container mx-auto">
        <div className="pt-7 pb-10 ">
          <div className="grid grid-cols-2 mr-5 gap-6 sm:grid-cols-3 sm:px-16 sm:gap-12 lg:grid-cols-4 xl:grid-cols-6 lg:gap-8 lg:px-16 xl:px-4 justify-items-center">
            <div className="bg-[#B1CC40] w-[140px] h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div className="">
                <img className="w-[30px] h-[30px]" src={order1} />
              </div>
              <h1 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 1:
              </h1>
              <h1 className="text-[10px] font-semibold">Sign In</h1>

              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <img className="w-full" src={arrow} />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px] h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div className="">
                <img className="w-[30px] h-[30px]" src={order2} />
              </div>
              <h1 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 2:
              </h1>
              <h1 className="text-[10px] font-semibold">Choose your</h1>
              <h1 className="text-[10px] font-semibold">preferred subscription plan</h1>
              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <img className="w-full" src={arrow} />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px]  h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div className="">
                <img className="w-[30px] h-[30px]" src={order3} />
              </div>
              <h1 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 3:
              </h1>
              <h1 className="text-[10px] font-semibold">Go to your</h1>
              <h1 className="text-[10px] font-semibold">account to place an order</h1>
              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <img className="w-full" src={arrow} />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px] h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div className="">
                <img className="w-[30px] h-[30px]" src={order4} />
              </div>
              <h1 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 4:
              </h1>
              <h1 className="text-[10px] font-semibold">Upload your</h1>
              <h1 className="text-[10px] font-semibold">images you want us to edit</h1>
              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <img className="w-full" src={arrow} />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px]  h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div className="">
                <img className="w-[30px] h-[30px]" src={order5} />
              </div>
              <h1 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 5:
              </h1>
              <h1 className="text-[10px] font-semibold">The best photo editor</h1>
              <h1 className="text-[10px] font-semibold">process the photos for you</h1>
              <div className="absolute -top-[15px] -left-[14px] w-[190px]">
                <img className="w-full" src={arrow} />
              </div>
            </div>
            <div className="bg-[#B1CC40] w-[140px]  h-[130px] p-3 rounded-md border-2 border-white shadow-lg relative">
              <div className="">
                <img className="w-[30px] h-[30px]" src={order6} />
              </div>
              <h1 className="border-b-2 border-white w-16 pb-2 mb-1 text-white font-semibold text-[16px] pt-2">
                STEP 6:
              </h1>
              <h1 className="text-[10px] font-semibold">Download the edited photos</h1>

              <div className="absolute -top-[15px] -left-[14px] w-[164px]">
                <img className="w-full" src={arrow3} />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
     
    </div>
  );
};

export default OrderGuide;

import Heading2D from "../../component3d/Heading/Heading2D";
import { BsCircleFill } from "react-icons/bs";
const ChoosePlan = () => {
  return (
    <div id="price">
      <div className="pb-20">
        <div>
        <div className="pt-4">
        <Heading2D
        className="pt-12 pb-4"
        titleClassName="w-[1200px]"
        title="CHOOSE YOUR PLAN"
      />
          </div>
          <div className="container mx-auto pt-16">
            <div className="flex flex-col justify-center md:flex-row  gap-12 items-center ">
              <div className=" h-[400px] w-[260px] bg-white shadow-lg border border--gradient-to-t from-white via-slate-300 to-white rounded-md ">
                <div className="flex flex-col items-center h-[130px] bg-[#DEE2E2] pt-10">
                  <h5 className="text-2xl  font-semibold">BASIC</h5>
                  <div className="p-4 bg-[#DEE2E2] rounded-full z-20 relative">
                    <div className="rounded-full">
                      <div className="shadow-xl  w-[100px] h-[100px] flex flex-col bg-[#B1CC40] rounded-full border-2 border-gradient-to-l from-white via-slate-100 to-white items-center justify-center">
                        <h5 className="text-2xl text-white font-semibold">
                          $1.19
                        </h5>
                        <h5 className="text-[11px] text-white ">PER IMAGES</h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center relative top-[30px] z-10 gap-3">
                    <div className="absolute -top-[30px] bg-[#666666] w-[1px] h-[30px]"></div>
                    <div className="p-[4px] border-[1px] border-solid border-[#666666] rounded-full">
                      <div className="bg-[#B1CC40] p-1 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-start">
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                    <h1 className="text-[12px]">1-100 IMAGES/ORDER</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">10 IMAGES-FREE</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">1 MONTH FREE STORAGE</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">24/7 CUSTOMER SUPPORT</h1>
                    </div>
    
                    </div>
                    <div className="flex justify-center items-center leading-4">
                      <button className="bg-[#B1CC40] text-white font-semibold text-[12px] px-4 py-1 rounded-3xl">
                        ORDER NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[400px] w-[260px] bg-white shadow-lg border border--gradient-to-t from-white via-slate-300 to-white rounded-md">
                <div className="flex flex-col items-center h-[130px] bg-[#DEE2E2] pt-10">
                  <h5 className="text-2xl  font-semibold">STANDARD</h5>
                  <div className="p-4 bg-[#DEE2E2] rounded-full z-20 relative">
                    <div className="rounded-full">
                      <div className="shadow-xl  w-[100px] h-[100px] flex flex-col bg-[#B1CC40] rounded-full border-2 border-gradient-to-l from-white via-slate-100 to-white items-center justify-center">
                        <h5 className="text-2xl text-white font-semibold">
                          $0.99
                        </h5>
                        <h5 className="text-[11px] text-white ">PER IMAGES</h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center relative top-[30px] z-10 gap-3">
                    <div className="absolute -top-[30px] bg-[#666666] w-[1px] h-[30px]"></div>
                    <div className="p-[4px] border-[1px] border-solid border-[#666666] rounded-full">
                      <div className="bg-[#B1CC40] p-1 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-start">
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">101-500 IMAGES/ORDER</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">10 IMAGES-FREE</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">2 MONTH FREE STORAGE</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">24/7 CUSTOMER SUPPORT</h1>
                    </div>
                      
  
                    </div>
                    <div className="flex justify-center items-center leading-4">
                      <button className="bg-[#B1CC40] text-white font-semibold text-[12px] px-4 py-1 rounded-3xl">
                        ORDER NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-[400px] w-[260px] bg-white shadow-lg border border--gradient-to-t from-white via-slate-300 to-white rounded-md relative">
                <div className="flex flex-col items-center h-[130px] bg-[#DEE2E2] pt-10">
                  <h5 className="absolute top-0 left-30 bg-[#B1CC40] text-white text-[11px] px-4 py-1 rounded-b-md font-semibold">
                    POPULAR
                  </h5>
                  <h5 className="text-2xl  font-semibold">PREMIUM</h5>

                  <div className="p-4 bg-[#DEE2E2] rounded-full z-20 relative">
                    <div className="rounded-full">
                      <div className="shadow-xl  w-[100px] h-[100px] flex flex-col bg-[#B1CC40] rounded-full border-2 border-gradient-to-l from-white via-slate-100 to-white items-center justify-center">
                        <h5 className="text-[11px] text-white ">CONTACT</h5>
                        <h5 className="text-xl text-white font-semibold">US</h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center relative top-[30px] z-10 gap-3">
                    <div className="absolute -top-[30px] bg-[#666666] w-[1px] h-[30px]"></div>
                    <div className="p-[4px] border-[1px] border-solid border-[#666666] rounded-full">
                      <div className="bg-[#B1CC40] p-1 rounded-full"></div>
                    </div>
                    <div className="flex flex-col items-start">
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">1-100 IMAGES/ORDER</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">10 IMAGES-FREE</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">1 MONTH FREE STORAGE</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      < BsCircleFill className="w-2 h-2" />
                      <h1 className="text-[12px]">24/7 CUSTOMER SUPPORT</h1>
                    </div>
    
                    </div>
                    <div className="flex justify-center items-center leading-4">
                      <button className="bg-[#B1CC40] text-white font-semibold text-[12px] px-4 py-1 rounded-3xl">
                        ORDER NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;

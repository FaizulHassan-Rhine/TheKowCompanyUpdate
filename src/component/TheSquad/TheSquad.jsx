import avatar1 from "../../images/avatarV1.png";
import avatar2 from "../../images/avatarV2.png";
import avatar3 from "../../images/avatarV3.png";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
const TheSquad = () => {
  return (
    <div id="squad">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row  items-center justify-center gap-12 pt-40 pb-7 relative">
          <div className="relative">
            <img src={avatar1} width={300} alt="trends photo" />

            <div className="flex flex-col items-center justify-center relative -left-[90px] top-[30px] z-10 gap-3">
              <div className="absolute -top-[80px] bg-[#666666] w-[1px] h-[80px]"></div>
              <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                <div className="bg-kow-green p-2 rounded-full"></div>
              </div>
            </div>

            <div className="absolute left-24 font-semibold -bottom-[34px]  text-black">
              <h1 className="text-xl leading-5">NAME IS HERE</h1>
              <h1 className="text-xs">DESIGNATION</h1>
            </div>
          </div>
          <div className="relative">
            <img src={avatar2} width={295} alt="trends photo" />

            <div className="flex flex-col items-center justify-center relative -left-[90px] top-[33px] z-10 gap-3">
              <div className="absolute -top-[80px] bg-[#666666] w-[1px] h-[80px]"></div>
              <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                <div className="bg-kow-green p-2 rounded-full"></div>
              </div>
            </div>

            <div className="absolute left-24 font-semibold -bottom-[34px]  text-black">
              <h1 className="text-xl leading-5">NAME IS HERE</h1>
              <h1 className="text-xs">DESIGNATION</h1>
            </div>
          </div>
          <div className="relative">
            <img src={avatar3} width={280} alt="trends photo" />

            <div className="flex flex-col items-center justify-center relative -left-[90px] top-[30px] z-10 gap-3">
              <div className="absolute -top-[80px] bg-[#666666] w-[1px] h-[80px]"></div>
              <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                <div className="bg-kow-green p-2 rounded-full"></div>
              </div>
            </div>

            <div className="absolute left-24 font-semibold -bottom-[34px]  text-black">
              <h1 className="text-xl leading-5">NAME IS HERE</h1>
              <h1 className="text-xs">DESIGNATION</h1>
            </div>
          </div>
          <MdOutlineArrowForwardIos className="absolute right-10 bottom-24 text-3xl" />
        </div>

        {/* <div className="flex justify-center gap-10 my-10">
          <h1 className="w-[350px] border-b border-[#7C9C30]"></h1>
          <h1 className="text-[40px] -mb-4 font-bold">THE SQUAD</h1>
          <h1 className="w-[350px] border-b border-[#7C9C30]"></h1>
        </div> */}

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

export default TheSquad;

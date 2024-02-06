import logo1 from "../../assets/16,500+.png";
import logo2 from "../../assets/365-Days.png";
import logo3 from "../../assets/12-Hours.png";
import logo4 from "../../assets/10+.png";

const BottomPart = () => {
  return (
    <div className="pt-20 md:pt-4">
      <div className="container mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 sm:px-32 sm:gap-8 md:grid-cols-4 md:px-10 lg:px-20 xl:px-52 justify-items-center">
         
            <div className="bg-white w-[140px] p-6 rounded-md shadow-slate-400 shadow-md relative">
              <h1 className="border-b-2 border-[#B1CC40] pb-4 mb-1 font-semibold">16,500+</h1>
              <h1 className="text-[12px] font-semibold">Images</h1>
              <h1 className="text-[12px] font-semibold">Processed Daily</h1>
              <div className="absolute top-[37px] -left-[35px]">
                <img className="w-[60px]" src={logo1} />
              </div>
            </div>
            <div className="bg-white w-[140px] p-6 rounded-md shadow-slate-400 shadow-md relative">
              <h1 className="border-b-2 border-[#B1CC40] pb-4 mb-1 font-semibold">365 Days</h1>
              <h1 className="text-[12px] font-semibold">Dedicated</h1>
              <h1 className="text-[12px] font-semibold">Customer Support</h1>
              <div className="absolute top-[37px] -left-[35px]">
                <img className="w-[60px]" src={logo2} />
              </div>
            </div>
            <div className="bg-white w-[140px] p-6 rounded-md shadow-slate-400 shadow-md relative">
              <h1 className="border-b-2 border-[#B1CC40] pb-4 mb-1 font-semibold">12 Hours</h1>
              <h1 className="text-[12px] font-semibold">or Less</h1>
              <h1 className="text-[12px] font-semibold">Delivery Time</h1>
              <div className="absolute top-[37px] -left-[35px]">
                <img className="w-[60px]" src={logo3} />
              </div>
            </div>
            <div className="bg-white w-[140px] p-6 rounded-md shadow-slate-400 shadow-md relative">
              <h1 className="border-b-2 border-[#B1CC40] pb-4 mb-1 font-semibold">10+</h1>
              <h1 className="text-[12px] font-semibold">Free</h1>
              <h1 className="text-[12px] font-semibold">Trial Images</h1>
              <div className="absolute top-[37px] -left-[35px]">
                <img className="w-[60px]" src={logo4} />
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default BottomPart;

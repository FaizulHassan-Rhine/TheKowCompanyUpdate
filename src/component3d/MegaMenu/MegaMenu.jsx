import { Link } from "react-router-dom";

const MegaMenu = () => {
  return (
    // <div className="h-[350px] w-full bg-[#DBE5D8]">
    //   <div className="">
    //     <div className="flex justify-center">
    //       <div className="flex flex-col  pt-20 relative">
    //         <h1 className="w-[1px] h-[40px] bg-[#AF8E56] absolute top-[40px] left-[70px]"></h1>
    //         <h1 className="w-[350px] h-[1px] bg-[#AF8E56]"></h1>
    //         <div className="flex justify-between ">
    //         <div className="flex flex-col items-center w-full gap-2 absolute top-[80px] left-[-174px]">
    //             <h1 className="w-[1px] h-[40px] bg-[#AF8E56]"></h1>
    //             <div className="relative">
    //               <div className="flex    gap-3 absolute top-[-3px] left-[-9px] ">
    //                 <div className=" w-5 h-5 border flex justify-center items-center border-[#D3B270] rounded-full">
    //                   <h1 className="w-[10px] h-[10px]  rounded-full bg-[#5BB55B]"></h1>
    //                 </div>
    //                 <div>
    //                   <p className="text-[14px] w-[300px] mb-3 -mt-[4px] font-semibold">
    //                   ARCHITECTURAL VISUALIZATION
    //                   </p>

    //                   <div className="flex flex-col gap-1 text-xs">
    //                     <Link>Visualization</Link>
    //                     <Link>Exterior Visualization</Link>
    //                     <Link>VR Rendering</Link>

    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex flex-col items-center w-full gap-2 absolute top-[80px] left-[175px]">
    //             <h1 className="w-[1px] h-[40px] bg-[#D3B270]"></h1>
    //             <div className="relative">
    //               <div className="flex    gap-3 absolute top-[-3px] left-[-9px] ">
    //                 <div className=" w-5 h-5 border flex justify-center items-center border-[#D3B270] rounded-full">
    //                   <h1 className="w-[10px] h-[10px]  rounded-full bg-[#5BB55B]"></h1>
    //                 </div>
    //                 <div>
    //                   <p className="text-[14px] w-[300px] mb-3 -mt-[4px] font-semibold">
    //                     PRODUCT VISUALIZATION
    //                   </p>

    //                   <div className="flex flex-col gap-1 text-xs">
    //                     <Link>Furnitures</Link>
    //                     <Link>Fashion Accessories</Link>
    //                     <Link>Cosmetics</Link>
    //                     <Link>Packaging</Link>
    //                     <Link>Tech Equipments</Link>
    //                     <Link>Tech Accessories</Link>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="w-[350px] relative ">
        <div className="flex flex-col  pt-20 relative">
          <h1 className="w-[1px] h-[40px] bg-[#AF8E56] absolute top-[40px] left-[70px]"></h1>
          <h1 className="w-[350px] h-[1px] bg-[#AF8E56]"></h1>
          <div className="flex justify-between ">
            <div className="flex flex-col items-center w-full gap-2 absolute top-[80px] left-[-174px]">
              <h1 className="w-[1px] h-[40px] bg-[#AF8E56]"></h1>
              <div className="relative">
                <div className="flex gap-3 absolute top-[-3px] left-[-9px] ">
                  <div className=" w-5 h-5 border flex justify-center items-center border-[#D3B270] rounded-full">
                    <h1 className="w-[10px] h-[10px] rounded-full bg-[#5BB55B]"></h1>
                  </div>
                  <div className="text-left">
                    <p className="text-[14px] w-[300px] mb-3 -mt-[4px] font-semibold">
                      ARCHITECTURAL VISUALIZATION
                    </p>
                    <div className="flex flex-col gap-1 text-xs">
                      <Link className="hover:text-[#AF8E56] hover:underline">Visualization</Link>
                      <Link className="hover:text-[#AF8E56] hover:underline" to="/exterior-visualization">Exterior Visualization</Link>
                      <Link className="hover:text-[#AF8E56] hover:underline" to="/interior-visualization">Interior Visualization</Link>
                      <Link className="hover:text-[#AF8E56] hover:underline">VR Rendering</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full gap-2 absolute top-[80px] left-[175px]">
              <h1 className="w-[1px] h-[40px] bg-[#D3B270]"></h1>
              <div className="relative">
                <div className="flex    gap-3 absolute top-[-3px] left-[-9px] ">
                  <div className=" w-5 h-5 border flex justify-center items-center border-[#D3B270] rounded-full">
                    <h1 className="w-[10px] h-[10px]  rounded-full bg-[#5BB55B]"></h1>
                  </div>
                  <div className="text-left">
                    <p className="text-[14px] w-[300px] mb-3 -mt-[4px] font-semibold">
                      PRODUCT VISUALIZATION
                    </p>

                    <div className="flex flex-col gap-1 text-xs">
                      <Link className="hover:text-[#AF8E56] hover:underline" to={"/product-visualiztion-3d"}>Furnitures</Link>
                      <Link className="hover:text-[#AF8E56] hover:underline" to={"/fashion-accessories"}>Fashion Accessories</Link>
                      <Link className="hover:text-[#AF8E56] hover:underline" to={"/cosmetics"}>Cosmetics</Link>
                      <Link className="hover:text-[#AF8E56] hover:underline" to={"/packaging"}>Packaging</Link>
                      <Link className="hover:text-[#AF8E56] hover:underline" to={"/tech-equipments"}>Tech Equipments</Link>
                      <Link className="hover:text-[#AF8E56] hover:underline" to={"/tech-accessories"}>Tech Accessories</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;

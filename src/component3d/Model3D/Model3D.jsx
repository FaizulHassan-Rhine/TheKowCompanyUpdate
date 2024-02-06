import React from "react";
import Heading from "../Heading/Heading";
import ViewModel from "../../component/ViewModel/ViewModel";
import ChairModel from "../ProductVisualization3d/Furniture/Model/ChairModel";



const Model3D = () => {
  const showImageList = [
    "/model_image/w-Camera_frame01 copy.png",
    "/model_image/w-Camera_frame02 copy.png",
    "/model_image/w-Camera_frame03 copy.png",
    "/model_image/w-Camera_frame04 copy.png",
    "/model_image/w-Camera_frame05 copy.png",
    "/model_image/w-Camera_frame06 copy.png",
    "/model_image/w-Camera_frame07 copy.png",
    "/model_image/w-Camera_frame08 copy.png",
    "/model_image/w-Camera_frame09 copy.png",
    "/model_image/w-Camera_frame10 copy.png",
    "/model_image/w-Camera_frame11 copy.png",
    "/model_image/w-Camera_frame12 copy.png",
    "/model_image/w-Camera_frame13 copy.png",
    "/model_image/w-Camera_frame14 copy.png",
    "/model_image/w-Camera_frame15 copy.png",
    "/model_image/w-Camera_frame16 copy.png",
    "/model_image/w-Camera_frame17 copy.png",
    "/model_image/w-Camera_frame18 copy.png",
    "/model_image/w-Camera_frame19 copy.png",
    "/model_image/w-Camera_frame20 copy.png",
    "/model_image/w-Camera_frame21 copy.png",
    "/model_image/w-Camera_frame22 copy.png",
    "/model_image/w-Camera_frame23 copy.png",
    "/model_image/w-Camera_frame24 copy.png",
    "/model_image/w-Camera_frame25 copy.png",
    "/model_image/w-Camera_frame26 copy.png",
    "/model_image/w-Camera_frame27 copy.png",
    "/model_image/w-Camera_frame28 copy.png",
    "/model_image/w-Camera_frame29 copy.png",
    "/model_image/w-Camera_frame30 copy.png",
    "/model_image/w-Camera_frame31 copy.png",
    "/model_image/w-Camera_frame32 copy.png",
    "/model_image/w-Camera_frame33 copy.png",
    "/model_image/w-Camera_frame34 copy.png",
    "/model_image/w-Camera_frame35 copy.png",
    "/model_image/w-Camera_frame36 copy.png",
    "/model_image/w-Camera_frame37 copy.png",
    "/model_image/w-Camera_frame38 copy.png",
    "/model_image/w-Camera_frame39 copy.png",
    "/model_image/w-Camera_frame40 copy.png",
    "/model_image/w-Camera_frame41 copy.png",
    "/model_image/w-Camera_frame42 copy.png",
    "/model_image/w-Camera_frame43 copy.png",
    "/model_image/w-Camera_frame44 copy.png",
    "/model_image/w-Camera_frame45 copy.png",
    "/model_image/w-Camera_frame46 copy.png",
    "/model_image/w-Camera_frame47 copy.png",
    "/model_image/w-Camera_frame48 copy.png",
    "/model_image/w-Camera_frame49 copy.png",
    "/model_image/w-Camera_frame50 copy.png",
    "/model_image/w-Camera_frame51 copy.png",
    "/model_image/w-Camera_frame52 copy.png",
    "/model_image/w-Camera_frame53 copy.png",
    "/model_image/w-Camera_frame54 copy.png",
    "/model_image/w-Camera_frame55 copy.png",
    "/model_image/w-Camera_frame56 copy.png",
    "/model_image/w-Camera_frame57 copy.png",
    "/model_image/w-Camera_frame58 copy.png",
    "/model_image/w-Camera_frame59 copy.png",
    "/model_image/w-Camera_frame60 copy.png",
    "/model_image/w-Camera_frame61 copy.png",
    "/model_image/w-Camera_frame62 copy.png",
    "/model_image/w-Camera_frame63 copy.png",
    "/model_image/w-Camera_frame64 copy.png",
    "/model_image/w-Camera_frame65 copy.png",
    "/model_image/w-Camera_frame66 copy.png",
    "/model_image/w-Camera_frame67 copy.png",
    "/model_image/w-Camera_frame68 copy.png",
    "/model_image/w-Camera_frame69 copy.png",
    "/model_image/w-Camera_frame70 copy.png",
    "/model_image/w-Camera_frame71 copy.png",
    "/model_image/w-Camera_frame72 copy.png",
    "/model_image/w-Camera_frame73 copy.png",
    "/model_image/w-Camera_frame74 copy.png",
    "/model_image/w-Camera_frame75 copy.png",
    "/model_image/w-Camera_frame76 copy.png",
    "/model_image/w-Camera_frame77 copy.png",
    "/model_image/w-Camera_frame78 copy.png",
    "/model_image/w-Camera_frame79 copy.png",
    "/model_image/w-Camera_frame80 copy.png",
    "/model_image/w-Camera_frame81 copy.png",
    "/model_image/w-Camera_frame82 copy.png",
    "/model_image/w-Camera_frame83 copy.png",
    "/model_image/w-Camera_frame84 copy.png",
    "/model_image/w-Camera_frame85 copy.png",
    "/model_image/w-Camera_frame86 copy.png",
    "/model_image/w-Camera_frame87 copy.png",
    "/model_image/w-Camera_frame88 copy.png",
    "/model_image/w-Camera_frame89 copy.png",
    "/model_image/w-Camera_frame90 copy.png",
  ];
  return (
    <div className=" py-8">
      <div className="2xl:container 2xl:mx-auto">
        {/* <div className='flex justify-center'>
                    <img className='w-[350px]' src='/img/3d/chair.png' />
                </div> */}

        <div className="flex justify-center">
        <div className='h-[320px] md:h-[500px] w-full md:w-[570px]'>
            {/* <ViewModel
              imgSample={"/model_image/w-Camera_frame01 copy.png"}
              imageList={showImageList}
            ></ViewModel> */}
   
            <ChairModel/>
          </div>
        </div>
      </div>
      <Heading
        className="pt-12 pb-7"
        titleClassName="w-[500px]"
        title="3D MODEL"
      />
    </div>
  );
};

export default Model3D;

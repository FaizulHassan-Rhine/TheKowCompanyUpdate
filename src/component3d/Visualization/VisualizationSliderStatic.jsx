// import React, { useState } from 'react';

import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
const VisualizationSliderStatic = () => {
  return (
    <div className="bg-[#f1f4ed] py-6">
      <div className="2xl:container mx-auto">
        <div className="flex flex-col md:flex-row justify-items-center justify-center ">
          <Link to="/interior-visualization">
          <div className="  mx-2 cursor-pointer ">
            <div>
              <img
                src="/img/3d/slider/IV.jpg"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="w-full flex gap-3 pt-2 justify-center ">
              <h5 className="text-black font-semibold">
                INTERIOR VISUALIZATION
              </h5>
              <img className="h-6 z-30" src="/public/img/3d/slider/view.png" />
            </div>
          </div>
          </Link>
          <Link to="/exterior-visualization">
          <div className=" mx-2 cursor-pointer">
            <div>
              <img
                src="/img/3d/slider/EV.jpg"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="w-full flex gap-3  justify-center pt-2 ">
              <h5 className="text-black font-semibold">
                EXTERIOR VISUALIZATION
              </h5>
              <img className="h-6 z-30" src="/public/img/3d/slider/view.png" />
            </div>
          </div>
          </Link>
          <Link to="/interior-visualization">
          <div className=" mx-2 cursor-pointer">
            <div>
              <img
                src="/img/3d/slider/VR.jpg"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="w-full flex gap-3 justify-center pt-2 ">
              <h5 className="text-black font-semibold">VR RENDERING</h5>
              <img className="h-6 z-30" src="/public/img/3d/slider/view.png" />
            </div>
          </div>
          </Link>
        </div>
      </div>
      <Heading
        className="pt-12 pb-7"
        titleClassName="w-[1500px]"
        title="ARCHITECTURAL VISUALIZATION"
      />
    </div>
  );
};

export default VisualizationSliderStatic;

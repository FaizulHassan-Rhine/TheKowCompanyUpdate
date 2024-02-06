import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";

const Contact3D = () => {
  return (
    <div id="3d-contact">
      <div className="py-10">
        <Heading
          className="pt-12 pb-7"
          titleClassName="w-[1500px]"
          title="DISCUSS YOUR AMBITIONS WITH US"
        />
       <div className="container mx-auto">
       <p className=" text-center text-sm">
          Use our knowledge to get your organization ready for the future.
        </p>
        <p className=" text-center text-sm mb-6">
          Contact our experts now for an introductory meeting.
        </p>
        <div className="flex justify-center ">
         <Link to="/contact-us">
         <button className='bg-[url("/img/3d/button.png")] text-[14px] md:text-[25px] font-medium text-black justify-self-center md:py-6  px-10 py-4 md:px-[60px]   bg-[length:100%_100%] bg-no-repeat'>
          CONTACT US
          </button>
         </Link>        </div>
       </div>
      </div>
    </div>
  );
};

export default Contact3D;

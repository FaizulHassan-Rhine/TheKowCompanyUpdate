import illustrator from "../../assets/illustration.png";
import contact from "../../assets/contact-us.png";
import Heading2D from "../../component3d/Heading/Heading2D";

const LetsTalk = () => {
  return (
    <div className="pb-24" id="2d-contact">
      <div className="container mx-auto ">
        <div className="flex justify-center py-12">
          <div>
            <img className="w-[430px]" src={illustrator} />
          </div>
          <div className="animate-pulse">
            <img className="w-[120px]" src={contact} />
          </div>
        </div>
      </div>
      <div className="">
      <Heading2D
        className="pt-4 pb-4"
        titleClassName="w-[800px]"
        title="LET'S TALK"
      />
      </div>
    </div>
  );
};

export default LetsTalk;

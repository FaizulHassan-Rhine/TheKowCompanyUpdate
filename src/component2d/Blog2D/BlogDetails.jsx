import ScrolTop from "../../component/ScrolTop/ScrolTop";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navber/navbar";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";

const BlogDetails = () => {
  return (
    <>
    <ScrolTop/>
      <Navbar />
      <div>
        <div className="pb-40 overflow-hidden bg-[#DEE2E2]">
          <div className="w-full pt-24 relative">
            <div className="container mx-auto relative z-20">
              <div className="w-full h-full relative">
                <div className="w-full h-full">
                  <img
                    className="w-4/5 shadow-kow-shadow-sm"
                    src="/img/blog4.png"
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 -right-[100px] -z-10 w-[400px] h-[400px] opacity-60">
                  <img
                    src="/img/Blog-Images/circle.png"
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-[#7c9c30] shadow-kow-shadow-sm py-10 pl-10 absolute -bottom-20 right-0 flex flex-col gap-3">
                  <h1 className="text-white text-3xl pb-1 font-bold pr-10 border-b-[1px] border-[#6f8a0e]">
                    Easy Product
                    <br />
                    Photography Solutions for Small Business
                  </h1>
                  <span className="text-lg">01 JAN, 2023</span>
                </div>
              </div>
            </div>
            <div
              className="absolute top-0 left-0 w-full h-[90%] opacity-60 bg-no-repeat bg-bottom  bg-[length:130%_170%]"
              style={{
                backgroundImage: `url('/img/blog4.png')`,
              }}
            ></div>
          </div>
        </div>
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;

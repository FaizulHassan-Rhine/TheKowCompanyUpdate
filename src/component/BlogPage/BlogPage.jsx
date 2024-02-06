

import blog1 from "../../images/blog1.png"
import blog2 from "../../images/blog2.png"
import blog3 from "../../images/blog3.png"
import ScrolTop from "../ScrolTop/ScrolTop";
import Footer from "../footer/footer";
import Navbar from "../navber/navbar";
import BlogPageDetails from "./BlogPageDetails";

import "./style.css"


const BlogPage = () => {

    return (
        <>
        <ScrolTop/>
        <Navbar/>
        <div className='bg bg-white'>
            <div className='container mx-auto'>
                <div className="flex justify-center">
                    <h1 className='text-[40px] w-[610px] pt-28 font-bold border-b-2 border-[#7C9C30] '>
                        CREATIVE INDUSTRY TRENDS!
                    </h1>
                </div>

                <div className='pt-20'>
                    <h1 className='text-center text-2xl text-[#696666]'>RECENT POSTS</h1>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-3 pt-3'>
                        <div className=''>
                            <img src={blog1}
                                width={350}
                                alt='trends photo'
                            />
                            <h1 className='text-center pt-3 font-semibold'>INDUSTRY TRENDS ON 2D</h1>
                        </div>
                        <div className=''>
                            <img src={blog2}
                                width={350}
                                alt='trends photo'
                            />
                            <h1 className='text-center pt-3 font-semibold'>INDUSTRY TRENDS ON 3D</h1>

                        </div>
                        <div className=''>
                            <img src={blog3}
                                width={350}
                                alt='trends photo'
                            />

                            <h1 className='text-center pt-3 font-semibold'>INDUSTRY TRENDS ON STUDIO</h1>
                        </div>
                    </div>
                </div>

               
            </div>
            <BlogPageDetails/>
        </div>
        <Footer/>
        </>
    );
};

export default BlogPage;

import { Link } from "react-router-dom";
import blog4 from "../../images/blog4.png"
import blog5 from "../../images/blog5.png"
import blog6 from "../../images/blog6.png"
const BlogPageDetails = () => {
    return (
        <div className='bg-white pt-28'>
            <div className='bg-[#DEE2E2]'>
                <div className='container mx-auto'>
                    <div className='pt-40 pb-5 sm:pb-20 flex flex-col gap-40'>
                        <div className='flex flex-col md:flex-row justify-center items-end gap-12 px-2 md:px-0'>
                            <div>
                                <h1 className='text-[24px] leading-3 font-semibold text-end'>Easy Product</h1>
                                <h1 className='text-[24px] font-semibold text-end border-b-2 border-[#7C9C30]'>Photography Solutions for Small Business</h1>
                                <h1 className='text-[16px] font-semibold text-end pt-5'>01 JAN, 2023</h1>

                                <p className='text-xs text-justify pt-10 pl-28'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susci.......</p>

                                <div className='flex justify-end pt-4 '>
                                   <Link to="/blog-details">
                                   <button className='text-[11px]  font-semibold text-white px-8 py-1 bg-[#7C9C30] rounded-3xl'>Read More</button>
                                   </Link>
                                </div>
                            </div>
                            <div>
                                <img src={blog4}
                                    width={1200}
                                    alt='trends photo'
                                    className='shadow-xl shadow-slate-400'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col-reverse md:flex-row  justify-center items-end gap-12 px-2 md:px-0'>

                            <div>
                                <img src={blog5}
                                    width={1200}
                                    alt='trends photo'
                                    className='shadow-xl shadow-slate-400'
                                />
                            </div>
                            <div>
                                <h1 className='text-[24px] leading-3 font-semibold text-start'>Top 8</h1>
                                <h1 className='text-[24px] font-semibold text-start border-b-2 border-[#7C9C30]'>Food Photography Tips For Beginners</h1>
                                <h1 className='text-[16px] font-semibold text-start pt-5'>01 JAN, 2023</h1>

                                <p className='text-xs text-justify pt-10 pr-28'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susci.......</p>

                                <div className='flex justify-start pt-4 '>
                                <Link to="/blog-details">
                                   <button className='text-[11px]  font-semibold text-white px-8 py-1 bg-[#7C9C30] rounded-3xl'>Read More</button>
                                   </Link>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-end gap-12 px-2 md:px-0'>
                            <div>
                                <h1 className='text-[24px] leading-3 font-semibold text-end'>5 Important</h1>
                                <h1 className='text-[24px] font-semibold text-end border-b-2 border-[#7C9C30]'>Photography Tips for Beginners</h1>
                                <h1 className='text-[16px] font-semibold text-end pt-5'>01 JAN, 2023</h1>

                                <p className='text-xs text-justify pt-10 pl-28'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                    wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper susci.......</p>

                                <div className='flex justify-end pt-4 '>
                                <Link to="/blog-details">
                                   <button className='text-[11px]  font-semibold text-white px-8 py-1 bg-[#7C9C30] rounded-3xl'>Read More</button>
                                   </Link>
                                </div>
                            </div>
                            <div>
                                <img src={blog6}
                                    width={1200}
                                    alt='trends photo'
                                    className='shadow-xl shadow-slate-400'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPageDetails;



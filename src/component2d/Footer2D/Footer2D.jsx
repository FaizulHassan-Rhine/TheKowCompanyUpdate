
import logoWhite from '../../images/logo3.png'

import {
    FaFacebook,
  
    FaLinkedinIn,

    FaYoutube,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Footer2D = () => {
    return ( 
        <div>
            <div id="footer" className="bg-[#B1CC40]">
                <footer className="footer container pt-10 pb-10 mx-auto lg:justify-items-center justify-items-center  text-[#003333] gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="text-left flex flex-col justify-center">
                        <figure>
                            <img src={logoWhite}
                                width={120}
                                alt="" />
                        </figure>
                        <p className="w-40 text-black text-[11px] p-1 border-b-2  border-black  mb-4">
                            <b>The KOW Company</b> is one of the
                            leading image and video editing
                            companies for businesses all over
                            the world.
                        </p>
                        <div className="flex text-[#003333] justify-center md:justify-start gap-1 mb-2">
                            <a href="https://www.facebook.com/cutoutwiz" target="_blank" rel="noreferrer">
                                <FaFacebook className="h-4 w-4 mr-2 text-black cursor-pointer"></FaFacebook>
                            </a>
                            <a
                                href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"
                                target="_blank" rel="noreferrer"
                            >
                                <FaYoutube className="h-4 w-4 mr-2 text-black cursor-pointer"></FaYoutube>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/cutoutwiz-ltd/"
                                target="_blank" rel="noreferrer"
                            >
                                <FaLinkedinIn className="h-4 w-4 mr-2 text-black cursor-pointer"></FaLinkedinIn>
                            </a>
                            <a href="https://twitter.com/cut_wiz?s=09" target="_blank" rel="noreferrer">
                                <BsTwitterX className="h-4 w-4 mr-2 text-black cursor-pointer"></BsTwitterX>
                            </a>
                            {/* <a
                                href="https://www.instagram.com/accounts/login/"
                                target="_blank" rel="noreferrer"
                            >
                                <FaInstagram className="h-4 w-4 mr-2 text-black cursor-pointer"></FaInstagram>
                            </a> */}
                        </div>

                       {/* <div className='flex justify-center items-center bg-white  px-6 py-2 mt-2 gap-2 font-semibold rounded-3xl text-xs'>
                       <button className=" ">Language </button>
                       <BiSolidDownArrow />
                       </div> */}
                        
                    </div>

                    <div className="flex flex-col text-black lg:items-start md:-ml-16 md:items-start text-center md:text-start gap-1">
                        <span className="text-xl font-semibold text-black mb-2 ">HOME</span>
                        <HashLink to="/2d#services" className=" text-sm">SERVICES</HashLink>
                        <HashLink to="/2d#apps" className=" text-sm">APPS</HashLink>
                        <HashLink to="/2d#price" className=" text-sm">PRICE</HashLink>
                        <HashLink to="/2d#order-guide" className=" text-sm">ORDER GUIDE</HashLink>
                        <HashLink to="/2d#2d-trends" className=" text-sm">2D TRENDS</HashLink>
                        
                       

                    </div>
                  
                    <div className="flex text-black lg:items-start md:items-start md:-ml-16 flex-col text-center md:text-left gap-1  lg:-ml-0">
                        <span className="text-xl font-semibold mb-2">Support</span>
                      
                        <Link to="/privacy-policy" className=" text-sm">Privacy Policy</Link>
                        <Link to="/terms-condition" className=" text-sm">Terms & Conditions</Link>
                        <Link to="/contact-us" className="link link-hover text-sm">Contact us</Link>
                        <a className="text-sm cursor-pointer" href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" rel="noreferrer" >Sign Up</a>
                    </div>
                    <div className="text-center flex flex-col items-center  md:ml-0 lg:ml-0">
                        <span className="font-bold text-black text-xl w-full text-center  md:mb-4 md:ml-8 lg:-ml-16">
                            Our Address
                        </span>
                        <iframe
                        className='rounded-md'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
                            width="90%"
                            height="80%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                </footer>

              


            </div>
        </div>
    )
}

export default Footer2D;
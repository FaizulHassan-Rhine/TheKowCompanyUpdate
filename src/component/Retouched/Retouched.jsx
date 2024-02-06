
import ReactCompareImage from "react-compare-image";
import model from "../../images/model.png"
import model2 from "../../images/model-BR.png"
import { Link } from "react-router-dom";


const Retouched = () => {
    return (
        <div id="ai">
            <div className="container mx-auto py-4 md:pt-20 ">
                {/* md:w-[450px] sm:w-[450px] lg:w-[600px] xl:w-[500px] */}
                <div className=" justify-center items-center grid grid-cols-1 lg:grid-cols-[500px_auto] gap-6 md:gap-28">
                    <div className=" h-[670px] relative z-50 mt-5 lg:mt-0 bg-white sm:ml-20 md:ml-28  ">
                        <div className="h-full overflow-hidden ">
                            <div className="imageCompareWrap">
                            <ReactCompareImage
                                leftImage={model}
                                rightImage={model2}
                            />
                            </div>
                        </div>
                    </div>

                    <div className="px-3 lg:px-0 text-center lg:text-left ">
                        <h1 className="text-[28px] md:text-[44px]  font-bold border-b-2 leading-[50px] border-[#7C9C30]">retouched.ai</h1>
                        <div className="">
                            <p className="text-sm  text-center lg:text-justify pt-7"> Your go-to AI tool for seamlessly removing backgrounds from
                                images. Our cutting-edge solution combines the power of artificial
                                intelligence with simplicity, allowing you to remove background
                                from any picture with just a few clicks. Retouched.ai empowers you
                                to obtain PSD, JPG, or PNG files as output, offering the flexibility to
                                integrate your images seamlessly into various projects.</p>
                            <p className="text-sm  pt-5 text-center lg:text-justify">{`Say goodbye to tedious manual editing and hello to a faster, smarter
                            way to achieve professional-looking results. With Retouched.ai,
                            background removal is no longer a challenge – it's a creative
                            breeze!`}</p>
                        </div>


                        <div className='flex justify-center lg:justify-start pt-7 '>
                            <a className="cursor-pointer" href="http://retouched.ai/" target="_blank" rel="noreferrer">
                            <button className='text-xs  font-semibold text-white px-8 py-2 bg-[#7C9C30] rounded-3xl'> Remove Image Background with AI</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Retouched;
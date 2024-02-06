
import sideArt from "../../images/sideArtV1.png"
import logowhite from "../../images/logo2.png"

const WelcomePage = () => {
    return (
        <div className=''>
            <div className='bg-[#7C9C30] relative '>
                <div className="container mx-auto ">
                    <div className="flex flex-col lg:flex-row items-center py-5 lg:py-0">

                        <div className="hidden lg:block absolute bottom-0 left-0 ">
                            <div className="relative w-[250px] lg:w-[320px] xl:w-[360px]">
                                <div className="">
                                    <img
                                        src={sideArt}
                                        // width={360} 
                                        // height={360}
                                        alt="sideArt" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                    <img
                                        src={logowhite}
                                        width={200}
                                        height={150}
                                        alt="sideArt"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="block lg:hidden">
                            <img
                                className="w-[120px] pb-5"
                                src={logowhite}
                                alt="logo"
                            />
                        </div>
                        <div className=" flex justify-end lg:h-[400px] items-center">
                            <p className="w-full px-3 lg:w-3/4 lg:pl-20 lg:px-0 xl:px-20 text-white text-justify">With a relentless commitment to excellence, we have etched our name as a leading player in the world of Ecommerce
                                and Studio Image & 3D Post-Production. Our journey has been defined by creativity, precision, and an unwavering
                                passion for transforming visual concepts into captivating realities.
                                Our multifaceted expertise extends beyond the realms of traditional image editing. We boast a remarkable proficiency
                                in 3D Modeling, Rendering, and Architectural Visualization. Our team of skilled artists and designers bring
                                visions to life, crafting stunning 3D visuals and lifelike renderings that leave a lasting impression.
                                But what truly sets us apart is our cutting-edge AI integration – Retouched.ai. With this remarkable technology,
                                we have redefined the art of product image enhancement. Retouched.ai seamlessly removes backgrounds, delivering
                                product images that exude sophistication and elegance, allowing your merchandise to shine in its full glory.
                                At The KOW Company, we dont just meet your expectations; we surpass them. Our dedication to perfection and innovative
                                solutions will empower your brand to rise above the competition, turning every visual into a masterpiece.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WelcomePage;
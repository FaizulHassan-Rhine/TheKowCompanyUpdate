import cover1 from "../../../public/img/Blog-Images/coverPhoto1.png"

const Page2 = () => {
    return (
        <div className="bg-[#DEE2E2] pt-20">
            <div className="container mx-auto px-4 md:px-0">
                <div className="flex flex-col items-center gap-5 pb-8">
                    <p className="text-justify text-[15px]">Since you are considering starting your own small business, we can guess that you are a cheerful aspirant filled with passion and new ideas. While that is true, it is
                        also true that you have dreams that don’t fit into your small budget. You have considered how to source the best materials, how to create your perfect product, and
                        even found a niche of audience who you are sure will love your creative ideas. But how do you shoot the prefect product photos that highlight how awesome your
                        product is in real life? As a small business owner, you know how important product photography is to attract customers and increasing your conversion rate.</p>
                    <p className="text-justify text-[15px]">Product photos help you express your business to your potential clients. They work as one of the core mediums of communication and are necessary to build a good
                        first impression. We empathize with the budget struggles you may face regarding this and are here to provide you with easy product photography solutions for your
                        small business that will both minimize costs and get you high quality product photos at the same time.</p>
                </div>
            </div>
            <div className="relative h-[450px]">
                <div className="flex justify-center h-full relative z-20">
                    <img className="h-full" src={cover1} />
                </div>
                <div className="absolute top-0 left-0 w-full h-full filter blur-sm bg-[length:100%_120%]" style={{ backgroundImage: `url(${cover1})` }}></div>
            </div>
        </div>
    );
};

export default Page2;
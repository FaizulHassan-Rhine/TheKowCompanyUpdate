import coverPhoto2 from "../../../public/img/Blog-Images/coverPhoto2.png"

const Page6 = () => {
    return (
        <div className="bg-[#DEE2E2] pt-20">
        <div className="container mx-auto">
            <div className="flex flex-col items-center gap-5 pb-8 px-4 md:px-0">
                <h1 className="font-bold text-xl ">Rely on Budget friendly photography techniques for small business</h1>
                <p className="text-justify text-[15px]">I’m sure you have seen big brands working with famous models in expensive setups and maybe you will do the same one day but it’s better
to start small for now. Focusing on easier to conduct photo shoot techniques will help you save both time, effort and money – all of which
can be better utilized on all the other things you have on your plate. One such technique is flat lay photography. By using flat lay, you don’t
have to worry about spending money on mannequins or models and get clear, full views of your product at the same time.</p>
                
            </div>

        </div>
        <div className="relative h-[450px]">
            <div className="flex justify-center h-full relative z-20">
                <img className="h-full" src={coverPhoto2} />
            </div>
            <div className="absolute top-0 left-0 w-full h-full filter blur-sm bg-[length:100%_120%]" style={{ backgroundImage: `url(${coverPhoto2})` }}></div>
        </div>
    </div>
    );
};

export default Page6;
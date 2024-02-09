import blogImg1 from "../../../public/img/Blog-Images/blogPhoto1.png"
import blogImg2 from "../../../public/img/Blog-Images/blogPhoto2.png"
const Page4 = () => {
    return (
        <div className="bg-[#DEE2E2]">
            <div className="py-10">
                <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <div>
                        <img src={blogImg1}/>
                    </div>
                    <div>
                        <img src={blogImg2}/>
                    </div>
                </div>
                <div className="container mx-auto py-5 px-4 md:px-0">
                    <p className="text-justify text-[15px]">
                    Other than that, you can focus on lifestyle photography where you take photos with a relevant background and natural lighting. Also, pairing
up your products and shooting them together can aid your business by reducing the need for props and result in duel sales. Try to pick
a relevant setup, for example- photographing wines near a vineyard or grape garden, cars on the road, men and women’s formal wear near
a tall corporate building etc. This is likely to help the viewer better imagine the product’s use in their lives.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Page4;
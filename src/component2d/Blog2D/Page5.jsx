import blogImg3 from "../../../public/img/Blog-Images/blogPhoto3.png"
import blogImg4 from "../../../public/img/Blog-Images/blogPhoto4.png"

const Page5 = () => {
    return (
        <div className="bg-[#DEE2E2]">
        <div className="py-10">

        <div className="container flex flex-col items-center mx-auto py-5 px-4 md:px-0">
                <h1 className="font-bold text-xl mb-4">Rely on easier to find tools</h1>
                <p className="text-justify text-[15px]">
                Photo shoot require tools and equipment that you can’t escape from. Rather than focusing on getting professional and expensive tools,
it’s better to initially start with highly available and DIY solutions. There are certain tools you can make at home. Instead of a backdrop,
you can simply use a white wall or paper or simply the floor of your studio (for flat lay photography). You can easily make a DIY softbox
that will deflect light perfectly and redirect it equally in all corners of the room. Also, if you’re looking for props to use for in the photo
shoots, try to think with your creative eye and focus on getting tools that are easily available to you. For example- if you’ve a face wash
with vitamin C in it, pairing it up with sliced up oranges/lemon and plants you have at home may do the trick.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                <div>
                    <img src={blogImg3}/>
                </div>
                <div>
                    <img src={blogImg4}/>
                </div>
            </div>
           
        </div>
    </div>
    );
};

export default Page5;
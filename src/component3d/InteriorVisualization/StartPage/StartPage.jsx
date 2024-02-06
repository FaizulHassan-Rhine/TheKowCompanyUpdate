

const StartPage = () => {
    return (
        <div className='bg-[url("/img/3d/bg-2.jpg")] overflow-hidden bg-cover h-[600px] sm:min-h-screen 2xl:h-[600px] pb-10 pt-20 md:pb-0 md:pt-0 flex justify-center items-center'>
            <div className='container mx-auto'>
                <div className='flex relative justify-center px-2 md:px-0'>
                    <div className='relative z-10'>
                        <h3 className='text-5xl ml-24 md:ml-0  md:text-[95px]  leading-[60px] font-bold md:leading-[80px]'>INTERIOR</h3>
                        <h3 className='text-3xl ml-24 md:ml-0 md:text-[60px] md:leading-[85px] pb-4 text-[#8abc8b] font-bold'>VISUALIZATION</h3>
                        <img className='absolute  -top-[70px] md:-top-[50px] -right-[65px] w-[120px]' src='/img/3d/Green-Ball.png' />
                    </div>
                    <img className='absolute left-0 -top-[150px] md:-top-[170px] xl:-top-[180px] 2xl:-top-[250px] h-[330px] md:h-auto w-[420px] md:w-[550px] xl:w-[700px] 2xl:w-[800px] z-9' src='/img/3d/IV.png' />
                </div>
            </div>
        </div>
    );
};

export default StartPage;
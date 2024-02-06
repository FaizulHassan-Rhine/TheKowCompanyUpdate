
import CircleStyle from './circleStyle';

const Record = () => {
    return (
        <div className='bg-white pb-6'>
            <div className='bg-kow-green h-[200px]'></div>
            <div>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-11'>
                        <div className='grid grid-cols-1 gap-24 md:gap-0 md:grid-cols-4 justify-items-center -mt-24'>
                            <CircleStyle count="18M" title="2D Assets" />
                            <CircleStyle count="40K" title="3D Assets" />
                            <CircleStyle count="9.2K" title="Video Assets" />
                            <CircleStyle count="54K" title="Backgrounds Removed" />
                        </div>
                       
                    </div>
                </div>
                <div className='flex justify-center gap-7 pt-20 pb-10'>
                    <h1 className='w-[50px] sm:w-[400px] border-b border-[#7C9C30]'></h1>
                    <h1 className='text-[28px] md:text-[40px]  -mb-2 lg:-mb-4 font-bold'>SUCCESS RECORD</h1>
                    <h1 className='w-[50px] sm:w-[400px] border-b border-[#7C9C30]'></h1>
                </div>
            </div>
        </div>
    );
};

export default Record;
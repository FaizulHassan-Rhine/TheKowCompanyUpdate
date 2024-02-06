
import tree from "../../images/tree.png"

const BluePrint = () => {
    return (
        <div>
            <div className='flex justify-center gap-7 mb-5 '>
                        <h1 className='w-[80px] sm:w-[400px] border-b border-[#7C9C30]'></h1>
                        <h1 className='text-[28px] md:text-[40px] -mb-2 md:-mb-4 font-bold'>BLUE PRINT</h1>
                        <h1 className='w-[80px] sm:w-[400px] border-b border-[#7C9C30]'></h1>
                    </div>
              <div className='container mx-auto pt-10 pb-10 md:pb-10'>
                <div className='flex  justify-center items-center  '>
                    <div>
                        <img src={tree} 
                        width={950}
                        alt='integration photo'
                       
                        />
                    </div>
                  
                </div>

                <div className="mt-10">
                    
                    <p className='text-xs md:text-sm text-justify px-4 md:px-[30px]'>{`The KOW Company exemplifies a commitment to transparent and efficient asset management within the organization, fostering transparency for clients. Leveraging advanced technologies and robust systems, KOW ensures a seamless process that allows clients full visibility into asset management procedures. Through comprehensive reporting mechanisms and real-time tracking, clients can monitor the status, utilization, and performance of their assets.`}</p>
                   
                    
                  
                </div>

            </div>
        </div>
    );
};

export default BluePrint;
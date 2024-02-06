import React from 'react';

const Heading2D = ({className, titleClassName, title}) => {
    return (
        <div className={`w-full flex justify-center items-end ` + className}>
            {/* <h2 className="before:contents[''] before:absolute before:bg-black before:w-1/2 before:h-[1px] before:left-0">SERVICES</h2> */}
            <div className='h-[2px] w-full bg-[#B1CC40]'></div>
            <h2 className={`px-6 text-[28px] md:text-[40px] font-bold leading-0 lg:leading-7 text-center ` + titleClassName}>{title}</h2>
            <div className='h-[2px] w-full bg-[#B1CC40]'></div>
        </div>
    );
};

export default Heading2D;
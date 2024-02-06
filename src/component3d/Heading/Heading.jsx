import React from 'react';

const Heading = ({className, titleClassName, title}) => {
    return (
        <div className={`w-full flex justify-center items-end ` + className}>
            {/* <h2 className="before:contents[''] before:absolute before:bg-black before:w-1/2 before:h-[1px] before:left-0">SERVICES</h2> */}
            <div className='h-[2px] w-full bg-gradient-to-r from-amber-100 via-amber-900 to-amber-600'></div>
            <h2 className={`px-6 text-[20px] sm:text-3xl font-bold leading-0 lg:leading-4 text-center ` + titleClassName}>{title}</h2>
            <div className='h-[2px] w-full bg-gradient-to-r from-amber-600 via-amber-900 to-amber-100'></div>
        </div>
    );
};

export default Heading;
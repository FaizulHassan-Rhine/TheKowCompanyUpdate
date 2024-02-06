const CircleStyle2d = ({ count, title, recordTime }) => {
    const triangleStyles = {
        width: 0,
        height: 0,
        borderLeft: '13px solid transparent',
        borderRight: '13px solid transparent',
        borderTop: `25px solid #dee2e2`,
        padding: '0px',
        background: 'transparent',
        textAlign: 'center',
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <div className="p-5 bg-kow-gray-light rounded-full z-20 relative">
                    <div className="rounded-full">
                        <div className="shadow-kow-shadow border-[4px] border-white w-[140px] h-[140px] flex bg-kow-green-light rounded-full items-center justify-center">
                            <h5 className="text-4xl font-semibold text-white">
                                {count}
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center relative z-10 gap-2 -top-[3px]">
                    <div style={triangleStyles}></div>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="p-[7px] border-[1px] border-solid border-[#666666] rounded-full">
                            <div className="bg-kow-green-light p-2 rounded-full"></div>
                        </div>
                        <div className="text-center">
                            <h5 className="uppercase text-lg font-medium">{title}</h5>
                            <h5 className="uppercase text-lg font-bold text-kow-green-light">{recordTime}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircleStyle2d;

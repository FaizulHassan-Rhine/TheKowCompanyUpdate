
import photo3 from './image/nirob-2.png'

const ThirdSection = () => {
    return (

        <div className='container'>
            <div className='row '>
                <div className='third-section-container'>
                    <div className='third-section-text px-2 md:px-2'>
                        <p>Where to start with <a className='text-blue-700' href='https://www.linkedin.com/in/tommy-lenssen-241551a/' target='_blank' rel="noreferrer"><b>Tommy</b></a>? He has always been by our side and guided us throughout. Here is to an excellent friend than just a partner!  </p>
                        <p>He is leading one of {`Germany's`} top content services with <a className='text-blue-700' href='https://www.nureg.de/' target='_blank' rel="noreferrer"><b>Nureg GMBH</b></a>. When The KOW Company and Nureg GMBH comes together under one cohesive umbrella, {`we're`} merging top-tier services for print and digital media, cutting-edge content solution. This union promises not just to enhance our business offerings but also to revolutionize the 3D content production arena.  </p>
                        <p>Nureg GMBH’s adept team crafts impeccable 3D scans of products, and with KOW Company’s touch, these are post-processed to sheer perfection. The result? Flawless, hassle-free 3D outputs!  </p>
                        <p>For our valued clients, this means benefiting from a streamlined, holistic approach to 3D content, all while enjoying the impeccable quality and innovative solutions that only a partnership of this caliber can offer. </p>
                        <p>{`Together, we're set on charting a new course, poised to reshape the 3D content landscape for the better. Can’t wait for the future which is nothing short of spectacular!`} </p>
                    </div>
                    <div className='third-section-photo-3 px-2 md:px-0'>
                        <img src={photo3} className='max-w-[570px]' />
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ThirdSection;
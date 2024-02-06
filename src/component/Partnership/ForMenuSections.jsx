
import a from './image/Covision-Media-Logo.png'
import b from './image/Nureg-Logo.png'
import c from './image/The-KOW-Company-Logo.png'
import './style.css'

const ForMenuSections = () => {

    return (
        <div className='partnership-nav'>

            {/* <div className='banner-div-flex'> */}
            <div className='banner-logo-container'>
                <div className='banner-logo-container-image1'>
                    <img src={a} />
                </div>
                <div className='banner-logo-container-image2'>
                    <img src={b} />
                </div>
                <div className='banner-logo-container-image3'>
                    <img src={c} />
                </div>
            </div>
            {/* <div className="partnership-nav-content"> */}
            <div className="partnership-nav-content">
                United for Innovation: Our 3D Partnership
            </div>

            <div className='partnership-button'>
                <a href='/partnership' target="_blank">Explore Partnership</a>
            </div>



            {/* </div> */}
        </div>


        // </div>
    );
};


export default ForMenuSections;
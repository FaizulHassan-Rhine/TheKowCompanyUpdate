
import a from './image/1.png'
import b from './image/2.png'
import c from './image/3.png'
import './style.css'

const FirstSection = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='p-i-container'>
                    <div className='p-i-h-a light-divider'>
                        <img src={a} />
                    </div>
                    <div className='p-i-h-b light-divider'>
                        <img src={b} />
                    </div>
                    <div className='p-i-h-c'>
                        <img src={c} />
                    </div>
                </div>

                <div className='partnership-heading'>
                    <h1><span>3D VISIONARIES UNITE FOR EVOLUTION!</span></h1>
                    <div>
                        <p>Get ready to witness the future as <a className='text-blue-700' href='https://www.covisionmedialab.com/en' target='_blank' rel="noreferrer"><b>Covision Media’s</b></a> AI-powered scanners, <a className='text-blue-700' href='https://www.nureg.de/' target='_blank' rel="noreferrer"><b>Nureg GMBH’s</b></a> <br />  unrivaled expertise in content production and photography studio services along with <br /> our post-production magic has come together!<br /></p>

                        <p>From inception to flawlessness,{` we're`} pushing boundaries, breaking limits & crafting<br />the future with each polygon.</p>

                        <p>Join us, Covision Media & Nureg on this electrifying partnership journey!</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FirstSection;
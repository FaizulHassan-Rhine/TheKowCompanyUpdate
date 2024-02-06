
import { Link } from 'react-router-dom';
import './style.css'
const FourthSection = () => {
    return (
        <div className='container pb-1'>
            <div  >
                <div className='fourth-section-container'>
                    <div className='fourth-section-button'>
                        <a href='https://kowstudios.com/' target='_blank' rel="noreferrer">Visit KOW Studio</a>
                    </div>
                    <div className='fourth-section-button'>
                        <Link to='/contact-us' target="_blank">Request a Quote</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;
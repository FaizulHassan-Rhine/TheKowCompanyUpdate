
import './style.css'
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import Navbar from '../navber/navbar';
import ScrolTop from '../ScrolTop/ScrolTop';

const Partnership = () => {
    return (
        <>
        <ScrolTop/>
         <Navbar/>
            <div className='partnership-background pt-20'>
               
                <div className='container mx-auto'>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FifthSection />
                <FourthSection />
                </div>
                
            </div>
        </>
    );
};

export default Partnership;

import ScrolTop from '../../component/ScrolTop/ScrolTop';
import Navbar3D from '../Navbar3D/Navbar3D';
import Contact3D from '../Contact3D/Contact3D';
import Footer3D from '../Footer3D/Footer3D';


import StartPage from './StartPage/StartPage';
import IVPage2 from './IVPage2/IVPage2';
import IVPage3 from './IVPage3/IVPage3';
import IVPage4 from './IVPage4/IVPage4';


const InteriorVisualization = () => {
    return (
        <div>
            <ScrolTop />
            <Navbar3D />
            <StartPage/>
            <IVPage2/>
            <IVPage3/>
            <IVPage4/>
            <Contact3D />
            <Footer3D />
        </div>
    );
};

export default InteriorVisualization;
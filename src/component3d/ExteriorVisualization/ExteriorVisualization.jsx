import React from 'react';
import ScrolTop from '../../component/ScrolTop/ScrolTop';
import Navbar3D from '../Navbar3D/Navbar3D';
import Contact3D from '../Contact3D/Contact3D';
import Footer3D from '../Footer3D/Footer3D';

import EVPage2 from './EVPage2/EVPage2';
import EVPage3 from './EVPage3/EVPage3';
import EVPage4 from './EVPage4/EVPage4';

import StartPage from './StartPage/StartPage';


const ExteriorVisualization = () => {
    return (
        <div>
            <ScrolTop />
            <Navbar3D />
            <StartPage/>
            <EVPage2/>
            <EVPage3/>
            <EVPage4/>
            <Contact3D />
            <Footer3D />
        </div>
    );
};

export default ExteriorVisualization;
import React from 'react';
import StartPage from './StartPage/StartPage';
import ScrolTop from '../../component/ScrolTop/ScrolTop';
import Navbar3D from '../Navbar3D/Navbar3D';
import PackPage1 from './PackPage1/PackPage1';
import Footer3D from '../Footer3D/Footer3D';
import Contact3D from '../Contact3D/Contact3D';
const Packaging = () => {
    return (
        <div>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            <PackPage1/>
            <Contact3D/>
            <Footer3D/>

        </div>
    );
};

export default Packaging;
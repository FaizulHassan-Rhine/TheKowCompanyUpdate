import React, { Suspense } from 'react';
import ScrolTop from '../../../component/ScrolTop/ScrolTop';
import Navbar3D from '../../Navbar3D/Navbar3D';
import Footer3D from '../../Footer3D/Footer3D';
import ChairModel from './Model/ChairModel';
import StartPage from './StartPage/StartPage';
import FPage1 from './FPage1/FPage1';
import Contact3D from '../../Contact3D/Contact3D';


const Furniture = () => {
    return (
        <>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            {/* <Suspense fallback={<p>...Loading</p>}>
                <ChairModel/>
             
            </Suspense> */}
            <FPage1/>
            <Contact3D/>
            <Footer3D/>
        </>
    );
};

export default Furniture;
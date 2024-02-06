import ScrolTop from "../../component/ScrolTop/ScrolTop";
import Contact3D from "../Contact3D/Contact3D";
import Footer3D from "../Footer3D/Footer3D";
import Navbar3D from "../Navbar3D/Navbar3D";
import CPage1 from "./CPage1/CPage1";
import StartPage from "./StartPage/StartPage";


const Cosmetics = () => {
    return (
        <div>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            <CPage1/>
            <Contact3D/>
            <Footer3D/>
        </div>
    );
};

export default Cosmetics;
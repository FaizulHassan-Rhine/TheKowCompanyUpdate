import ScrolTop from "../../component/ScrolTop/ScrolTop";
import Contact3D from "../Contact3D/Contact3D";
import Footer3D from "../Footer3D/Footer3D";
import Navbar3D from "../Navbar3D/Navbar3D";
import FAPage1 from "./FAPage1/FAPage1";
import StartPage from "./StartPage/StartPage";


const FashionAccessories = () => {
    return (
        <div>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            <FAPage1/>
            <Contact3D/>
            <Footer3D/>
        </div>
    );
};

export default FashionAccessories;
import ScrolTop from "../../component/ScrolTop/ScrolTop";
import Contact3D from "../Contact3D/Contact3D";
import Footer3D from "../Footer3D/Footer3D";
import Navbar3D from "../Navbar3D/Navbar3D";
import StartPage from "./StartPage/StartPage";
import TAPage1 from "./TAPage1/TAPage1";


const TechAccessories = () => {
    return (
        <div>
            <ScrolTop/>
            <Navbar3D/>
            <StartPage/>
            <TAPage1/>
            <Contact3D/>
            <Footer3D/>
        </div>
    );
};

export default TechAccessories;
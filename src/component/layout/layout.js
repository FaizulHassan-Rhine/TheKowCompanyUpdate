import Footer from "../footer/footer";
// import Header from "../header/header";
import Navbar from "../navber/navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}
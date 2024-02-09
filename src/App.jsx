
import './App.css'

import { Route, Routes } from 'react-router-dom'
import HomeContainer from './component/HomeContainer/HomeContainer'
import BlogPage from './component/BlogPage2D/BlogPage2D'
import Partnership from './component/Partnership/Partnership'
import Container2D from './component2d/Container2D/Container2D'

import BlogDetails from './component2d/Blog2D/BlogDetails'
import Container3D from './component3d/Container3D/Container3D'
import MegaMenu from './component3d/MegaMenu/MegaMenu'
import ExteriorVisualization from './component3d/ExteriorVisualization/ExteriorVisualization'
import InteriorVisualization from './component3d/InteriorVisualization/InteriorVisualization'
import Furniture from './component3d/ProductVisualization3d/Furniture/Furniture'
import MegaNavbar from './component/MegaNavbar/MegaNavbar'
import TermsCondition from './component/TermsCondition/TermsCondition'
import PrivacyPolicy from './component/PrivacyPolicy/PrivacyPolicy'
import Contact from './component/ContactUs/ContactUs'
import Thankyou from './component/Thankyou/Thankyou'
import Packaging from './component3d/Packaging/Packaging'
import FashionAccessories from './component3d/FashionAccessories/FashionAccessories'
import TechAccessories from './component3d/TechAccessories/TechAccessories'
import TechEquipments from './component3d/TechEquipments/TechEquipments'
import Cosmetics from './component3d/Cosmetics/Cosmetics'
import TrendsDetails from './component3d/Trends3D/TrendsDetails'
import BlogPage2D from './component/BlogPage2D/BlogPage2D'
import BlogPage3D from './component/BlogPage3D/BlogPage3D'





function App() {


  return (
    <>

      <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/contact-us" element={<Contact />} />
        <Route path="/2d/industry-trends" element={<BlogPage2D />} />
        <Route path="/3d/industry-trends" element={<BlogPage3D />} />
        <Route path="/integrations" element={<Partnership />} />
        <Route path="/2d" element={<Container2D/>} />
        <Route path="/3d" element={<Container3D/>} />
        <Route path="/2d/industry-trends-details" element={<BlogDetails/>} />
        <Route path="/3d/industry-trends-details" element={<TrendsDetails/>} />
        <Route path="/exterior-visualization" element={<ExteriorVisualization/>} />
        <Route path="/interior-visualization" element={<InteriorVisualization/>} />
        <Route path="/product-visualiztion-3d" element={<Furniture/>} />
        <Route path="/packaging" element={<Packaging/>} />
        <Route path="/fashion-accessories" element={<FashionAccessories/>} />
        <Route path="/tech-accessories" element={<TechAccessories/>} />
        <Route path="/tech-equipments" element={<TechEquipments/>} />
        <Route path="/cosmetics" element={<Cosmetics/>} />
        {/* <Route path="/3dTest" element={<Test3DModel/>} /> */}
        <Route path="/terms-condition" element={<TermsCondition/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/thank-you/*" element={<Thankyou/>} />
        
      </Routes>
    </>
  )
}

export default App

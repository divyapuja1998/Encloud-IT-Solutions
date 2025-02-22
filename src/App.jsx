import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer'
import BusinessContinuity from './Component/businessContinuity.jsx';
import CloudSolutions from './Component/CloudSolutions.jsx';
import SecuritySolutions from './Component/SecuritySolutions.jsx';
import Careers from './Component/Careers.jsx';
import About from './Component/About.jsx';
import SoftwareSolutions from './Component/SoftwareSolutions.jsx';
import OurServices from './Component/OurServices.jsx';
import InfrastructureSolutions from './Component/InfrastructureSolutions.jsx';
import Partnership from './Component/Partnership.jsx';
import Customers from './Component/Customers.jsx';
import ContactPage from './Component/ContactPage.jsx';
import ScrollToTop from './Component/ScrollToTop.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/infrastructureSolutions" element={<InfrastructureSolutions/>}></Route>
        <Route path="/businessContinuity" element={<BusinessContinuity/>}></Route>
        <Route path="/cloudSolutions" element={<CloudSolutions/>}></Route>
        <Route path="/softwareSolutions" element={<SoftwareSolutions/>}></Route>
        <Route path="/securitySolutions" element={<SecuritySolutions/>}></Route>
        <Route path="/ourServices" element={<OurServices/>}></Route>
        <Route path="/partnership" element={<Partnership/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/career" element={<Careers/>}></Route>
        <Route path="/contactPage" element={<ContactPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

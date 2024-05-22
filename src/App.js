
import {Route, BrowserRouter as Router, Routes,} from 'react-router-dom';
import './App.css';
import './Pages/ImageSlider.css'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Enquiry from './Pages/Enquiry';
import Contactus from './Pages/Contactus';
import Marketing from './Pages/Marketing';
import Development from './Pages/Development';
import Design from './Pages/Design';
import Consulting from './Pages/Consulting';
import Portfolio from './Pages/Portfolio';
import HireUsForm from './Pages/HireusForm';




function App() {
  
    
  return (
    <Router>
      
      
      <Navbar/>
      
     
  
   
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sevices" element={<Services/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/enquiry" element={<Enquiry/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/hireus" element={<HireUsForm/>}/>
        <Route path="/marketing" element={<Marketing/>}/>
        <Route path="/development" element={<Development/>}/>
        <Route path="/design" element={<Design/>}/>
        <Route path="/consulting" element={<Consulting/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>

        </Routes>
    </Router>
  )
}

export default App;

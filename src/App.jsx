import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contact from './Components/ContactForm';

import './css/App.css';


function App() {
  return (
    <Router>   
      
      <Navbar />
        
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/aboutMe" element={<AboutMe />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
    
    
    </Router>
 
  );

}

export default App;

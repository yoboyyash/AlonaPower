import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Navbar from './Components/Navbar.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/ContactForm.jsx';

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

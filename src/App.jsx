import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home.jsx';
import AboutMe from './components/AboutMe.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/ContactForm.jsx';

import './css/App.css';


function App() {
  return (
    <Router basename="/AlonaPower">   
      
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

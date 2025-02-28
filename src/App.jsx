import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';

import './css/App.css';


function App() {
  return (
    <Router>   
      
      <Navbar />
        
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about-me" element={<AboutMe />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<ContactForm />} />

        </Routes>
    
    
    </Router>
 
  );

}

export default App;

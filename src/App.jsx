import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Footer from "./components/Footer";

import './css/App.css';

function App() {
    
    return (
        <Router>   
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutMe" element={<AboutMe />} />
                <Route path="/contact" element={<ContactForm />} />
            </Routes>

      
            <Footer />

        </Router>
    );
}

export default App;

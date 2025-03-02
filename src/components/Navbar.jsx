import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/aboutMe" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full md:w-2/3 fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-b-2xl text-black
        ${isScrolled ? "py-2 shadow-md" : "py-4"} 
        ${darkMode ? "bg-gray-900/75 text-white " : "bg-gradient-to-r from-pink-400/30 via-purple-500/30 to-blue-400/40 "}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo with Link to Home */}
        <Link to="/">
          <h1 className={`font-extrabold text-yellow-300 px-3 py-1 rounded-lg hover:bg-pink-500/70 hover:scale-110 transition-transform duration-300 ${isScrolled ? 'text-2xl' : 'text-4xl'}`}> 
            Alona World 
          </h1>
        </Link>

        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-6 text-xl text-center font-serif">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-2 rounded-lg hover:bg-pink-500/70 hover:scale-110 transition-transform duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right-Aligned Icons (ALWAYS VISIBLE) */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle (ALWAYS IN NAVBAR) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-transform duration-300 hover:scale-110"
          >
            {darkMode ? (
              <Sun size={24} className="text-yellow-500" />
            ) : (
              <Moon size={24} className="text-white" /> 
            )}
          </button>

          {/* Mobile Menu Button (Hidden on Desktop) */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full md:hidden bg-white/5 p-4 rounded-2xl shadow-md text-center transition-transform duration-300 
          ${isOpen ? "block scale-100" : "hidden scale-95"}
          ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block text-lg py-3 px-4 rounded font-serif hover:bg-pink-500 hover:scale-110 transition-transform duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

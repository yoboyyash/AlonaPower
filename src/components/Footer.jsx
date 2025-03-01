import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(document.documentElement.classList.contains("dark"));
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <div className="flex items-center mb-6 text-yellow-300 cursor-pointer">
          <span className="text-xs mx-1 mt-6">Y</span>
          <FaHeart className="text-red-500 outline-2 outline-black py-1 text-4xl mx-1" />
          <span className="text-xs mx-1 mt-6">B</span>
        </div>
      ) : (
        <footer
          className={`w-full max-w-screen-md px-4 py-3 text-center font-semibold transition-all duration-300 rounded-t-4xl 
            ${darkMode ? "bg-gray-900/30 text-slate-400" : "bg-gradient-to-r from-pink-400/20 via-purple-500/25 to-blue-400/20 text-slate-400"}`}
        >
          <div className="text-sm">
            Powered by: <span className="text-yellow-300 text-2xl font-bold">Yash</span>
          </div>
          <div className="mt-1 text-pink-500 italic text-lg">
            from me to you <span className="text-red-400 font-bold">&lt;3</span>
          </div>
        </footer>
      )}
    </div>
  );
}

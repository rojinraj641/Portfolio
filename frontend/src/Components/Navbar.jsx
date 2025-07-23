import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // icon library - make sure you have `lucide-react` installed

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = ["Home", "About Me", "Skills", "Contact Me"];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#0f0c29]/80 backdrop-blur-md px-10 sm:px-6 md:px-12 lg:px-20 pt-4">
      <div
        className={`flex items-center justify-between transition-all duration-700 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Logo or Name */}
        <div className="text-white/90 text-xl font-bold tracking-wide">
          Rojin Raj
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 py-2">
          {navItems.map((text, i) => (
            <a
              key={i}
              href={`#${text.toLowerCase().replace(/\s/g, "")}`}
              className="relative group text-white font-medium tracking-wide text-base transition-transform duration-300 hover:scale-105"
            >
              <span className="block bg-white bg-clip-text text-transparent">
                {text}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white/10 rounded-xl px-4 py-4 shadow-lg border border-white/20">
          {navItems.map((text, i) => (
            <a
              key={i}
              href={`#${text.toLowerCase().replace(/\s/g, "")}`}
              className="text-white text-base font-medium tracking-wide transition duration-300 hover:text-pink-400"
              onClick={() => setMenuOpen(false)}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


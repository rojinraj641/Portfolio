import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = ["Home", "About Me", "Education","Project", "Skills", "Get in Touch"];

  useEffect(() => {
    setMounted(true);
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        let mostVisibleSection = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection.id);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => sectionObserver.observe(section));

    const handleScroll = () => {
      if (window.scrollY > 10) {
        document.getElementById("navbar").classList.add("bg-transparent");
        document.getElementById("navbar").classList.remove("bg-[#0f0c29]");
      } else {
        document.getElementById("navbar").classList.add("bg-[#0f0c29]");
        document.getElementById("navbar").classList.remove("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => sectionObserver.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      id="navbar"
      className="w-full sticky top-0 z-50 bg-[#0f0c29] backdrop-blur-md p-6 pt-7 md:px-12 lg:px-20 pt-4 transition-colors duration-100">
      <div
        className={`flex items-center justify-between transition-all duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        {/* Logo */}
        <div className="text-white/90 text-xl font-bold tracking-wide">Rojin Raj</div>

        {/* Desktop Centered Menu */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 bg-white/10 px-6 py-2 rounded-full shadow-md border border-white/20">
          {navItems.map((text, i) => {
            const id = text.toLowerCase().replace(/\s/g, "");
            const isActive = activeSection === id;

            return (
              <a
                key={i}
                href={`#${id}`}
                className="relative group text-white font-medium tracking-wide text-base transition-all duration-300"
              >
                <span className="block bg-white/50 bg-clip-text text-transparent">
                  {text}
                </span>
                <span
                  className={`
                    absolute left-0 -bottom-1 w-full h-[2px] bg-white 
                    transition-transform duration-300 origin-left rounded
                    ${isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                    }
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-white/10 rounded-xl px-4 py-4 shadow-lg border border-white/20">
          {navItems.map((text, i) => {
            const id = text.toLowerCase().replace(/\s/g, "");
            const isActive = activeSection === id;

            return (
              <a
                key={i}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-white text-base font-medium tracking-wide transition duration-300 hover:text-pink-400 ${isActive ? "underline underline-offset-4" : ""
                  }`}
              >
                {text}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

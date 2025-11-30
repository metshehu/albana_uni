import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drejtimeOpen, setDrejtimeOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDrejtime = () => setDrejtimeOpen(!drejtimeOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Drejtimet",
      dropdown: [
        "Makineri",
        "Prodhim",
        "Ndërtimtari",
        "Mekatronikë",
        "Energjetikë",
        "Arkitekturë",
        "Ndërtimtari",
        "Gjeologji",
        "Miniera",
        "Laborant i Kimisë",
        "Teknologji Informacioni",
        "Zhvillues Aplikacionesh",
        "Telekomunikacion",
      ],
    },
    { name: "Staff", path: "/staff" },

    { name: "moodle", path: "/moodle" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/uniphoto.jpeg"
              alt="University Logo"
              className="h-20 w-auto object-contain"
            />
            <span className="text-white font-bold text-xl hidden sm:block">
              Arkitekt Sinani
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) =>
              link.dropdown ? (
                <div
                  key={i}
                  className="relative group"
                  onMouseEnter={() => setDrejtimeOpen(true)}
                  onMouseLeave={() => setDrejtimeOpen(false)}
                >
                  <button
                    onClick={toggleDrejtime}
                    className="flex items-center text-gray-300 hover:text-blue-400 font-medium transition-colors"
                  >
                    {link.name}
                    <ChevronDown
                      size={18}
                      className="ml-1 transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  {/* Dropdown menu */}
                  {drejtimeOpen && (
                    <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-lg py-2 z-50">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/drejtime/${item.toLowerCase().replaceAll(" ", "-")}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 text-sm"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  to={link.path}
                  className="text-gray-300 hover:text-blue-400 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700 shadow-md">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link, i) =>
              link.dropdown ? (
                <div key={i}>
                  <button
                    onClick={toggleDrejtime}
                    className="flex items-center justify-between w-full text-gray-200 hover:text-blue-400 font-medium transition-colors"
                  >
                    {link.name}
                    <ChevronDown
                      size={18}
                      className={`ml-2 transition-transform duration-200 ${
                        drejtimeOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {drejtimeOpen && (
                    <div className="pl-4 mt-2 space-y-1">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          to={`/drejtime/${item.toLowerCase().replaceAll(" ", "-")}`}
                          onClick={() => setMenuOpen(false)}
                          className="block text-gray-300 hover:text-blue-400 text-sm py-1"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={i}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-200 hover:text-blue-400 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
}


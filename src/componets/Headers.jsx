import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drejtimeOpen, setDrejtimeOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveGroup(null);
    setDrejtimeOpen(false);
  };

  const handleGroupClick = (idx) => setActiveGroup(idx);

  const groups = [
    {
      title: "Makineri, Prodhim dhe Ndërtimtari",
      items: [
        "Automekanik",
        "Dirigjimi kompjuterik i makinave",
        "Instalues i ujësjellësit, ngrohjes dhe klimatizimit",
        "Mekatronikë",
        "Trafik rrugor",
        "Teknik i turbinave të erës",
        "Instalues elektrik",
        "Arkitekturë",
        "Ndërtimtari",
        "Gjeologji",
        "Miniera",
        "Përpunues i metaleve",
        "Laborant i kimisë",
      ],
    },
    {
      title: "Teknologji e Informacionit dhe Komunikimit (TIK)",
      items: ["Teknik i sistemeve të TI-së", "Telekomunikacion"],
    },
    {
      title: "Agrokulturë, Pylltari, Peshkatari dhe Veterinari",
      items: ["Përpunues i ushqimit"],
    },
  ];

  return (
    <header className="bg-gray-900 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/uniphoto.jpeg" className="h-20" />
            <span className="text-white font-bold text-xl hidden sm:block">
              Arkitekt Sinani
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-blue-400">Ballina</Link>
            <Link to="/historiku" className="text-gray-300 hover:text-blue-400">Historiku</Link>

            {/* DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDrejtimeOpen(true)}
              onMouseLeave={() => {
                setDrejtimeOpen(false);
                setActiveGroup(null);
              }}
            >
              <button className="flex items-center text-gray-300 hover:text-blue-400">
                Drejtimet
                <ChevronDown size={18} className="ml-1" />
              </button>

              {drejtimeOpen && (
                <div className="absolute left-0 mt-2 bg-white rounded-lg p-4 shadow-lg w-[350px]">

                  {/* LEVEL 1 */}
                  {activeGroup === null &&
                    groups.map((g, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleGroupClick(idx)}
                        className="block w-full text-left font-semibold text-gray-900 hover:bg-blue-100 px-2 py-2 rounded"
                      >
                        {idx + 1}. {g.title}
                      </button>
                    ))}

                  {/* LEVEL 2 */}
                  {activeGroup !== null && (
                    <>
                      <button
                        onClick={() => setActiveGroup(null)}
                        className="text-blue-600 font-bold text-sm mb-2"
                      >
                        ← Kthehu
                      </button>

                      {groups[activeGroup].items.map((item, index) => (
                        <Link
                          key={index}
                          to={`/drejtime/${item.toLowerCase().replaceAll(" ", "-")}`}
                          className="block text-gray-800 hover:bg-blue-100 px-2 py-1 rounded"
                        >
                          {item}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>

            <Link to="/staff" className="text-gray-300 hover:text-blue-400">Stafi</Link>
            <Link to="/moodle" className="text-gray-300 hover:text-blue-400">Moodle</Link>
            <Link to="/reth-nesh" className="text-gray-300 hover:text-blue-400">Rreth Nesh</Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button className="md:hidden text-gray-300" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700 px-4 py-3 space-y-3">

          {/* PAGE 1 */}
          {!drejtimeOpen && (
            <>
              <Link to="/" onClick={toggleMenu} className="block text-white py-2">Ballina</Link>

              <Link to="/historiku" onClick={toggleMenu} className="block text-white py-2">
                Historiku
              </Link>

              <button
                onClick={() => setDrejtimeOpen(true)}
                className="block w-full text-left text-white text-lg py-2"
              >
                Drejtimet
              </button>

              <Link to="/staff" onClick={toggleMenu} className="block text-white py-2">Stafi</Link>
              <Link to="/moodle" onClick={toggleMenu} className="block text-white py-2">Moodle</Link>
              <Link to="/reth-nesh" onClick={toggleMenu} className="block text-white py-2">Rreth Nesh</Link>
            </>
          )}

          {/* PAGE 2: Show groups */}
          {drejtimeOpen && activeGroup === null && (
            <>
              <button
                onClick={() => setDrejtimeOpen(false)}
                className="text-blue-400 font-semibold"
              >
                ← Kthehu
              </button>

              {groups.map((g, idx) => (
                <button
                  key={idx}
                  onClick={() => handleGroupClick(idx)}
                  className="block w-full text-left text-white text-lg py-2"
                >
                  {idx + 1}. {g.title}
                </button>
              ))}
            </>
          )}

          {/* PAGE 3: Show items */}
          {activeGroup !== null && (
            <>
              <button
                onClick={() => setActiveGroup(null)}
                className="text-blue-400 font-semibold"
              >
                ← Kthehu
              </button>

              {groups[activeGroup].items.map((item, index) => (
                <Link
                  key={index}
                  to={`/drejtime/${item.toLowerCase().replaceAll(" ", "-")}`}
                  onClick={toggleMenu}
                  className="block text-gray-300 py-1"
                >
                  {item}
                </Link>
              ))}
            </>
          )}
        </nav>
      )}
    </header>
  );
}


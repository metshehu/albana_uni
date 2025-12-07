import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Drejtime from "./pages/Drejtime";
import Staff from "./pages/Staff";
import Historiku from "./pages/Historiku";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drejtime/:sectionId?" element={<Drejtime />} />

        <Route path="/Reth Nesh" element={<About />} />
        <Route path="/Historiku" element={<Historiku  />} />
        <Route path="/staff" element={<Staff/>} />
      </Routes>
    </Router>
  );
}

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Drejtime from "./pages/Drejtime";
import Staff from "./pages/Staff";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drejtime/:sectionId?" element={<Drejtime />} />

        <Route path="/about" element={<About />} />
        <Route path="/staff" element={<Staff/>} />
      </Routes>
    </Router>
  );
}

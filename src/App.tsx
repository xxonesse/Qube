import { Routes, Route } from "react-router-dom";
import '../src/App.css'
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Connect from "./pages/Connect"

export default function App() {
  return (
    <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="connect" element={<Connect />} />
        </Routes>
    </div>
  );
};
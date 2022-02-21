import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Bundles from "../pages/bundles/Bundles";
import Tours from "../pages/Tours/Tours";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/paquetes" element={<Bundles />} />
      <Route path="/tours" element={<Tours />} />
    </Routes>
  );
}

export default Router;

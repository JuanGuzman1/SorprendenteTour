import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Bundles from "../pages/bundles/Bundles";
import Tours from "../pages/Tours/Tours";
import Xilitla from "../pages/bundles/Xilitla/Xilitla";
import CiudadValles from "../pages/bundles/CiudadValles/CiudadValles";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/paquetes" element={<Bundles />} />
      <Route path="/paquetes/xilitla" element={<Xilitla />} />
      <Route path="/paquetes/ciudad-valles" element={<CiudadValles />} />
      <Route path="/tours" element={<Tours />} />
    </Routes>
  );
}

export default Router;

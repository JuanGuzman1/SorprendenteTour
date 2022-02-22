import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Bundles from "../pages/bundles/Bundles";
import Tours from "../pages/Tours/Tours";
import Xilitla from "../pages/bundles/Xilitla/Xilitla";
import CiudadValles from "../pages/bundles/CiudadValles/CiudadValles";
import PlaceTours from "../pages/Tours/PlaceTours/PlaceTours";
import Zacahuil from "../pages/Tours/Tours/Zacahuil/Zacahuil";
import Bocoles from "../pages/Tours/Tours/Bocoles/Bocoles";
import Enchiladas from "../pages/Tours/Tours/Enchiladas/Enchiladas";
import Acamayas from "../pages/Tours/Tours/Acamayas/Acamayas";
import Mojarras from "../pages/Tours/Tours/Mojarras/Mojarras";
import Tours4X4 from "../pages/Tours4x4/Tours4X4";
import Trinidad from "../pages/Tours4x4/Tours/Trinidad/Trinidad";
import Surrealista from "../pages/Tours4x4/Tours/Surrealista/Surrealista";
import Nacimiento from "../pages/Tours4x4/Tours/Nacimiento/Nacimiento";
import Miradores from "../pages/Tours4x4/Tours/Miradores/Miradores";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      {/* paquetes */}
      <Route path="/paquetes" element={<Bundles />} />
      <Route path="/paquetes/xilitla" element={<Xilitla />} />
      <Route path="/paquetes/ciudad-valles" element={<CiudadValles />} />
      {/* tours */}
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:place" element={<PlaceTours />} />
      <Route path="/tours/:place/zacahuil" element={<Zacahuil />} />
      <Route path="/tours/:place/bocoles" element={<Bocoles />} />
      <Route path="/tours/:place/enchiladas" element={<Enchiladas />} />
      <Route path="/tours/:place/acamayas" element={<Acamayas />} />
      <Route path="/tours/:place/mojarras" element={<Mojarras />} />
      {/* tours 4x4 */}
      <Route path="/tours4x4" element={<Tours4X4 />} />
      <Route path="/tours4x4/trinidad" element={<Trinidad />} />
      <Route path="/tours4x4/surrealista" element={<Surrealista />} />
      <Route path="/tours4x4/nacimiento" element={<Nacimiento />} />
      <Route path="/tours4x4/miradores" element={<Miradores />} />
    </Routes>
  );
}

export default Router;

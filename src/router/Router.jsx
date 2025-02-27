import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Bundles from "../pages/Bundles/Bundles";
import Tours from "../pages/Tours/Tours";
import Xilitla from "../pages/Bundles/Xilitla/Xilitla";
import CiudadValles from "../pages/Bundles/CiudadValles/CiudadValles";
import PlaceTours from "../pages/Tours/PlaceTours/PlaceTours";
import Zacahuil from "../pages/Tours/Tours/Zacahuil/Zacahuil";
import Bocoles from "../pages/Tours/Tours/Bocoles/Bocoles";
import Enchiladas from "../pages/Tours/Tours/Enchiladas/Enchiladas";
import Acamayas from "../pages/Tours/Tours/Acamayas/Acamayas";
import Mojarras from "../pages/Tours/Tours/Mojarras/Mojarras";
import Marranada from "../pages/Tours/Tours/Marranada/Marranada";
import Arqueologico from "../pages/Tours/Tours/Arqueologico/Arqueologico";
import Tours4X4 from "../pages/Tours4x4/Tours4X4";
import Trinidad from "../pages/Tours4x4/Tours/Trinidad/Trinidad";
import Surrealista from "../pages/Tours4x4/Tours/Surrealista/Surrealista";
import Nacimiento from "../pages/Tours4x4/Tours/Nacimiento/Nacimiento";
import Miradores from "../pages/Tours4x4/Tours/Miradores/Miradores";
import Nanacatli from "../pages/Tours4x4/Tours/Nanacatli/Nanacatli";
import Contact from "../pages/Contact/Contact";
import Terms from "../pages/Terms/Terms";
import Gallery from "../pages/Gallery/Gallery";
import HotelsGallery from "../pages/Gallery/Hotels/HotelsGallery";
import ToursGallery from "../pages/Gallery/Tours/ToursGallery";
import XilitlaHotels from "../pages/Gallery/Hotels/Xilitla/XilitlaHotels";
import CiudadVallesHotels from "../pages/Gallery/Hotels/CiudadValles/CiudadVallesHotels";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import ConfirmationCode from "../pages/Login/ConfirmationCode";
import Reservations from "../pages/Reservations/Reservations";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<About />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/terminos-y-condiciones" element={<Terms />} />
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/checkout" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmar-registro" element={<ConfirmationCode />} />
      <Route path="/reservaciones" element={<Reservations />} />

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
      <Route path="/tours/:place/marranada" element={<Marranada />} />
      <Route path="/tours/:place/arqueologico" element={<Arqueologico />} />

      {/* tours 4x4 */}
      <Route path="/tours4x4" element={<Tours4X4 />} />
      <Route path="/tours4x4/trinidad" element={<Trinidad />} />
      <Route path="/tours4x4/surrealista" element={<Surrealista />} />
      <Route path="/tours4x4/nacimiento" element={<Nacimiento />} />
      <Route path="/tours4x4/miradores" element={<Miradores />} />
      <Route path="/tours4x4/nanacatli" element={<Nanacatli />} />

      {/* gallery */}
      <Route path="/galeria" element={<Gallery />} />
      <Route path="/galeria/tours" element={<ToursGallery />} />
      <Route path="/galeria/hoteles" element={<HotelsGallery />} />
      <Route path="/galeria/hoteles/xilitla" element={<XilitlaHotels />} />
      <Route
        path="/galeria/hoteles/ciudad-valles"
        element={<CiudadVallesHotels />}
      />
    </Routes>
  );
}

export default Router;

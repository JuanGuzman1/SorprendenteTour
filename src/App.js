import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;

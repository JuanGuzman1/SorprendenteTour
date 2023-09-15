import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import Router from "./router/Router";

function App() {
  return (
    <div className="w-full">
      <AuthContextProvider>
        <CartContextProvider>
          <Navbar />
          <Router />
          <Whatsapp />
          <Footer />
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

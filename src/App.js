import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import AuthContextProvider from "./context/AuthContext";
import CartContextProvider from "./context/CartContext";
import Router from "./router/Router";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { Toaster } from "react-hot-toast";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="w-full">
      <AuthContextProvider>
        <PayPalScriptProvider
          options={{
            clientId:
              "AbT5vOVLxPoex5gVFpp7tTPmweWcfavRREdao8snyvL2YKobgedBJeCAMTvPoAVqI2hQVEqaDPdorM_H",
            currency: "MXN",
            locale: "es_MX",
          }}
        >
          <CartContextProvider>
            <Navbar />
            <Toaster />
            <Router />
            <Whatsapp />
            <Footer />
          </CartContextProvider>
        </PayPalScriptProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;

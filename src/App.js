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
              "ATRRVB5ZCLEylxvFMplD6ChKfjMQpiIvr1ELVssZz2KjMgtk53ZgU7nzw8HFGL179xOsu-N0l52E7Tw3",
            currency: "MXN",
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

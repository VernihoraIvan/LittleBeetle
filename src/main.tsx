import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>
);

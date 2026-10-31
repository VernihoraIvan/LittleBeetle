import { Outlet } from "react-router-dom";
import { CheckoutShell } from "@/components/CheckoutShared";

const steps = [
  { path: "contribution", label: "Your cart" },
  { path: "details", label: "Your details" },
  { path: "shipment", label: "Shipment" },
  { path: "payment", label: "Payment" },
];

const Checkout = () => (
  <CheckoutShell steps={steps}>
    <Outlet />
  </CheckoutShell>
);

export default Checkout;

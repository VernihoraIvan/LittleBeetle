import { Outlet } from "react-router-dom";
import { CheckoutShell } from "@/components/CheckoutShared";

const steps = [
  { path: "contribution", label: "Your donation" },
  { path: "details", label: "Your details" },
  { path: "payment", label: "Payment" },
];

const CheckoutWO = () => (
  <CheckoutShell steps={steps}>
    <Outlet />
  </CheckoutShell>
);

export default CheckoutWO;

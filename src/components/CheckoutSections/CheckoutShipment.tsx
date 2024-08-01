import { useShipment } from "@/zustand/shipmentStore";

const CheckoutShipment = () => {
  const shipmentStore = useShipment((state) => state.shipment);
  console.log(shipmentStore);
  return <section className="py-10 bg-hovYellow">CheckoutShipment</section>;
};

export default CheckoutShipment;

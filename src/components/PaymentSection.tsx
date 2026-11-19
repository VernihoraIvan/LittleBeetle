import { useState } from "react";
import { toast } from "react-toastify";
import SummaryUniversal from "./SummaryUniversal";
import { useCart } from "@/zustand/productStore";
import { useShipment } from "@/zustand/shipmentStore";
import { proceedToPayment } from "@/api/connection";
import { useOrderLines } from "@/zustand/orderLinesStore";
import { DELIVERY_COEFFICIENT } from "@/lib/delivery";
import {
  BackLink,
  CheckoutGrid,
  PayButton,
  ReviewBlock,
  StepHeading,
} from "./CheckoutShared";


const PaymentSection = () => {
  const products = useCart((state) => state.items);
  const contact = useShipment((state) => state.shipment);
  const orderLines = useOrderLines((state) => state.orderLines);
  const [isProcessing, setIsProcessing] = useState(false);

  const totalDeliveryFee = orderLines.reduce(
    (sum, line) => sum + (line.totalDeliveryFee || 0),
    0
  );
  const totalPrice = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryTotal = totalDeliveryFee * DELIVERY_COEFFICIENT;

  const handleSubmit = async () => {
    setIsProcessing(true);
    try {
      const res = await proceedToPayment(products, deliveryTotal, true);
      if (res) {
        window.location.replace(res.data);
        return;
      }
      toast.error("We couldn't start the payment. Please try again.");
    } catch (error) {
      console.log(error);
      toast.error("We couldn't start the payment. Please try again.");
    }
    setIsProcessing(false);
  };

  return (
    <CheckoutGrid
      aside={
        <SummaryUniversal
          subTotal={totalPrice}
          items={products.map((item) => ({
            id: item.id,
            name: item.product_name,
            detail: `Qty ${item.quantity}${item.isAGift ? " · Gift" : ""}`,
            amount: item.price * item.quantity,
          }))}
        >
          <PayButton isProcessing={isProcessing} onClick={handleSubmit} />
          <BackLink to="/checkout/shipment" />
        </SummaryUniversal>
      }
    >
      <StepHeading
        title="Review & pay"
        description="Check your details before completing your donation."
      />
      <div className="flex flex-col gap-4">
        <ReviewBlock title="Contact" editTo="/checkout/details">
          <p className="font-secondarySBold text-primPurple">
            {contact.first_name} {contact.last_name}
          </p>
          <p>{contact.email}</p>
          {contact.phone && <p>{contact.phone}</p>}
        </ReviewBlock>
        <ReviewBlock title="Delivery" editTo="/checkout/shipment">
          <ul className="flex flex-col gap-4">
            {orderLines.map((line, index) => (
              <li key={index}>
                <p className="font-secondarySBold text-primPurple">
                  {line.products
                    .map((p) => `${p.product_name} × ${p.quantity}`)
                    .join(", ")}
                </p>
                <p>
                  {line.address.street}, {line.address.city}{" "}
                  {line.address.postal_code}, {line.address.country}
                </p>
                {!!line.deliveryDuration && (
                  <p className="caption text-primPurple/60">
                    Estimated delivery: {line.deliveryDuration} days
                  </p>
                )}
              </li>
            ))}
          </ul>
        </ReviewBlock>
      </div>
    </CheckoutGrid>
  );
};

export default PaymentSection;

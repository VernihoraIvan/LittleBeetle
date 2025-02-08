import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { PaymentRequest } from "@stripe/stripe-js";
import { Info as InfoIcon } from "lucide-react";
import { useCart } from "@/zustand/productStore";
import { useDonation } from "@/zustand/donationStore";
import { useOrderLines } from "@/zustand/orderLinesStore";

const ApplePayEl = ({ isDonation }: { isDonation: boolean }) => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );

  const products = useCart((state) => state.items);
  const donations = useDonation((state) => state.items);
  const orderLines = useOrderLines((state) => state.orderLines);

  let totalFee = 0;
  useEffect(() => {
    if (isDonation) {
      totalFee = donations.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    } else {
      const totalDeliveryFee = orderLines.reduce(
        (sum, line) => sum + (line.totalDeliveryFee || 0),
        0
      );
      const price = products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      totalFee = price + totalDeliveryFee;
    }
  }, [isDonation, donations, products, orderLines]);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "GB",
      currency: "gbp",
      total: {
        label: "Total",
        amount: totalFee * 100, // amount in pence
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe, totalFee]);

  if (!paymentRequest) {
    return (
      <div className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm text-muted-foreground">
        <InfoIcon className="h-4 w-4" />
        Apple Pay is not available.
      </div>
    );
  }

  return (
    <div>
      <PaymentRequestButtonElement
        options={{ paymentRequest }}
        onReady={() => console.log("Apple Pay Button Ready")}
        onClick={(event) => {
          console.log("Apple Pay Button Clicked", event);
        }}
      />
    </div>
  );
};

export default ApplePayEl;

import { useEffect, useState } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import {
  PaymentRequestOptions,
  PaymentRequest,
  CanMakePaymentResult,
} from "@stripe/stripe-js";
import { useCart } from "@/zustand/productStore";

const GooglePayEl = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );

  const products = useCart((state) => state.items);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const [canMakePayment, setCanMakePayment] =
    useState<CanMakePaymentResult | null>(null);

  useEffect(() => {
    if (stripe) {
      const paymentRequestOptions: PaymentRequestOptions = {
        country: "GB",
        currency: "gbp",
        total: {
          label: "Total",
          amount: totalFee * 100,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      };
      const pr = stripe.paymentRequest(paymentRequestOptions);
      pr.canMakePayment().then((result) => {
        if (result && result.googlePay) {
          setCanMakePayment(result);
          setPaymentRequest(pr);
        } else {
          console.warn(
            "Google Pay is not available on this device or browser."
          );
        }
      });

      pr.on("paymentmethod", async (event) => {
        event.complete("success");
      });
    }
  }, [stripe, totalFee]);

  return (
    <div>
      {paymentRequest && canMakePayment ? (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      ) : (
        <p>Google Pay is not available in this browser or device.</p>
      )}
    </div>
  );
};

export default GooglePayEl;

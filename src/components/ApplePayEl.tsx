import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { PaymentRequest } from "@stripe/stripe-js";

const ApplePayEl = () => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Total",
        amount: 1000, // amount in cents
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe]);

  if (!paymentRequest) {
    return null;
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

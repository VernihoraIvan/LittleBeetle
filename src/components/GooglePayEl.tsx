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
  console.log("stripe: ", stripe);

  useEffect(() => {
    if (stripe) {
      // Define the basic payment request options
      const paymentRequestOptions: PaymentRequestOptions = {
        country: "GB",
        currency: "gbp",
        total: {
          label: "Total",
          amount: totalFee * 100, // Amount in cents, so 5000 = $50.00
        },
        requestPayerName: true,
        requestPayerEmail: true,
      };

      // Create the payment request object
      const pr = stripe.paymentRequest(paymentRequestOptions);

      // Check for available payment methods, including Google Pay
      pr.canMakePayment().then((result) => {
        console.log(result);
        if (result && result.googlePay) {
          // If Google Pay is available, show the button
          console.log("Google Pay is available");
          setCanMakePayment(result);
          setPaymentRequest(pr);
        } else {
          console.warn(
            "Google Pay is not available on this device or browser."
          );
        }
      });

      // Handle the payment method received event
      pr.on("paymentmethod", async (event) => {
        // This is where you would process the payment on your server
        console.log(event.paymentMethod);

        // Complete the payment request (showing success for demo purposes)
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

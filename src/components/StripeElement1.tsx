// import { loadStripe, Stripe } from "@stripe/stripe-js";
// import { StripeCardElement } from "@stripe/stripe-js";

// export const stripePromise: Promise<Stripe | null> = loadStripe(
//   "pk_test_51PrdjZRq3XOp8unvxUPIEbTEL0xEDoyX71gTb6k1rEfs9uTJMKXfGsGuc60f85tKqQQS0EdQ35t3bGrYasNtOQKu00JXDLVkAb"
// );

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentRequestButtonElement,
  PaymentRequest,
} from "@stripe/react-stripe-js";

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null
  );
  const [paymentStatus, setPaymentStatus] = useState<string>("");

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Create a payment request object
    const pr = stripe.paymentRequest({
      country: "US", // Set your country
      currency: "usd", // Set your currency
      total: {
        label: "Total",
        amount: 1000, // Set the total amount (in cents)
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    // Check if the browser supports the payment request (Apple Pay, Google Pay, etc.)
    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });

    // Handle the payment request submission
    pr.on("paymentmethod", async (event) => {
      // Create a payment intent on your server and retrieve the client secret
      const response = await fetch("/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 1000 }), // Amount in cents
      });

      const { clientSecret }: { clientSecret: string } = await response.json();

      // Confirm the payment using the payment method from the payment request
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: event.paymentMethod.id,
        }
      );

      if (error) {
        // Inform the user if there was an error.
        setPaymentStatus(`Payment failed: ${error.message}`);
        event.complete("fail");
      } else {
        // Report success to the browser
        event.complete("success");

        // Let the user know the payment succeeded
        if (paymentIntent?.status === "succeeded") {
          setPaymentStatus("Payment successful!");
        }
      }
    });
  }, [stripe]);

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      {paymentRequest ? (
        <PaymentRequestButtonElement
          options={{ paymentRequest }}
          style={{
            paymentRequestButton: {
              type: "default",
              theme: "dark",
              height: "48px",
              // You can adjust these styles as per your design needs
            },
          }}
        />
      ) : (
        <p>Loading payment options...</p>
      )}
      {paymentStatus && (
        <div
          style={{
            marginTop: 10,
            color: paymentStatus.includes("successful") ? "green" : "red",
          }}
        >
          {paymentStatus}
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;

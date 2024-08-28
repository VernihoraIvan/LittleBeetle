import { useState, useEffect } from "react";
import "./App.css";
// import { Elements } from "@stripe/react-stripe-js";

// const ProductDisplay = () => (
//     return <div></div>;
// );

// const stripePromise = await loadStripe(
//   "pk_test_51PrdjZRq3XOp8unvxUPIEbTEL0xEDoyX71gTb6k1rEfs9uTJMKXfGsGuc60f85tKqQQS0EdQ35t3bGrYasNtOQKu00JXDLVkAb"
// );

// const stripe = require("stripe")(
//   "sk_test_51PrdjZRq3XOp8unvxy5ZqRuqdy9gACffhSyeUzGpPoooxrzNPsTyUsHwGlwjzDQk2EvGv8CxLctMoMrRfHo7c5M7004eny9RbO"
// );

const ProductDisplay = () => {
  return (
    // <Elements stripe={stripePromise}>
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form>
    </section>
    // </Elements>
  );
};
interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => (
  <section>
    <p>{message}</p>
  </section>
);

const StripeElement = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
};

export default StripeElement;

import SummaryUniversal from "./SummaryUniversal";
import { useState } from "react";
import clsx from "clsx";
// import CardInfo from "./CardInfo";
import mCardImg from "@/assets/images/mCard.png";
import visaImg from "@/assets/images/visa.png";
import gPayImg from "@/assets/images/gPay.png";
import aPayImg from "@/assets/images/aPay.png";
import { useCart } from "@/zustand/productStore";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { proceedToPayment } from "@/api/connection";
import CheckoutForm from "./StripeElement1";
import StripeElement from "./StripeElement";

// import { loadStripe } from "@stripe/stripe-js";
// import {
// CardElement,
// Elements,
// useElements,
// useStripe,
// } from "@stripe/react-stripe-js";
// import { proceedToPayment } from "@/api/connection";

const stripePromise = await loadStripe(
  "pk_test_51PrdjZRq3XOp8unvxUPIEbTEL0xEDoyX71gTb6k1rEfs9uTJMKXfGsGuc60f85tKqQQS0EdQ35t3bGrYasNtOQKu00JXDLVkAb"
);

const PaymentSection = () => {
  const [isActive, setIsActive] = useState<number>(0);
  const products = useCart((state) => state.items);

  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleSubmit = async () => {
    const res = await proceedToPayment(totalFee, "usd");
    console.log("inside handleSubmit");
    console.log(res);
  };

  // const stripe = Stripe(
  //   "pk_test_51PrdjZRq3XOp8unvxUPIEbTEL0xEDoyX71gTb6k1rEfs9uTJMKXfGsGuc60f85tKqQQS0EdQ35t3bGrYasNtOQKu00JXDLVkAb"
  // );
  // const stripePromise = await loadStripe(
  //   "pk_test_51PrdjZRq3XOp8unvxUPIEbTEL0xEDoyX71gTb6k1rEfs9uTJMKXfGsGuc60f85tKqQQS0EdQ35t3bGrYasNtOQKu00JXDLVkAb"
  // );

  // const makePayment = async (
  //   event: React.MouseEvent<HTMLLIElement, MouseEvent>
  // ) => {
  //   event.preventDefault();
  //   // setIsProcessing(true);
  //   // const response = await proceedToPayment(totalFee);
  //   const response = await fetch(
  //     "http://localhost:3000/payment/create-payment-intent",
  //     {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ amount: 5000, currency: "usd" }), // Example amount and currency
  //     }
  //   );

  // if (!stripe || !elements) {
  //   setErrorMessage("Stripe.js has not loaded properly.");
  //   setIsProcessing(false);
  //   return;
  // }

  // const { clientSecret } = await response.json();
  // const cardElement = elements.getElement(CardElement);
  // if (!cardElement) {
  //   setErrorMessage("Card element is not available.");
  //   // setIsProcessing(false); // Uncomment if you have setIsProcessing logic
  //   return;
  // }

  //   const { error, paymentIntent } = await stripe.confirmCardPayment(
  //     clientSecret,
  //     {
  //       payment_method: {
  //         card: cardElement,
  //       },
  //     }
  //   );

  //   if (error) {
  //     setErrorMessage(error.message);
  //   } else if (paymentIntent && paymentIntent.status === "succeeded") {
  //     console.log("Payment succeeded!");
  //   }
  // };

  // const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  return (
    <Elements stripe={stripePromise}>
      <section className="flex justify-between pt-bookPB">
        {/* <CardElement /> */}
        <div>
          <h2 className="mb-9 font-secondaryBold text-buttonS">
            Payment method
          </h2>
          <div className="mb-navPad">
            <ul className="flex flex-col gap-5   ">
              <li
                className={clsx(
                  "flex justify-between items-center cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP ",
                  isActive === 1 && "bg-payButtonActive"
                )}
                onClick={() => setIsActive(1)}
              >
                <p className="py-5">Credit / Debit card</p>
                <div className="flex items-center gap-3">
                  <img
                    className="w-20 h-[56px]"
                    src={mCardImg}
                    alt="Master card icon"
                  />
                  <img src={visaImg} alt="Visa icon" />
                </div>
              </li>
              <li
                className={clsx(
                  "flex justify-between items-center cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP ",
                  isActive === 2 && "bg-payButtonActive"
                )}
                onClick={() => setIsActive(2)}
              >
                <p className="py-5">Google pay</p>
                <img src={gPayImg} alt="Googlepay icon" />
              </li>
              <li
                className={clsx(
                  "flex justify-between items-center cursor-pointer text-2xl font-secondaryBold text-bgPurple border border-bgPurple w-payW px-CreatorsElP",
                  isActive === 3 && "bg-payButtonActive"
                )}
                onClick={() => setIsActive(3)}
              >
                <p className="py-5">Apple pay</p>
                <img src={aPayImg} alt="Applepay icon" />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <div className="">
              {/* {isActive === 1 && <CardInfo />} */}
              {isActive === 1 && <StripeElement />}
              {isActive === 2 && (
                <div className="flex items-center justify-center gap-[18px] cursor-pointer text-bgPurple  w-payW  font-secondarySBold text-xl border text-center border-bgPurple">
                  <img src={gPayImg} alt="Googlepay icon" />
                  <p className="py-5">Continue at Google pay</p>
                </div>
              )}
              {isActive === 3 && (
                <div className="flex items-center justify-center gap-[18px] cursor-pointer text-bgPurple  w-payW  font-secondarySBold text-xl border text-center border-bgPurple">
                  <img src={aPayImg} alt="Applepay icon" />
                  <p className="py-5">Continue at Apple pay</p>
                </div>
              )}
            </div>
            <div>
              <CheckoutForm />
            </div>
            <button
              onClick={handleSubmit}
              className=" w-payW bg-pinkBar py-5 font-secondarySBold text-xl"
            >
              COMPLETE DONATION
            </button>
          </div>
        </div>
        <SummaryUniversal subTotal={totalFee} shippingFee={0} />
      </section>
    </Elements>
  );
};

export default PaymentSection;

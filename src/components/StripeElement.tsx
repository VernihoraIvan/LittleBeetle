// import { proceedToPayment } from "@/api/connection";
import { useCart } from "@/zustand/productStore";
import { proceedToPayment } from "@/api/connection";
import {
  // CardElement,
  ExpressCheckoutElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import // PaymentIntent,
// StripeExpressCheckoutElementClickEvent,
// StripeExpressCheckoutElementConfirmEvent,
"@stripe/stripe-js";
// import { useEffect } from "react";

const PaymentComponent = () => {
  // const cart = useCart((state) => state.items);
  const products = useCart((state) => state.items);

  // const [isProcessing, setIsProcessing] = useState(false);
  // const [paymentStatus, setPaymentStatus] = useState("");

  // const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const stripe = useStripe();
  const elements = useElements();

  // useEffect(() => {
  //   if (totalQty === 0) return;

  //   if (paymentStatus !== "succeeded") return;
  // });

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (totalQty === 0) return;

  //   if (!stripe || !elements) return;

  //   const cardEl = elements.getElement(CardElement);

  //   setIsProcessing(true);

  //   try {
  //     const res = await proceedToPayment(totalFee, "gbp");
  //     if (!res) {
  //       setPaymentStatus("Payment failed!");
  //       setIsProcessing(false);
  //       console.log("Payment failed!");
  //       return;
  //     }

  //     const { client_secret: clientSecret } = res.data;
  //     console.log("clientSecret: ", clientSecret);

  //     const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: cardEl!,
  //       },
  //     });

  //     if (!paymentIntent) {
  //       setPaymentStatus("Payment failed!");
  //     } else {
  //       setPaymentStatus(paymentIntent.status);
  //     }
  // } catch (error) {
  //   console.error(error);
  //   setPaymentStatus("Payment failed!");
  // }

  //   setIsProcessing(false);
  // };

  // const cardElementOptions = {
  //   style: {
  //     base: {
  //       fontSize: "24px",
  //       color: "#32325d", // Text color
  //       backgroundColor: "#ffff", // Background color
  //       "::placeholder": {
  //         color: "#aab7c4", // Placeholder text color
  //       },
  //       iconColor: "#6772e5", // Icon color (like the card brand icon)
  //       fontFamily: '"Helvetica Neue", Helvetica, sans-serif', // Custom font
  //       padding: "10px 14px", // Padding inside the input
  //     },
  //     invalid: {
  //       color: "#fa755a", // Text color for invalid input
  //       iconColor: "#fa755a", // Icon color for invalid input
  //     },
  //   },
  //   hidePostalCode: true, // Optionally hide the postal code field
  //   // defaultValues: {
  //   //   link: null, // Disable the "Save with Link" checkbox
  //   // },
  //   disableLink: true, // Disable the "Save with Link" checkbox
  // };

  // const onClick = ({ resolve }: StripeExpressCheckoutElementClickEvent) => {
  //   const options = {
  //     emailRequired: true,
  //   };
  //   resolve(options);
  // };

  const onConfirm = async () => {
    if (!stripe || !elements) return;
    try {
      const res = await proceedToPayment(totalFee, "gbp");
      if (!res) {
        console.log("Payment failed!");
        return;
      }
      const { client_secret: clientSecret } = res.data;
      if (!res) {
        console.log("Payment failed!");
        return;
      }

      const { error } = await stripe.confirmPayment({
        // `Elements` instance that's used to create the Express Checkout Element.
        elements,
        // `clientSecret` from the created PaymentIntent

        clientSecret,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
        // Uncomment below if you only want redirect for redirect-based payments.
        // redirect: 'if_required',
      });

      if (error) {
        // This point is reached only if there's an immediate error when confirming the payment. Show the error to your customer (for example, payment details incomplete).
      } else {
        // Your customer will be redirected to your `return_url`.
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ fontSize: "20px" }}>
      {/* <form onSubmit={handleSubmit} id="payment-form">
        <div className="w-payW">
          <h2 className="font-secondaryBold text-buttonS mb-6">
            Card information
          </h2>
          <div className="flex flex-col gap-4 mb-10">
            <label
              htmlFor="cardName"
              className="font-secondaryBold text-[24px]"
            >
              Cardholder name <span className="text-red-500">*</span>
            </label>
            <input
              className="text-2xl px-4 py-3 border border-primPurpleFaintM h-[60px]"
              type="text"
              id="cardName"
              name="cardName"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="card-element"
              className="font-secondaryBold text-2xl"
            >
              Card number <span className="text-red-500">*</span>
            </label>
            <div className="card-element-wrapper font-secondaryBold text-2xl h-[60px] border border-primPurpleFaintM">
              <CardElement
                options={cardElementOptions}
                // className=" text-2xl px-4 py-3 bg-primWhite item-center border border-primPurpleFaintM h-[60px]"
                id="card-element"
              />
            </div>
          </div>
          {!isProcessing && (
            <button
              style={{
                marginTop: "16px",
                height: "31px",
                backgroundColor: "#f0c14b",
                color: "black",
                display: "flex",
                fontWeight: 600,
                fontSize: "20px",
                padding: "24px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Pay
            </button>
          )}
        </div>
        {isProcessing && <div>Processing...</div>}
        {!isProcessing && paymentStatus && <div>Status: {paymentStatus}</div>}
      </form> */}
      <ExpressCheckoutElement /*onClick={onClick}*/ onConfirm={onConfirm} />
    </div>
  );
};

export default PaymentComponent;

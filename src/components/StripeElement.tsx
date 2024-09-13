import { proceedToPayment } from "@/api/connection";
import { useCart } from "@/zustand/productStore";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";

interface PaymentComponentProps {
  setIsPaymentSuccess: (value: boolean) => void;
}
const PaymentComponent = ({ setIsPaymentSuccess }: PaymentComponentProps) => {
  const cart = useCart((state) => state.items);
  const products = useCart((state) => state.items);

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalFee = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (paymentStatus === "succeeded") {
      setIsPaymentSuccess(true);
    }
  }, [paymentStatus, setIsPaymentSuccess]);

  useEffect(() => {
    if (totalQty === 0) return;

    if (paymentStatus !== "succeeded") return;
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (totalQty === 0) return;

    if (!stripe || !elements) return;

    const cardEl = elements.getElement(CardElement);

    setIsProcessing(true);

    try {
      const res = await proceedToPayment(totalFee, "usd");
      if (!res) {
        setPaymentStatus("Payment failed!");
        setIsProcessing(false);
        console.log("Payment failed!");
        return;
      }

      const { client_secret: clientSecret } = res.data;
      console.log("clientSecret: ", clientSecret);

      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardEl!,
        },
      });

      if (!paymentIntent) {
        setPaymentStatus("Payment failed!");
      } else {
        setPaymentStatus(paymentIntent.status);
      }
    } catch (error) {
      console.error(error);
      setPaymentStatus("Payment failed!");
    }

    setIsProcessing(false);
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "24px",
        color: "#32325d", 
        backgroundColor: "#ffff", 
        "::placeholder": {
          color: "#aab7c4", 
        },
        iconColor: "#6772e5",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif', 
        padding: "10px 14px",
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a", 
      },
    },
    hidePostalCode: true, 

    disableLink: true, 
  };

  return (
    <div style={{ fontSize: "20px" }}>
      <form onSubmit={handleSubmit} id="payment-form">
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
              className="text-[24px] px-4 py-3 border border-primPurpleFaintM h-[60px]"
              type="text"
              id="cardName"
              name="cardName"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="card-element"
              className="font-secondaryBold text-[24px]"
            >
              Card number <span className="text-red-500">*</span>
            </label>
            <div className="card-element-wrapper font-secondaryBold text-[24px] h-[60px] border border-primPurpleFaintM">
              <CardElement
                options={cardElementOptions}
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
        {/* {isProcessing && <div>Processing...</div>}
        {!isProcessing && paymentStatus && <div>Status: {paymentStatus}</div>} */}
      </form>
    </div>
  );
};

export default PaymentComponent;

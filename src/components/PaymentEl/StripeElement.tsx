import { proceedToPayment } from "@/api/connection";
import { useDonation } from "@/zustand/donationStore";
import { useOrderLines } from "@/zustand/orderLinesStore";
import { useCart } from "@/zustand/productStore";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";

interface PaymentComponentProps {
  setIsPaymentSuccess: (value: boolean) => void;
}
const PaymentComponent = ({ setIsPaymentSuccess }: PaymentComponentProps) => {
  const cart = useCart((state) => state.items);
  const donations = useDonation((state) => state.items);
  // console.log("products: ", products);
  const orderLines = useOrderLines((state) => state.orderLines);
  const totalDeliveryFee = orderLines.reduce(
    (sum, line) => sum + (line.totalDeliveryFee || 0),
    0
  );
  console.log("totalDeliveryFee: ", totalDeliveryFee);
  console.log("orderLines: ", orderLines);

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  let totalFee: number;

  if (totalQty === 0) {
    // console.log("totalQty is 0");
    totalFee = donations.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  } else {
    // console.log("totalQty is not 0");
    totalFee = orderLines.reduce(
      (sum, line) => sum + (line.totalDeliveryFee || 0),
      0
    );
  }
  totalFee += totalDeliveryFee;

  // console.log("isProcessing: ", isProcessing);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (paymentStatus === "succeeded") {
      setIsPaymentSuccess(true);
    }
  }, [paymentStatus, setIsPaymentSuccess]);

  useEffect(() => {
    // if (totalQty === 0) return;

    if (paymentStatus !== "succeeded") return;
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // console.log("handleSubmit");
    e.preventDefault();
    // console.log("totalQty: ", totalQty);

    // if (totalQty === 0) return;

    if (!stripe || !elements) return;

    // console.log("stripe: ", stripe);
    // console.log("elements: ", elements);

    const cardEl = elements.getElement(CardElement);

    setIsProcessing(true);
    // console.log("after setIsProcessing");

    try {
      // console.log("totalFee: ", totalFee);
      const res = await proceedToPayment(totalFee, "usd");
      if (!res) {
        setPaymentStatus("Payment failed!");
        setIsProcessing(false);
        console.log("Payment failed!");
        return;
      }
      console.log("after try block");

      const { client_secret: clientSecret } = res.data;
      // console.log("clientSecret: ", clientSecret);

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
    } finally {
      setIsProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        // fontSize: "24px",
        color: "#32325d",
        backgroundColor: "#ffff",
        "::placeholder": {
          color: "#aab7c4",
        },
        iconColor: "#6772e5",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        // padding: "10px 12px",
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
        <div className="">
          <h2
            className="font-secondaryBold text-buttonS mb-6
              xl:text-[24px]
              lg:text-[22px]
              md:text-[22px]
              sm:text-[22px]"
          >
            Card information
          </h2>
          <div
            className="flex flex-col gap-4 mb-10 
          xl:mb-7
          lg:mb-5
          smd:mb-5"
          >
            <label
              htmlFor="cardName"
              className="font-secondaryBold text-[24px]
              xl:text-[20px]
              lg:text-[18px]
              smd:text-[18px]"
            >
              Cardholder name <span className="text-red-500">*</span>
            </label>
            <input
              className="text-[24px] px-4 py-3 border border-primPurpleFaintM h-[60px]
              xl:text-[18px] xl:py-2 xl:px-3 xl:h-[45px]
              lg:text-[14px] lg:py-[6px] lg:px-2 lg:h-[33px]
              smd:text-[14px] smd:py-[6px] smd:px-2 smd:h-[33px]"
              type="text"
              id="cardName"
              name="cardName"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="card-element"
              className="font-secondaryBold text-[24px]
              xl:text-[20px]
              lg:text-[18px]
              smd:text-[18px]"
            >
              Card number <span className="text-red-500">*</span>
            </label>
            <div
              className="card-element-wrapper font-secondaryBold text-[24px] h-[60px] border border-primPurpleFaintM px-4 py-3
            xl:text-[18px] xl:py-2 xl:px-3 xl:h-[45px]
            lg:text-[14px] lg:py-[6px] lg:px-2 lg:h-[33px]
            smd:text-[14px] smd:py-[6px] smd:px-2 smd:h-[33px]"
            >
              <CardElement options={cardElementOptions} id="card-element" />
            </div>
          </div>
          {!isProcessing && (
            <button
              className="mt-4 uppercase bg-primPurple text-primWhite font-secondaryBold text-[24px] flex justify-center items-center cursor-pointer w-full py-4 px-[110px]
            xl:text-[20px]
            lg:text-[18px]
            smd:text-[18px]"
            >
              Donate
            </button>
          )}
        </div>
        {isProcessing && <div>Processing...</div>}
        {!isProcessing && paymentStatus && <div>Status: {paymentStatus}</div>}
      </form>
    </div>
  );
};

export default PaymentComponent;

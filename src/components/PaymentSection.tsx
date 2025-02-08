import SummaryUniversal from "./SummaryUniversal";
import { useState } from "react";
import clsx from "clsx";
import mCardImg from "@/assets/images/mCard.png";
import visaImg from "@/assets/images/visa.png";
import gPayImg from "@/assets/images/gPay.png";
import aPayImg from "@/assets/images/aPay.png";
import { useCart } from "@/zustand/productStore";
import StripeElement from "./PaymentEl/StripeElement";
import GooglePayEl from "./PaymentEl/GooglePayEl";
import ApplePayEl from "./PaymentEl/ApplePayEl";
import { sentData } from "@/api/connection";
import { useOrderLines } from "@/zustand/orderLinesStore";
import { useStage } from "@/zustand/stageStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Resend } from "resend";
import { useShipment } from "@/zustand/shipmentStore";

const PaymentSection = () => {
  const [isPaymentSuccess, setIsPaymentSuccess] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<number>(0);
  const products = useCart((state) => state.items);
  // const orderLinesRef = useOrderLines((state) => state.orderLines);
  // const [orderLines, setOrderLines] = useState<OrderLine[]>(orderLinesRef);
  const navigate = useNavigate();
  // useEffect(() => {
  //   setOrderLines(orderLinesRef);
  // }, [orderLinesRef]);

  const shipping = useShipment((state) => state.shipment);
  console.log(shipping);

  const totalFee = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const handleSendEmail = async () => {
    const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: shipping.email,
      subject: "Thank You for Your Donation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="font-size: 24px; line-height: 1.2; color: #333;">
            Dear ${shipping.first_name},
          </h1>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Your donation supports psychological rehabilitation for children affected by war in Ukraine. 
            Over 15 creative professionals from around the world volunteered their time and skills to create this project.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #333; margin-top: 20px;">
            We thank you for your support.
          </p>
        </div>
      `,
    });
  };

  const handleSubmit = async () => {
    if (isPaymentSuccess) {
      sentData(products);
      useOrderLines.getState().clearOrderLines();
      useCart.getState().clearCart();
      useStage.getState().setStage(0);
      toast.success("Donation completed successfully");
      handleSendEmail();
    } else {
      toast.error("Payment failed");
    }
    navigate("/complete");
  };

  // const checkEachDeliveryFee = (product: itemProps) => {
  //   // Find the order line containing this product
  //   const orderLine = orderLines.find((line) =>
  //     line.products.some((p) => p.id === product.id)
  //   );

  //   if (!orderLine) {
  //     console.warn(`No order line found for product ${product.id}`);
  //     return false;
  //   }

  //   // Compare the fees
  //   const productFee = product.shipment?.delivery_fee || 0;
  //   const orderLineFee = orderLine.totalDeliveryFee || 0;

  //   if (productFee !== orderLineFee) {
  //     console.warn(
  //       `Delivery fee mismatch for product ${product.id}: Product fee ${productFee} != Order line fee ${orderLineFee}`
  //     );
  //     return false;
  //   }

  //   return true;
  // };

  // useEffect(() => {
  //   products.forEach((product) => {
  //     console.log(checkEachDeliveryFee(product));
  //   });
  // }, [products]);

  return (
    <section className="flex justify-between pt-10 sm:flex-col sm:flex-col-reverse sm:pt-0 md:gap-5 smd2:gap-10">
      <div
        className="w-[580px]
      xl:w-[510px] 
      lg:w-[380px]
      md:w-[380px]
      sm:w-full sm:pt-8"
      >
        <h2
          className="mb-9 font-secondaryBold text-buttonS
        xl:text-[24px]
              lg:text-[22px]
              md:text-[22px]
              sm:text-[22px]"
        >
          Payment method
        </h2>
        <div className="mb-navPad">
          <ul className="flex flex-col gap-5   ">
            <li
              className={clsx(
                "flex justify-between items-center cursor-pointer  font-secondaryBold text-bgPurple border border-bgPurple  px-CreatorsElP h-[80px] xl:h-[60px] xl:px-6 lg:h-[44px] lg:px-4 smd:h-[44px] smd:px-4 ",
                isActive === 1 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(1)}
            >
              <p className="py-5 text-[24px] xl:text-[18px] lg:text-[16px] smd:text-[16px]">
                Credit / Debit card
              </p>
              <div className="flex items-center gap-3 h-full xl:gap-2 lg:gap-1 smd:gap-1">
                <img
                  className=" h-[56px] xl:h-[42px] lg:h-[31px] smd:h-[31px]"
                  src={mCardImg}
                  alt="Master card icon"
                />
                <img src={visaImg} className="h-full" alt="Visa icon" />
              </div>
            </li>
            <li
              className={clsx(
                "flex justify-between items-center cursor-pointer font-secondaryBold text-bgPurple border border-bgPurple px-CreatorsElP h-[80px] xl:h-[60px] xl:px-6 lg:h-[44px] lg:px-4 smd:h-[44px] smd:px-4",
                isActive === 2 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(2)}
            >
              <p className="py-5 text-[24px] xl:text-[18px] lg:text-[16px] smd:text-[16px]">
                Google pay
              </p>
              <img src={gPayImg} className="h-full" alt="Googlepay icon" />
            </li>
            <li
              className={clsx(
                "flex justify-between items-center cursor-pointer  font-secondaryBold text-bgPurple border border-bgPurple  px-CreatorsElP h-[80px] xl:h-[60px] xl:px-6 lg:h-[44px] lg:px-4 smd:h-[44px] smd:px-4",
                isActive === 3 && "bg-payButtonActive"
              )}
              onClick={() => setIsActive(3)}
            >
              <p className="py-5 text-[24px] xl:text-[18px] lg:text-[16px] smd:text-[16px]">
                Apple pay
              </p>
              <img src={aPayImg} className="h-full" alt="Applepay icon" />
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            {isActive === 1 && (
              <StripeElement setIsPaymentSuccess={setIsPaymentSuccess} />
            )}
            {isActive === 2 && <GooglePayEl isDonation={false} />}
            {isActive === 3 && <ApplePayEl isDonation={false} />}
          </div>

          <button
            onClick={handleSubmit}
            className={clsx(
              " uppercase py-4  font-secondarySBold text-xl xl:text-[20px] lg:text-[18px] smd:text-[18px]",
              isPaymentSuccess && "bg-bgPurple text-primWhite cursor-pointer",
              !isPaymentSuccess && "bg-pinkBar text-primWhite "
            )}
            disabled={!isPaymentSuccess}
          >
            complete donation
          </button>
        </div>
      </div>
      <SummaryUniversal subTotal={totalFee} />
    </section>
  );
};

export default PaymentSection;

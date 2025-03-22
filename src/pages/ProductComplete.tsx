import Title from "../components/Title";
import { useCart } from "../zustand/productStore";
import { useEffect, useState } from "react";
import {
  sentData,
  sendDonationConfirmation,
  verifyStripePayment,
} from "../api/connection";
import { useDonation } from "@/zustand/donationStore";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductComplete = () => {
  const clearCart = useCart((state) => state.clearCart);
  const clearDonation = useDonation((state) => state.clearDonations);
  //   const donations = useDonation((state) => state.items);
  const product = useCart((state) => state.items);

  const [paymentVerified, setPaymentVerified] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("inside useEffect");
    const verifyPayment = async () => {
      try {
        // Get session_id from URL query parameters
        const queryParams = new URLSearchParams(location.search);
        const sessionId = queryParams.get("session_id");

        if (!sessionId) {
          // setError("No session ID found");
          // setLoading(false);
          return;
        }

        // Call your backend verification endpoint
        const response = await verifyStripePayment(sessionId);

        if (response?.data.verified) {
          setPaymentVerified(true);

          // Log the successful donation
          // await logDonation(sessionId);
        } else {
          // setError("Payment not completed");
          // Optionally redirect to failed payment page
          // navigate('/donation-failed');
        }
      } catch (err) {
        // setError("Failed to verify payment");
      }
    };

    verifyPayment();
  }, [location, navigate]);

  const sendDonationData = async () => {
    const donationToSend = product.map((product) => ({
      ...product,
    }));
    await sentData(donationToSend);
    const lang = product[0].product_language === "English" ? "en" : "ua";
    await sendDonationConfirmation(
      product[0].shipment.email,
      product[0].shipment.first_name + " " + product[0].shipment.last_name,
      lang
    );
    clearCart();
    clearDonation();
  };

  useEffect(() => {
    if (product.length > 0) {
      if (paymentVerified) {
        sendDonationData();
      }
    }
  }, [paymentVerified]);

  return (
    <>
      <Title title="" />
      <div className=" flex justify-center items-center  h-[calc(100vh-40px)] px-10">
        <div className="flex flex-col gap-[18px] items-center max-w-[600px]">
          <h2 className="font-secondaryBold text-buttonS text-center responsive-heading">
            Thank you! Your donation is complete.
          </h2>
          <p className="font-secondaryRegular text-linkS text-center big-responsive-text">
            We've sent an email with access to the digital products included, to
            the address you provided. We hope the book and lullaby we created
            bring you joy and a touch of magic.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductComplete;

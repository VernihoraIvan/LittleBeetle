import Title from "../components/Title";
import { useCart } from "../zustand/productStore";
import { useEffect, useState } from "react";
import { verifyStripePayment } from "../api/connection";
import { useDonation } from "@/zustand/donationStore";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const DonationComplete = () => {
  const clearCart = useCart((state) => state.clearCart);
  const clearDonation = useDonation((state) => state.clearDonations);

  const [paymentVerified, setPaymentVerified] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
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

        // Ask the backend to confirm the payment with Stripe
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

  // The backend has recorded the order and sent the email; just empty the cart.
  useEffect(() => {
    if (paymentVerified) {
      clearCart();
      clearDonation();
    }
  }, [paymentVerified, clearCart, clearDonation]);

  return (
    <>
      <Title title="" />
      <section className="page-container flex min-h-[60vh] items-center justify-center py-16 md:py-24">
        <div className="card flex max-w-xl flex-col items-center gap-4 px-6 py-12 text-center md:px-12">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-hovYellow">
            <Heart className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="heading-2">Thank you! Your donation is complete.</h2>
          <p className="body-lg text-primPurple/75">
            We've sent an email with access to the digital products included, to
            the address you provided. We hope the book and lullaby we created
            bring you joy and a touch of magic.
          </p>
          <Link to="/" className="btn-primary mt-4">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
};
export default DonationComplete;

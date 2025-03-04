import Title from "../components/Title";
import { useCart } from "../zustand/productStore";
import { useEffect } from "react";
import { sentData, sendDonationConfirmation } from "../api/connection";
import { useDonation } from "@/zustand/donationStore";

const DonationComplete = () => {
  const clearCart = useCart((state) => state.clearCart);
  const clearDonation = useDonation((state) => state.clearDonations);
  const donations = useDonation((state) => state.items);

  useEffect(() => {
    const sendDonationData = async () => {
      const donationToSend = donations.map((donation) => ({
        ...donation,
      }));
      await sentData(donationToSend);
      const lang = donations[0].product_language === "English" ? "en" : "ua";
      await sendDonationConfirmation(
        donations[0].shipment.email,
        donations[0].shipment.first_name +
          " " +
          donations[0].shipment.last_name,
        lang
      );
    };
    if (donations.length > 0) {
      sendDonationData();
    }
    clearCart();
    clearDonation();
  }, []);

  return (
    <>
      <Title title="" />
      <div className=" flex justify-center items-center  h-[calc(100vh-40px)] px-10">
        <div className="flex flex-col gap-[18px] items-center max-w-[600px]">
          <h2 className="font-secondaryBold text-buttonS text-center responsive-heading">
            Thank you! Your donation is complete.
          </h2>
          <p className="font-secondaryRegular text-linkS text-center big-responsive-text">
            We sent an email with the access to the digital products included to
            the address you provided. We hope the book and lullaby we've created
            bring you some joy and a touch of magic.
          </p>
        </div>
      </div>
    </>
  );
};

export default DonationComplete;

import { sentData } from "@/api/connection";
import { useDonation } from "@/zustand/donationStore";
import { useCart } from "@/zustand/productStore";
import { useEffect } from "react";

const Test = () => {
  const clearCart = useCart((state) => state.clearCart);
  const clearDonation = useDonation((state) => state.clearDonations);
  const donations = useDonation((state) => state.items);

  //   const sendDonationData = async () => {
  //     const donationToSend = donations.map((donation) => ({
  //       ...donation,
  //     }));
  //     await sentData(donationToSend);
  //   };

  useEffect(() => {
    const sendDonationData = async () => {
      const donationToSend = donations.map((donation) => ({
        ...donation,
      }));
      await sentData(donationToSend);
    };
    sendDonationData();
    clearCart();
    clearDonation();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Test</h1>
    </div>
  );
};

export default Test;

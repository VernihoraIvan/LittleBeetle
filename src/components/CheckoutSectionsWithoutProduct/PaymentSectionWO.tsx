import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SummaryUniversal from "../SummaryUniversal";
import {
  BackLink,
  CheckoutGrid,
  PayButton,
  ReviewBlock,
  StepHeading,
} from "../CheckoutShared";
import { useDonation } from "@/zustand/donationStore";
import { useMainStore } from "@/zustand/mainOrderStore";
import { proceedToPayment } from "@/api/connection";

const PaymentSectionWO = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const donations = useDonation((state) => state.items);
  const setDonationAddress = useDonation((state) => state.addAdress);
  const mainShipmentStore = useMainStore((state) => state.shipment);

  const totalFee = donations.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  useEffect(() => {
    setDonationAddress(mainShipmentStore);
  }, [mainShipmentStore, setDonationAddress]);

  const handleSubmit = async () => {
    setIsProcessing(true);
    try {
      const res = await proceedToPayment(totalFee, "gbp", false);
      if (res) {
        window.location.replace(res.data);
        return;
      }
      toast.error("We couldn't start the payment. Please try again.");
    } catch (error) {
      console.log(error);
      toast.error("We couldn't start the payment. Please try again.");
    }
    setIsProcessing(false);
  };

  return (
    <CheckoutGrid
      aside={
        <SummaryUniversal
          subTotal={totalFee}
          shippingFee={0}
          isDonation
          items={donations.map((item) => ({
            id: item.id,
            name: item.product_name,
            detail: `Gift package in ${item.product_language}`,
            amount: item.price * item.quantity,
          }))}
        >
          <PayButton isProcessing={isProcessing} onClick={handleSubmit} />
          <BackLink to="/checkout-donation/details" />
        </SummaryUniversal>
      }
    >
      <StepHeading
        title="Review & pay"
        description="Check your details before completing your donation."
      />
      <ReviewBlock title="Contact" editTo="/checkout-donation/details">
        <p className="font-secondarySBold text-primPurple">
          {mainShipmentStore.first_name} {mainShipmentStore.last_name}
        </p>
        <p>{mainShipmentStore.email}</p>
        {mainShipmentStore.phone && <p>{mainShipmentStore.phone}</p>}
      </ReviewBlock>
    </CheckoutGrid>
  );
};

export default PaymentSectionWO;

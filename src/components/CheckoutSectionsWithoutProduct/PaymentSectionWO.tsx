import SummaryUniversal from "../SummaryUniversal";
import { useEffect } from "react";
import clsx from "clsx";
import { useDonation } from "@/zustand/donationStore";
import { useMainStore } from "@/zustand/mainOrderStore";
import { sentData } from "@/api/connection";
import { proceedToPayment } from "@/api/connection";

const PaymentSectionWO = () => {
  const donations = useDonation((state) => state.items);
  const setDonationAddress = useDonation((state) => state.addAdress);

  const totalFee = donations.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  const mainShipmentStore = useMainStore((state) => state.shipment);
  useEffect(() => {
    setDonationAddress(mainShipmentStore);
  }, [mainShipmentStore, setDonationAddress]);

  const handleSubmit = async () => {
    const res = await proceedToPayment(totalFee, "gbp");
    if (res) {
      const donationToSend = donations.map((donation) => ({
        ...donation,
      }));
      const res2 = await sentData(donationToSend);
      console.log(res2);

      window.location.replace(res.data);
    }
  };

  return (
    <section
      className="flex justify-between pt-10 sm:flex-col sm:flex-col-reverse sm:pt-0 
    flex-col-reverse justify-center items-center gap-10"
    >
      <div
        className="w-[580px]
      xl:w-[510px] 
      lg:w-[380px]
      md:w-[380px]
      sm:w-full sm:pt-8"
      >
        {/* <h2
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
        </div> */}
        <div className="flex flex-col gap-5">
          {/* <div className="">
            {isActive === 1 && (
              <StripeElement
                setIsPaymentSuccess={setIsPaymentSuccess}
                isDonation={true}
              />
            )}
            {isActive === 2 && <GooglePayEl isDonation={true} />}
            {isActive === 3 && <ApplePayEl isDonation={true} />}
          </div> */}

          <button
            onClick={handleSubmit}
            className={clsx(
              " uppercase py-4  font-secondarySBold text-xl xl:text-[20px] lg:text-[18px] smd:text-[18px] bg-bgPurple text-primWhite cursor-pointer"
              // isPaymentSuccess && "bg-bgPurple text-primWhite cursor-pointer",
              // !isPaymentSuccess && "bg-pinkBar text-primWhite "
            )}
            // disabled={!isPaymentSuccess}
          >
            complete donation
          </button>
        </div>
      </div>
      <SummaryUniversal subTotal={totalFee} shippingFee={0} isDonation={true} />
    </section>
  );
};

export default PaymentSectionWO;

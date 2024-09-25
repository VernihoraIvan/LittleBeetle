import { extraProducts } from "@/utilities/data";
import CheckoutContributionEl from "../Elements/CheckoutContributionEl";
import CartIncludedWidget from "../CartIncludedWidget";
import ButtonTo from "../ButtonTo";
import { useStage } from "@/zustand/stageStore";
import { useEffect, useState } from "react";
import SummaryUniversal from "../SummaryUniversal";
import { useDonation } from "@/zustand/donationStore";
import DonationOption from "../DonationOption";
import { nanoid } from "nanoid";

const CheckoutContributionWO = () => {
  const id = nanoid();

  const [price, setPrice] = useState<number | string>(0);
  const [lang, setLang] = useState<number | string>("English");
  const [quantity, setQuantity] = useState<number>(1);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const addDonation = useDonation((state) => state.addDonation);
  const donations = useDonation((state) => state.items);
  const setStage = useStage((state) => state.setStage);

  const [totalFeeState, setTotalFee] = useState(0);

  const totalFee = donations.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  useEffect(() => {
    setTotalFee(totalFee + (price as number));
  }, [price, totalFee]);

  const handleAddProduct = (
    title: string,
    price: number,
    quantity: number,
    lang: string,
    isChecked: boolean,
    id: string
  ) => {
    if (price > 2) {
      addDonation(title, quantity, price, lang, isChecked, id);
      setPrice(0);
      setStage(2);
      setQuantity(1);
    }
  };

  console.log(donations);

  return (
    <>
      <div className="flex  pt-bookPT justify-between smd:flex-col smd:pt-0  smd:gap-0">
        <div className="smd:pt-[80px] md:pl-[40px]">
          {donations.length > 0 ? (
            donations.map((product) => (
              <CheckoutContributionEl
                key={product.id}
                id={product.id}
                name={product.name}
                quantity={product.quantity}
                total={product.price * product.quantity}
                language={product.itemLanguage}
                imgPath={
                  extraProducts.find((p) => p.title === product.name)?.imagePath
                }
              />
            ))
          ) : (
            <>
              <DonationOption
                setLang={setLang}
                setPrice={setPrice}
                setIsChecked={setIsChecked}
                checkboxIsHidden={true}
              />
            </>
          )}
        </div>
        <SummaryUniversal subTotal={totalFeeState} shippingFee={0} />
      </div>
      <CartIncludedWidget />
      {/* <ButtonTo
        onClick={() =>
          handleAddProduct(
            "Donation",
            price as number,
            quantity,
            lang as string,
            isChecked,
            id
          )
        }
        to="/checkout-donation/details"
        title="CONTINUE TO NEXT"
        style="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px]"
      /> */}
      <ButtonTo
        onClick={() =>
          handleAddProduct(
            "Donation",
            price as number,
            quantity,
            lang as string,
            isChecked,
            id
          )
        }
        to="/checkout/details"
        title="NEXT STEP"
        style="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px]
          xl:text-[20px]
          lg:text-[18px]
          smd:text-[18px] 
          sm:w-full sm:px-0 sm:block"
      />
    </>
  );
};

export default CheckoutContributionWO;

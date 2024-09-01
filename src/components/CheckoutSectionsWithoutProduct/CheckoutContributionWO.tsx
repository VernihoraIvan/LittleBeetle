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

  const [isOverlayPrice, setIsOverlayPrice] = useState<boolean>(false);
  const [isOverlayLang, setIsOverlayLang] = useState<boolean>(false);

  const [price, setPrice] = useState<number>(0);
  const [lang, setLang] = useState<string>("en");
  const [quantity, setQuantity] = useState<number>(1);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const addDonation = useDonation((state) => state.addDonation);
  const handleOverlayPrice = () => {
    setIsOverlayPrice(!isOverlayPrice);
  };

  const handleOverlayLang = () => {
    setIsOverlayLang(!isOverlayLang);
  };
  const [totalFeeState, setTotalFee] = useState(0);
  const donations = useDonation((state) => state.items);

  const totalFee = donations.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  useEffect(() => {
    setTotalFee(totalFee);
  }, [totalFee]);

  const setStage = useStage((state) => state.setStage);

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
      setIsOverlayPrice(false);
      setStage(2);
      setQuantity(1);
    }
  };

  console.log(donations);

  return (
    <>
      <div className="flex  pt-bookPT justify-between">
        <div className="">
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
            <DonationOption
              handleOverlayLang={handleOverlayLang}
              lang={lang}
              setIsOverlayLang={setIsOverlayLang}
              setLang={setLang}
              isOverlayLang={isOverlayLang}
              handleOverlayPrice={handleOverlayPrice}
              price={price}
              setIsOverlayPrice={setIsOverlayPrice}
              setPrice={setPrice}
              isOverlayPrice={isOverlayPrice}
              setIsChecked={setIsChecked}
              checkboxIsHidden={true}
            />
          )}
        </div>
        <SummaryUniversal subTotal={totalFeeState} shippingFee={0} />
      </div>
      <CartIncludedWidget />
      <ButtonTo
        onClick={() =>
          handleAddProduct("Donation", price, quantity, lang, isChecked, id)
        }
        to="/checkout-donation/details"
        title="CONTINUE TO NEXT"
        style="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-2xl"
      />
    </>
  );
};

export default CheckoutContributionWO;

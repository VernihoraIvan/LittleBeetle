import { extraProducts } from "@/utilities/data";
import CheckoutContributionEl from "../Elements/CheckoutContributionEl";
import CartIncludedWidget from "../CartIncludedWidget";
import ButtonTo from "../ButtonTo";
import { useStage } from "@/zustand/stageStore";
import { useState } from "react";
import SummaryUniversal from "../SummaryUniversal";
import { useDonation } from "@/zustand/donationStore";
import DonationOption from "../DonationOption";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutContributionWO = () => {
  const id = nanoid();

  const [price, setPrice] = useState<number>(0);
  const [lang, setLang] = useState<string>("English");
  const [quantity, setQuantity] = useState<number>(1);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const addDonation = useDonation((state) => state.addDonation);
  const donations = useDonation((state) => state.items);
  const setStage = useStage((state) => state.setStage);
  const navigate = useNavigate();

  const totalFee =
    donations.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    ) + price;

  const handleAddProduct = (
    title: string,
    price: number,
    quantity: number,
    lang: string,
    isChecked: boolean,
    id: string,
    weight: number
  ) => {
    if (price >= 3) {
      addDonation(title, quantity, price, lang, isChecked, id, weight);
      setPrice(0);
      setStage(2);
      setQuantity(1);
      // navigate("/checkout-donation/details");
    } else if (price < 3 && totalFee >= 3) {
      setStage(2);
      navigate("/checkout-donation/details");
    } else {
      toast.error("Minimum donation is 3 GBP");
    }
  };

  // Function to handle navigation with scrolling
  const handleNavigateToGifts = () => {
    navigate("/donation#optional-printed-gifts");
    // Add a small delay to ensure the component is loaded before scrolling
    setTimeout(() => {
      const element = document.getElementById("optional-printed-gifts");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <div className="flex  pt-bookPT justify-between smd:flex-col smd:pt-0 gap-10  smd:gap-0 ">
        <div className="md:pt-10  md:pl-[40px] ">
          {donations.length > 0 ? (
            donations.map((product) => (
              <CheckoutContributionEl
                key={product.id}
                id={product.id}
                name={product.product_name}
                quantity={product.quantity}
                total={product.price * product.quantity}
                language={product.product_language}
                imgPath={
                  extraProducts.find((p) => p.title === product.product_name)
                    ?.imagePath
                }
              />
            ))
          ) : (
            <>
              <DonationOption
                price={price}
                setLang={setLang}
                setPrice={setPrice}
                setIsChecked={setIsChecked}
                checkboxIsHidden={true}
              />
            </>
          )}
        </div>
        <SummaryUniversal
          subTotal={totalFee}
          shippingFee={0}
          isDonation={true}
        />
      </div>
      <CartIncludedWidget />
      <div className="flex flex-col smd2:flex-row gap-4 items-center gap-x-10">
        <ButtonTo
          onClick={() =>
            handleAddProduct(
              "Donation",
              price as number,
              quantity,
              lang as string,
              isChecked,
              id,
              0
            )
          }
          to={price >= 3 || totalFee >= 3 ? "/checkout-donation/details" : ""}
          title="NEXT STEP"
          style="text-center uppercase hover:bg-purpleHover transition duration-300 font-secondarySBold bg-primPurple text-primWhite py-4 px-bookPT text-[24px]
          xl:text-[20px]
          lg:text-[18px]
          smd:text-[18px] 
          sm:w-full sm:px-0 sm:block"
        />
        <button
          onClick={handleNavigateToGifts}
          className="text-copyS mt-4 smd2:mt-0 hover:text-purpleHover transition duration-300"
        >
          or View Optional Printed Gifts
        </button>
      </div>
    </>
  );
};

export default CheckoutContributionWO;

// import Footer from "@/components/Footer";
import SubDonation from "@/components/SubDonation";
import { includedProducts, extraProducts } from "@/utilities/data";
import { useParams } from "react-router-dom";

const SubDonationPage = () => {
  const { product } = useParams();

  const productToDisplay = includedProducts
    .concat(extraProducts)
    .find((el) => el.element === product);

  return (
    <>
      {productToDisplay && (
        <SubDonation
          title={productToDisplay.title}
          description={productToDisplay.description}
          imagePath={productToDisplay.imagePath}
        />
      )}
    </>
  );
};

export default SubDonationPage;

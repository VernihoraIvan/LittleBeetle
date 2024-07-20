import Footer from "@/components/Footer";
import SubDonation from "@/components/SubDonation";
import { productDescriptions } from "@/utilities/creatorsData";
import { useParams } from "react-router-dom";

const SubDonationPage = () => {
  const { product } = useParams();

  const productToDisplay = productDescriptions.find(
    (el) => el.element === product
  );
  return (
    <>
      {productToDisplay && (
        <SubDonation
          title={productToDisplay.title}
          description={productToDisplay.description}
          imagePath={productToDisplay.imagePath}
        />
      )}
      <Footer />
    </>
  );
};

export default SubDonationPage;

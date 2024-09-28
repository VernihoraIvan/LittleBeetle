import { ProductElOptionalProps } from "@/utilities/interfaces";
// import ButtonTo from "../ButtonTo";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SubDonation from "../SubDonation";
import { useState } from "react";

const ProductElOptional = ({
  title,
  imgPath,
  description,
}: ProductElOptionalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <li className="flex-1">
      <img
        className="h-imgH2 w-full object-cover smd:h-[165px] sm:h-[135px] xs:h-[320px] lg:h-[290px] "
        src={imgPath[0]}
        alt="image of a book"
      />
      <h3
        className=" mt-prodMar leading-relaxed text-secBlack text-buttonS font-secondaryBold
      lg:text-[22px]
      md:text-[18px]
      smd:text-[18px]"
      >
        {title}
      </h3>
      <div className="flex justify-between mt-9">
        {/* <ButtonTo
          to={`${to}`}
          style="hover:bg-whiteHover transition duration-300 w-full text-addCartS font-secondarySBold border border-primPurple text-primPurple py-3 block text-center
          lg:text-[22px]
      md:text-[18px]
      smd:text-[18px]"
          title="Learn more"
        /> */}

        <Popup
          className="popup-content-two"
          contentStyle={{
            width: "100%", // Set the desired width
            padding: "20px",
            marginRight: "40px",
            marginLeft: "40px", // Padding for content
          }}
          overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          open={isOpen}
          onClose={closeModal}
          modal
          nested
          trigger={
            <button
              className="hover:bg-whiteHover transition duration-300 w-full text-addCartS font-secondarySBold border border-primPurple text-primPurple py-3 block text-center
          lg:text-[22px]
      md:text-[18px]
      smd:text-[18px]"
              onClick={openModal}
            >
              Learn more
            </button>
          }
        >
          <SubDonation
            title={title}
            description={description}
            imagePath={imgPath}
          />
        </Popup>
      </div>
    </li>
  );
};
export default ProductElOptional;

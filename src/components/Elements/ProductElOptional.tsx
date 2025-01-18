import { ProductElOptionalProps } from "@/utilities/interfaces";
// import ButtonTo from "../ButtonTo";
// import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SubDonation from "../SubDonation";
// import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const ProductElOptional = ({
  title,
  imgPath,
  description,
  weight,
}: ProductElOptionalProps) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);;
  //
  return (
    <li className="flex-1">
      <img
        className="h-imgH2 w-full object-cover smd:h-[165px] sm:h-[135px] xs:h-[320px] lg:h-[290px] "
        src={imgPath[0]}
        alt="image of a book"
      />
      <h3 className=" mt-prodMar leading-relaxed text-secBlack responsive-heading font-secondaryBold ">
        {title}
      </h3>
      <div className=" mt-9">
        {/* <ButtonTo
          to={`${to}`}
          style="hover:bg-whiteHover transition duration-300 w-full text-addCartS font-secondarySBold border border-primPurple text-primPurple py-3 block text-center
          lg:text-[22px]
      md:text-[18px]
      smd:text-[18px]"
          title="Learn more"
        /> */}
        <div className="bg-primBeige">
          <Sheet>
            <SheetTitle className="sr-only">{title}</SheetTitle>
            <SheetTrigger className="hover:bg-whiteHover transition duration-300 w-full responsive-heading font-secondarySBold border border-primPurple text-primPurple py-3 block text-center">
              Learn more
            </SheetTrigger>
            <SheetContent
              className="h-fit-content fixed custom-scrollbar xxl:w-contWXXL xl:w-contWXL lg:w-contWLG   flex gap-10 overflow-y-auto
        md:flex-col  left-[50%]  top-1/2 flex w-[90vw] max-w-[1564px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-md "
            >
              {/* <SheetContent className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-fit-content custom-scrollbar xxl:w-contWXXL xl:w-contWXL lg:w-contWLG md:w-contWMD sm:w-contWSM xs:w-[360px] xxs:w-contWXSS flex gap-10 overflow-y-auto md:flex-col smd:w-[480px] w-[90vw] max-w-[1564px] rounded-md"> */}

              {/* <SheetHeader>
                <SheetTitle>{title}</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader> */}
              <SubDonation
                title={title}
                description={description}
                imagePath={imgPath}
                weight={weight}
              />
            </SheetContent>
          </Sheet>
        </div>

        {/* <Popup
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
              className="hover:bg-whiteHover transition duration-300 w-full responsive-heading font-secondarySBold border border-primPurple text-primPurple py-3 block text-center"
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
        </Popup> */}
      </div>
    </li>
  );
};
export default ProductElOptional;

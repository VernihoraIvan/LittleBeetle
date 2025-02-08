import { ProductElOptionalProps } from "@/utilities/interfaces";
import "reactjs-popup/dist/index.css";
import SubDonation from "../SubDonation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useState } from "react";

const ProductElOptional = ({
  title,
  imgPath,
  description,
  weight,
  size,
}: ProductElOptionalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="flex-1">
      <img
        className="h-imgH2 w-full object-cover smd:h-[165px] sm:h-[135px] xs:h-[320px] lg:h-[290px] "
        src={imgPath[0]}
        alt="image of a book"
      />
      <h3 className="text-center mt-prodMar leading-relaxed text-secBlack responsive-heading font-secondaryBold ">
        {title}
      </h3>
      <div className=" mt-9">
        <div className="bg-primBeige">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTitle className="sr-only">{title}</SheetTitle>
            <SheetTrigger className="hover:bg-whiteHover transition duration-300 w-full responsive-heading font-secondarySBold border border-primPurple text-primPurple py-3 block text-center">
              Learn more
            </SheetTrigger>
            <SheetContent
              className="h-fit-content fixed custom-scrollbar xxl:w-contWXXL xl:w-contWXL lg:w-contWLG   flex gap-10 overflow-y-auto
        md:flex-col  left-[50%]  top-1/2 flex w-[90vw] max-w-[1564px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-md "
            >
              <SubDonation
                title={title}
                description={description}
                imagePath={imgPath}
                weight={weight}
                size={size}
                setOpen={setOpen}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </li>
  );
};
export default ProductElOptional;

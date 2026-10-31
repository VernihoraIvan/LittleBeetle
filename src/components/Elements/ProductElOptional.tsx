import { useState } from "react";
import { ProductElOptionalProps } from "@/utilities/interfaces";
import SubDonation from "../SubDonation";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

const ProductElOptional = ({ product }: ProductElOptionalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="card group flex flex-col overflow-hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          className="aspect-[4/3] overflow-hidden"
          aria-label={`View ${product.title}`}
        >
          <img
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            src={product.imagePath[0]}
            alt={product.title}
            loading="lazy"
          />
        </SheetTrigger>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="heading-3">{product.title}</h3>
            <p className="shrink-0 font-secondarySBold text-primPurple/70">
              from £{product.prices[0]}
            </p>
          </div>
          <p className="body mt-2 line-clamp-3 text-primPurpleFaint">
            {product.description}
          </p>
          <div className="mt-auto pt-5">
            <SheetTrigger className="btn-outline w-full">Learn more</SheetTrigger>
          </div>
        </div>
        <SheetContent aria-describedby={undefined}>
          <SheetTitle className="sr-only">{product.title}</SheetTitle>
          <SubDonation product={product} setOpen={setOpen} />
        </SheetContent>
      </Sheet>
    </li>
  );
};
export default ProductElOptional;

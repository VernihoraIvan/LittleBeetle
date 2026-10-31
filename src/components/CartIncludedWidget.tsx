import { includedProducts } from "@/utilities/data";
import { Mail } from "lucide-react";

const CartIncludedWidget = () => {
  return (
    <section className="rounded-2xl border border-dashed border-primPurple/25 p-5">
      <h3 className="font-secondaryBold text-[15px]">
        Included with every donation
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {includedProducts.map((item) => (
          <li key={item.element} className="flex items-center gap-3">
            <img
              className="h-11 w-14 shrink-0 rounded-lg object-cover"
              src={item.imagePath[0]}
              alt=""
              loading="lazy"
            />
            <span className="body">{item.title}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex gap-2 caption text-primPurple/70">
        <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        You’ll receive your digital files via email immediately after payment.
      </p>
    </section>
  );
};

export default CartIncludedWidget;

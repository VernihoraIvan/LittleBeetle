import { Gift, Trash2 } from "lucide-react";
import { PurchaseElProps } from "@/utilities/interfaces";
import { useCart } from "@/zustand/productStore";
import QuantityAdjuster from "@/components/QuantityAdjuster";
import { useShipment } from "@/zustand/shipmentStore";
import { useStage } from "@/zustand/stageStore";
import { useOrderLines } from "@/zustand/orderLinesStore";

const PurchaseEl = ({ name, price, imgPath, id, language }: PurchaseElProps) => {
  const removeProduct = useCart((state) => state.removeFromCart);
  const removeOrderLines = useOrderLines((state) => state.removeOrderLines);
  const quantity = useCart(
    (state) => state.items.find((item) => item.id === id)?.quantity ?? 0
  );
  const isGift = useCart(
    (state) => state.items.find((item) => item.id === id)?.isAGift ?? false
  );
  const setAGift = useCart((state) => state.setAGift);
  const removeFee = useShipment((state) => state.removeFee);
  const setStage = useStage((state) => state.setStage);

  const removeProductHandler = () => {
    removeOrderLines(id);
    removeProduct(id);
    removeFee(id);
    setStage(1);
  };

  return (
    <li className="card flex gap-4 p-4 md:gap-6 md:p-5">
      {imgPath && (
        <img
          className="h-24 w-24 shrink-0 rounded-xl object-cover md:h-32 md:w-40"
          src={imgPath[0]}
          alt=""
        />
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="heading-3">{name}</h3>
            <p className="caption text-primPurple/60">
              {name !== "Postcards" && <>{language} · </>}£{price} each
            </p>
          </div>
          <button
            type="button"
            onClick={removeProductHandler}
            aria-label={`Remove ${name}`}
            className="icon-btn -mr-2 -mt-1 text-primPurple/50 hover:text-alertRed"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>

        <label
          htmlFor={`gift-${id}`}
          className="mt-3 inline-flex cursor-pointer items-center gap-2 self-start rounded-lg py-1 body"
        >
          <input
            className="checkbox mt-0"
            type="checkbox"
            id={`gift-${id}`}
            checked={isGift}
            onChange={(e) => setAGift(id, e.target.checked)}
          />
          <Gift className="h-4 w-4 text-primPurple/60" aria-hidden="true" />
          It's a gift
        </label>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3">
          <QuantityAdjuster id={id} />
          <p className="font-secondaryBold text-lg tabular-nums">
            £{(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </li>
  );
};
export default PurchaseEl;

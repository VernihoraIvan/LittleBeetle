import { ReactNode } from "react";
import { SummaryProps } from "@/utilities/interfaces";
import { useOrderLines } from "@/zustand/orderLinesStore";
import { DELIVERY_COEFFICIENT } from "@/lib/delivery";


const formatGBP = (value: number) => `£${value.toFixed(2)}`;

export interface SummaryItem {
  id: string;
  name: string;
  detail?: string;
  amount: number;
}

const SummaryUniversal = ({
  subTotal,
  shippingFee,
  isDonation,
  items,
  children,
}: SummaryProps & { items?: SummaryItem[]; children?: ReactNode }) => {
  const { orderLines } = useOrderLines();
  const showDelivery = orderLines.length > 0 && !isDonation;
  const deliveryTotal = orderLines.reduce(
    (sum, line) =>
      sum +
      (line.totalDeliveryFee && line.totalDeliveryFee !== 0
        ? line.totalDeliveryFee
        : 0),
    0
  );
  const total = isDonation
    ? subTotal
    : subTotal + (shippingFee || 0) + deliveryTotal * DELIVERY_COEFFICIENT;

  return (
    <div className="card overflow-hidden">
      <h2 className="border-b border-primPurple/10 px-6 py-4 font-secondaryBold text-lg">
        Summary
      </h2>
      <div className="px-6 py-5">
        {items && items.length > 0 && (
          <ul className="mb-4 space-y-3 border-b border-primPurple/10 pb-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between gap-4 body">
                <span className="min-w-0">
                  <span className="block truncate font-secondarySBold">
                    {item.name}
                  </span>
                  {item.detail && (
                    <span className="caption text-primPurple/60">
                      {item.detail}
                    </span>
                  )}
                </span>
                <span className="shrink-0 tabular-nums">
                  {formatGBP(item.amount)}
                </span>
              </li>
            ))}
          </ul>
        )}

        {showDelivery && (
          <dl className="mb-4 space-y-2 border-b border-primPurple/10 pb-4 body text-primPurple/70">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="tabular-nums">{formatGBP(subTotal)}</dd>
            </div>
            {orderLines.map(
              (orderLine, index) =>
                orderLine.totalDeliveryFee !== 0 && (
                  <div key={index} className="flex justify-between gap-4">
                    <dt>Delivery to {orderLine.address.country}</dt>
                    <dd className="tabular-nums">
                      {formatGBP(
                        (orderLine.totalDeliveryFee || 0) * DELIVERY_COEFFICIENT
                      )}
                    </dd>
                  </div>
                )
            )}
          </dl>
        )}

        <div className="flex items-baseline justify-between">
          <span className="font-secondaryBold">Total</span>
          <span className="font-primaryBold text-2xl tabular-nums">
            {formatGBP(total)}
          </span>
        </div>
        {children && <div className="mt-5 flex flex-col gap-3">{children}</div>}
      </div>
    </div>
  );
};

export default SummaryUniversal;

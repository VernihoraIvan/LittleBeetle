import { SummaryProps } from "@/utilities/interfaces";
import { useOrderLines } from "@/zustand/orderLinesStore";

const SummaryUniversal = ({ subTotal }: SummaryProps) => {
  const { orderLines } = useOrderLines();

  return (
    <div className="flex flex-col gap-prodMar smd:pt-[40px] ">
      <div
        className="w-[420px] border border-primPurple
        xl:w-[285px] 
        lg:w-[230px]
        smd:w-full"
      >
        <div
          className="px-prodMar py-4 font-secondaryBold text-[24px] text-primWhite bg-primPurple 
          xl:text-[18px]
          lg:text-[18px]
          md:text-[16px]
          sm:text-[16px]"
        >
          Summary
        </div>
        <div>
          <div
            className="px-[30px] py-[36px] 
            xl:px-[28px] xl:py-[24px]
            lg:px-[24px] lg:py-[20px]
            smd:px-[20px] smd:py-[26px]"
          >
            {orderLines.length > 0 && (
              <>
                {/* Subtotal */}
                <div
                  className="flex justify-between text-linkS text-inputPink mb-4
              xl:text-[18px]
              lg:text-[18px]
              md:text-[14px]
              sm:text-[14px]"
                >
                  <p className="font-secondaryBold">Subtotal</p>
                  <p className="font-secondaryRegular text-inputPink">
                    £{subTotal}
                  </p>
                </div>

                {/* Delivery fees per order line */}
                {/* Delivery fees per order line */}
                {orderLines.map((orderLine, index) => (
                  <div
                    key={index}
                    className="flex justify-between text-linkS text-inputPink mb-2
                xl:text-[18px]
                lg:text-[18px]
                md:text-[14px]
                sm:text-[14px]"
                  >
                    <p className="font-secondaryRegular">
                      Delivery to {orderLine.address.country}
                      {/* <span className="text-xs block text-gray-500">
                        ({orderLine.products.length} items,{" "}
                        {orderLine.totalWeight.toFixed(1)}kg)
                      </span> */}
                    </p>
                    <p className="font-secondaryRegular text-inputPink">
                      £{orderLine.totalDeliveryFee?.toFixed(2)}
                    </p>
                  </div>
                ))}

                {/* Separator line */}
                <div className="border-t border-primPurple my-4"></div>
              </>
            )}
            {/* Total */}
            <div
              className="flex justify-between text-linkS text-primPurple
              xl:text-[18px]
              lg:text-[18px]
              md:text-[14px]
              sm:text-[14px]"
            >
              <p className="font-secondaryBold smd:mr-[100px]">Total</p>
              <p className="font-secondaryRegular text-inputPink">
                £
                {(
                  subTotal +
                  orderLines.reduce(
                    (sum, line) => sum + (line.totalDeliveryFee || 0),
                    0
                  )
                ).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryUniversal;

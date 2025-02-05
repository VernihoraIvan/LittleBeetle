import { SummaryProps } from "@/utilities/interfaces";
import { useOrderLines } from "@/zustand/orderLinesStore";

const SummaryUniversal = ({
  subTotal,
  shippingFee,
  isDonation,
}: SummaryProps) => {
  const { orderLines } = useOrderLines();

  return (
    <div className="smd:flex  smd2:w-[350px] smd:flex-col min:min-w-[300px] smd:mx-auto smd:w-full gap-prodMar smd:pt-[40px] max-w-[708px] xxs:w-full ">
      <div
        className="w-full border border-primPurple ml-auto md:w-full


        
        lg:w-[300px]
        xxs:w-full
        smd2:w-[350px]
        "
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
            {orderLines.length > 0 && !isDonation && (
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
                    £{subTotal.toFixed(2)}
                  </p>
                </div>

                {/* Only show shipping fee if it's not 0 */}
                {/* {shippingFee !== 0 && (
                  <div
                    className="flex justify-between text-linkS text-inputPink mb-4
                  xl:text-[18px]
                  lg:text-[18px]
                  md:text-[14px]
                  sm:text-[14px]"
                  >
                    <p className="font-secondaryRegular">Shipping Fee</p>
                    <p className="font-secondaryRegular text-inputPink">
                      £{shippingFee.toFixed(2)}
                    </p>
                  </div>
                )} */}

                {/* Delivery fees per order line */}
                {orderLines.map(
                  (orderLine, index) =>
                    orderLine.totalDeliveryFee !== 0 && (
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
                        </p>
                        <p className="font-secondaryRegular text-inputPink">
                          £{orderLine.totalDeliveryFee?.toFixed(2)}
                        </p>
                      </div>
                    )
                )}

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
                {isDonation
                  ? subTotal.toFixed(2)
                  : (
                      subTotal +
                      (shippingFee || 0) +
                      orderLines.reduce(
                        (sum, line) =>
                          sum +
                          (line.totalDeliveryFee && line.totalDeliveryFee !== 0
                            ? line.totalDeliveryFee
                            : 0),
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

import { CheckoutContributionElProps } from "@/utilities/interfaces";

const CheckoutContributionEl = ({
  name,
  total,
  imgPath,
  language,
}: CheckoutContributionElProps) => {
  return (
    <div className="relative mt-10 mb-prodMar flex justify-between w-full pr-6 ">
      <div className="flex items-center">
        {imgPath && (
          <img
            className="h-purchImgH mr-12 w-imgSW"
            src={imgPath[0]}
            alt="image of a book"
          />
        )}
        <div className="flex flex-col">
          <h3 className="w-[180px] text-secBlack text-linkS font-secondarySBold">
            {name}
          </h3>
          {name !== "Postcards" && (
            <h4 className="mb-2 text-inputPink text-base font-secondaryRegular ">
              Language: {language}
            </h4>
          )}
          <p className="items-center w-10 text-copyS font-secondarySBold">
            £{total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContributionEl;

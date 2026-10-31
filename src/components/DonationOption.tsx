import { DonationOptionProps } from "@/utilities/interfaces";
import { AmountPicker, LanguagePicker } from "./Elements/ChoiceControls";

export const MIN_DONATION = 3;

const DonationOption = ({
  price,
  setPrice,
  lang,
  setLang,
}: DonationOptionProps) => {
  return (
    <div className="card flex flex-col gap-7 p-5 md:p-8">
      <AmountPicker
        amounts={[3, 5, 10]}
        min={MIN_DONATION}
        value={price}
        onChange={setPrice}
      />
      <div>
        <LanguagePicker value={lang} onChange={setLang} />
        <p className="caption mt-2 text-primPurple/60">
          For the digital book and lullaby in your gift package.
        </p>
      </div>
    </div>
  );
};

export default DonationOption;

import { useState } from "react";
import clsx from "clsx";
import { Minus, Plus } from "lucide-react";

interface AmountPickerProps {
  amounts: number[];
  value: number;
  min: number;
  onChange: (value: number) => void;
  label?: string;
}

export const AmountPicker = ({
  amounts,
  value,
  min,
  onChange,
  label = "Donation amount",
}: AmountPickerProps) => {
  const [isCustom, setIsCustom] = useState(
    value > 0 && !amounts.includes(value)
  );
  const [custom, setCustom] = useState(isCustom ? String(value) : "");
  const customTooLow = isCustom && custom !== "" && Number(custom) < min;

  const selectPreset = (amount: number) => {
    setIsCustom(false);
    onChange(amount);
  };

  const selectCustom = () => {
    setIsCustom(true);
    onChange(custom === "" ? 0 : Number(custom));
  };

  return (
    <fieldset>
      <legend className="field-label">{label}</legend>
      <div
        className="grid grid-cols-2 gap-2 md:grid-cols-4"
        role="group"
        aria-label={label}
      >
        {amounts.map((amount) => {
          const active = !isCustom && value === amount;
          return (
            <button
              key={amount}
              type="button"
              aria-pressed={active}
              onClick={() => selectPreset(amount)}
              className={clsx("chip", active && "chip-active")}
            >
              £{amount}
            </button>
          );
        })}
        {/* "Other" turns into the input in place, so nothing below moves */}
        {isCustom ? (
          <div className="relative">
            <label htmlFor="customPrice" className="sr-only">
              Enter your own amount
            </label>
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-secondarySBold text-primPurple">
              £
            </span>
            <input
              id="customPrice"
              autoFocus
              autoComplete="off"
              type="number"
              inputMode="numeric"
              min={min}
              placeholder={`${min}+`}
              value={custom}
              onChange={(e) => {
                setCustom(e.target.value);
                onChange(e.target.value === "" ? 0 : Number(e.target.value));
              }}
              className={clsx(
                "field-input border-primPurple pl-8 font-secondarySBold",
                customTooLow && "field-input-error"
              )}
              aria-invalid={customTooLow}
              aria-describedby="customPrice-hint"
            />
          </div>
        ) : (
          <button
            type="button"
            aria-pressed={false}
            onClick={selectCustom}
            className="chip"
          >
            Other
          </button>
        )}
      </div>
      <p
        id="customPrice-hint"
        className={clsx(
          "mt-2 text-sm transition-colors duration-200",
          customTooLow ? "text-alertRed" : "text-primPurple/60"
        )}
      >
        Minimum donation: £{min}
      </p>
    </fieldset>
  );
};

interface LanguagePickerProps {
  value: string;
  onChange: (value: string) => void;
}

const languages = ["English", "Ukrainian"];

export const LanguagePicker = ({ value, onChange }: LanguagePickerProps) => (
  <fieldset>
    <legend className="field-label">Language</legend>
    <div
      className="grid grid-cols-2 gap-1 rounded-xl bg-primPurple/[0.06] p-1"
      role="group"
      aria-label="Language"
    >
      {languages.map((lang) => {
        const active = value === lang;
        return (
          <button
            key={lang}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(lang)}
            className={clsx(
              "min-h-[44px] rounded-lg font-secondarySBold transition-[background-color,color,box-shadow] duration-200",
              active
                ? "bg-primWhite text-primPurple shadow-card"
                : "text-primPurple/60 hover:text-primPurple"
            )}
          >
            {lang}
          </button>
        );
      })}
    </div>
  </fieldset>
);

interface QuantityStepperProps {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  decrementDisabled?: boolean;
  label?: string;
}

export const QuantityStepper = ({
  value,
  onDecrement,
  onIncrement,
  decrementDisabled,
  label = "Quantity",
}: QuantityStepperProps) => (
  <div
    className="inline-flex items-center rounded-full border border-primPurple/20 bg-primWhite p-1"
    role="group"
    aria-label={label}
  >
    <button
      type="button"
      onClick={onDecrement}
      disabled={decrementDisabled}
      aria-label="Decrease quantity"
      className="icon-btn h-9 w-9 disabled:opacity-30"
    >
      <Minus className="h-4 w-4" />
    </button>
    <span
      className="w-8 text-center font-secondarySBold tabular-nums"
      aria-live="polite"
    >
      {value}
    </span>
    <button
      type="button"
      onClick={onIncrement}
      aria-label="Increase quantity"
      className="icon-btn h-9 w-9"
    >
      <Plus className="h-4 w-4" />
    </button>
  </div>
);

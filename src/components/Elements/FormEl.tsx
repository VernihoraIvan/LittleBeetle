import { ChangeEvent, useEffect } from "react";
import clsx from "clsx";
import { Field, useField, useFormikContext } from "formik";
import { AlertCircle } from "lucide-react";
import { FormElProps } from "@/utilities/interfaces";
import { availableCountries } from "@/utilities/data";

const FieldError = ({ id, message }: { id: string; message?: string }) =>
  message ? (
    <p id={id} className="field-error" role="alert">
      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  ) : null;

const RequiredMark = () => (
  <span className="text-alertRed" aria-hidden="true">
    {" "}
    *
  </span>
);

const FormEl = ({
  title,
  element,
  isRequired,
  type = "text",
  autoComplete,
  className,
  idPrefix,
}: FormElProps) => {
  const [field, meta] = useField(element);
  const error = meta.touched ? meta.error : undefined;
  const inputId = idPrefix ? `${idPrefix}-${element}` : element;
  const errorId = `${inputId}-error`;

  return (
    <div className={clsx("flex flex-col", className)}>
      <label className="field-label" htmlFor={inputId}>
        {title}
        {isRequired ? (
          <RequiredMark />
        ) : (
          <span className="font-secondaryRegular text-primPurple/50">
            {" "}
            (optional)
          </span>
        )}
      </label>
      <input
        {...field}
        value={field.value ?? ""}
        id={inputId}
        type={type}
        autoComplete={autoComplete}
        aria-required={isRequired}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={clsx("field-input", error && "field-input-error")}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
};

export const CountryField = ({
  onChange,
  className,
  idPrefix,
}: {
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  idPrefix?: string;
}) => {
  const [field, meta] = useField("country");
  const error = meta.touched ? meta.error : undefined;
  const inputId = idPrefix ? `${idPrefix}-country` : "country";

  return (
    <div className={clsx("flex flex-col", className)}>
      <label className="field-label" htmlFor={inputId}>
        Country
        <RequiredMark />
      </label>
      <select
        {...field}
        value={field.value ?? ""}
        id={inputId}
        autoComplete="country-name"
        aria-required
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        onChange={onChange ?? field.onChange}
        className={clsx("field-select", error && "field-input-error")}
      >
        <option value="" disabled>
          Select a country
        </option>
        {availableCountries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <FieldError id={`${inputId}-error`} message={error} />
    </div>
  );
};

export const ConsentField = () => {
  const [, meta] = useField("email_consent");
  const error = meta.touched ? meta.error : undefined;

  return (
    <div className="md:col-span-2">
      <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-primPurple/[0.04] p-4">
        <Field
          type="checkbox"
          name="email_consent"
          className="checkbox"
          aria-invalid={!!error}
          aria-describedby={error ? "email_consent-error" : undefined}
        />
        <span className="caption text-primPurple/80">
          I agree to receive emails containing my Digital Gift Package, project
          updates, and other relevant information. I understand that my personal
          details will be used in accordance with the{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            className="font-secondarySBold text-primPurple underline underline-offset-2 hover:text-purpleHover"
          >
            Privacy Policy
          </a>{" "}
          and that I can unsubscribe at any time.
          <RequiredMark />
        </span>
      </label>
      <FieldError id="email_consent-error" message={error} />
    </div>
  );
};

/** After a failed submit, move focus to the first invalid field. */
export const FocusFirstError = () => {
  const { submitCount, isValid, errors } = useFormikContext();
  useEffect(() => {
    if (submitCount === 0 || isValid) return;
    const first = Object.keys(errors as object)[0];
    const el = first && document.getElementById(first);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus({ preventScroll: true });
    } else if (first === "email_consent") {
      document
        .querySelector<HTMLInputElement>('input[name="email_consent"]')
        ?.focus();
    }
    // only react to new submit attempts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitCount]);
  return null;
};

export default FormEl;

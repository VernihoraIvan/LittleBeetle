import { FormElProps } from "@/utilities/interfaces";
import clsx from "clsx";
import { Field } from "formik";

const FormEl = ({
  errors,
  touched,
  title,
  element,
  isRequired,
  setEmailConsent,
  emailConsent,
}: FormElProps) => {
  return (
    <li className="flex flex-col ">
      <label className="font-secondaryBold " htmlFor={element}>
        {title} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center mt-4 xl:mt-3 lg:mt-2 smd:mt-2 smd:flex-col ">
        <Field
          id={element}
          name={element}
          className={clsx(
            "w-full smd:w-full outline-none border border-primPurpleFaintM py-3 px-4 text-inputPink text-[24px] font-secondaryRegular xl:text-[18px]  xl:py-3 lg:text-[14px] lg:px-2 smd2:py-[6px] smd:text-[14px] smd:px-2 smd:py-[6px]",
            errors && isRequired && touched.first_name && "border-red-500"
          )}
        />
        {isRequired && errors && touched.first_name ? (
          <div
            className="text-alertRed text-linkS font-secondaryRegular ml-4
          xl:text-[18px]
          lg:text-[14px]
          smd:text-[14px] smd:mt-2"
          >
            {errors}
          </div>
        ) : null}
      </div>
      {setEmailConsent && (
        <div className="flex items-start gap-2 mt-2 ">
          <div
            className="relative w-5 h-5 cursor-pointer border border-primPurpleFaintM rounded flex items-center justify-center"
            onClick={() => setEmailConsent && setEmailConsent(!emailConsent)}
            role="checkbox"
            aria-checked={!!emailConsent}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setEmailConsent && setEmailConsent(!emailConsent);
              }
            }}
          >
            {emailConsent && (
              <div className="w-3 h-3 bg-primPurpleFaintM rounded-sm"></div>
            )}
          </div>
          <p className="font-secondaryRegular text-primPurpleFaintM text-sm w-[80%] max-w-[800px]">
            I agree to receive emails containing my Digital Gift Package,
            project updates, and other relevant information. I understand that
            my personal details will be used in accordance with the{" "}
            <a
              href="/privacy-policy"
              className="underline text-primPurple hover:text-blue-700 font-secondaryBold"
            >
              Privacy Policy
            </a>{" "}
            and that I can unsubscribe at any time.
          </p>
        </div>
      )}
    </li>
  );
};

export default FormEl;

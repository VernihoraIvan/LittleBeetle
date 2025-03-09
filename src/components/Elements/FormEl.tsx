import { FormElProps } from "@/utilities/interfaces";
import clsx from "clsx";
import { Field } from "formik";

const FormEl = ({
  errors,
  touched,
  title,
  element,
  isRequired,
}: FormElProps) => {
  return (
    <li className="flex flex-col ">
      <label className="font-secondaryBold " htmlFor={element}>
        {title} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="flex  mt-4 xl:mt-3 lg:mt-2 smd:mt-2 smd:flex-col ">
        <Field
          id={element}
          name={element}
          className={clsx(
            "w-full smd:w-full outline-none border border-primPurpleFaintM py-3 px-4 text-inputPink text-[24px] font-secondaryRegular xl:text-[18px]  xl:py-3 lg:text-[14px] lg:px-2 smd2:py-[6px] smd:text-[14px] smd:px-2 smd:py-[6px] max-w-[500px]  ",
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
    </li>
  );
};

export default FormEl;

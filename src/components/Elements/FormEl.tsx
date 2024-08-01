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
      <label className="font-secondaryBold text-2xl" htmlFor={element}>
        {title} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="flex items-center mt-4">
        <Field
          id={element}
          name={element}
          className={clsx(
            "w-prodW outline-none  border border-primPurpleFaintM py-3 px-4 text-inputPink text-2xl font-secondaryRegular",
            errors && isRequired && touched.firstName && "border-red-500"
          )}
        />
        {isRequired && errors && touched.firstName ? (
          <div className="text-alertRed text-linkS font-secondaryRegular ml-4">
            {errors}
          </div>
        ) : null}
      </div>
    </li>
  );
};

export default FormEl;

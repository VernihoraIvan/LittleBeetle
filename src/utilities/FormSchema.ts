import * as Yup from "yup";

export const SubmitSchema = Yup.object().shape({
  first_name: Yup.string().required("This field is required."),
  last_name: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Invalid email")
    .required("This field is required."),
  country: Yup.string().required("This field is required."),
  street_adress: Yup.string().required("This field is required."),
  street_adress2: Yup.string(),
  phone: Yup.string(),
  city: Yup.string().required("This field is required."),
  postal_code: Yup.string().required("This field is required."),
});

export const SubmitSchemaWO = Yup.object().shape({
  first_name: Yup.string().required("This field is required."),
  last_name: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Invalid email")
    .required("This field is required."),
  email_consent: Yup.boolean().oneOf([true], "Email consent is required"),
  phone: Yup.string(),
});

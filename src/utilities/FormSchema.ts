import * as Yup from "yup";

export const SubmitSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required."),
  lastName: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Invalid email")
    .required("This field is required."),
  country: Yup.string().required("This field is required."),
  streetAdress: Yup.string().required("This field is required."),
  streetAdress2: Yup.string(),
  phone: Yup.string(),
  city: Yup.string().required("This field is required."),
  postalCode: Yup.string().required("This field is required."),
});

export const SubmitSchemaWO = Yup.object().shape({
  firstName: Yup.string().required("This field is required."),
  lastName: Yup.string().required("This field is required."),
  email: Yup.string()
    .email("Invalid email")
    .required("This field is required."),
  phone: Yup.string(),
});

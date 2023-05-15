import { FieldProps, FormikProps } from "formik";

export type AppFormType = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type AppFieldPropsType = {
  field: FieldProps["field"];
  form: FormikProps<AppFormType>;
};

import React from "react";
import { FieldProps, FormikProps } from "formik";

export type AppFormType = {
  name: string;
  email: string;
  phoneNumber: string;
  billingType: string;
  billingName: string;
} & {
  [key: string]: string;
};

export type ErrorFormType = {
  name?: string;
  email?: string;
  phoneNumber?: string;
  billingType?: string;
  billingName?: string;
  [key: string]: string | undefined;
};

export type AppFieldPropsType = {
  field: FieldProps["field"];
  form: FormikProps<AppFormType>;
};

type StepStatus = "complete" | "active" | "incomplete";

export type UseStepReturnPropsType = {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  activeStepPercent: number;
  isActiveStep(step: number): boolean;
  isCompleteStep(step: number): boolean;
  isIncompleteStep(step: number): boolean;
  getStatus(step: number): StepStatus;
  goToNext(): void;
  goToPrevious(): void;
};

export type FormsType = {
  [key: number]: React.JSX.Element;
};

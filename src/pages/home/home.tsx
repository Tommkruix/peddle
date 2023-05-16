"use client";

import React, { useState } from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import VerticalStep from "@src/components/VerticalStep/VerticalStep";
import { AppFormType, ErrorFormType } from "@src/utils/types";
import { validateField } from "@src/utils/helpers";

const errorMapping: { [key: string]: string } = {
  name: "Name",
  email: "Email Address",
  phoneNumber: "Phone Number",
  billingType: "Billing Type",
  billingName: "Billing Name",
};

const Home: React.FC = () => {
  const [data] = useState<AppFormType>({
    name: "",
    email: "",
    phoneNumber: "",
    billingType: "",
    billingName: "",
  });

  const isMobile = useBreakpointValue({
    lg: false,
    md: false,
    base: true,
  });

  const handleSubmit = (values: AppFormType) => {
    const errors: ErrorFormType = {};

    Object.keys(values).forEach((key) => {
      if (key) {
        if (validateField(errorMapping[key], values[key]) != undefined)
          errors[key] = validateField(errorMapping[key], values[key]);
      }
    });

    return errors;
  };

  return (
    <Flex
      display={"grid"}
      paddingLeft={isMobile ? "0px" : "72px"}
      paddingRight={isMobile ? "0px" : "72px"}
      paddingTop={isMobile ? "0px" : "72px"}
      paddingBottom={isMobile ? "0px" : "72px"}
      background={isMobile ? "none" : "gray.200"}
      height={isMobile ? "300px" : "900px"}
    >
      <Formik
        initialValues={data}
        validate={handleSubmit}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2)); // get your form details
            actions.setSubmitting(false);
            actions.resetForm();
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <VerticalStep formikProp={props} />
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default Home;

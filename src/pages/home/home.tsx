"use client";

import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Form, Formik } from "formik";

import VerticalStep from "@src/components/VerticalStep/VerticalStep";
import { useState } from "react";
import { AppFormType } from "@src/utils/types";

function Home() {
  const [data, setData] = useState<AppFormType>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const isMobile = useBreakpointValue({
    lg: false,
    md: false,
    base: true,
  });

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
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
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
}

export default Home;

import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  useBreakpointValue,
  Switch,
} from "@chakra-ui/react";
import Image from "next/image";
import { Field } from "formik";
import { AppFieldPropsType } from "@src/utils/types";
import { validateField } from "@src/utils/helpers";

import { icon } from "@public/assets";

const billingNames: { id: number; title: string; amount: string; icon: any }[] =
  [
    { id: 1, title: "Arcade", amount: "$9/mo", icon: icon.arcade },
    { id: 2, title: "Advanced", amount: "$12/mo", icon: icon.advanced },
    { id: 3, title: "Pro", amount: "$15/mo", icon: icon.pro },
  ];

const FormTwo: React.FC = () => {
  const isMobile = useBreakpointValue({
    lg: false,
    md: false,
    base: true,
  });

  return (
    <Box>
      <Heading color={"blue.100"} fontWeight={"bold"}>
        Select your plan
      </Heading>
      <Text
        fontSize="lg"
        fontWeight={"medium"}
        marginTop={"20px"}
        marginBottom={"40px"}
        color={"gray.100"}
      >
        You have the option of monthly or yearly billing.
      </Text>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {billingNames.map(({ id, title, amount, icon }) => (
          <Field
            key={id}
            name="billingName"
            validate={(value: string) => validateField("Billing Name", value)}
          >
            {({ field, form }: AppFieldPropsType) => (
              <>
                <Card
                  borderColor={
                    form.values.billingName === title ? "blue.200" : "gray.200"
                  }
                  borderWidth={"1px"}
                  paddingRight={"70px"}
                  background={
                    form.values.billingName === title ? "gray.300" : "white"
                  }
                  height={"180px"}
                  onClick={() =>
                    form.values.billingName === title
                      ? form.setFieldValue("billingName", "")
                      : form.setFieldValue("billingName", title)
                  }
                  cursor={"pointer"}
                  {...field}
                >
                  <CardHeader>
                    <Image
                      src={icon}
                      alt={`icon-${title}`}
                      width={45}
                      height={45}
                    />
                  </CardHeader>
                  <CardBody>
                    <Text
                      color={"blue.100"}
                      fontWeight={"bold"}
                      fontSize={"lg"}
                    >
                      {title}
                    </Text>
                    <Text
                      color={"gray.100"}
                      fontWeight={"medium"}
                      fontSize={"md"}
                    >
                      {amount}
                    </Text>
                  </CardBody>
                </Card>
                <FormErrorMessage>{form.errors.billingName}</FormErrorMessage>
              </>
            )}
          </Field>
        ))}
      </SimpleGrid>
      <Field
        name="billingType"
        validate={(value: string) => validateField("Billing Type", value)}
      >
        {({ field, form }: AppFieldPropsType) => (
          <FormControl
            display="flex"
            alignItems="center"
            width={isMobile ? "100%" : "75%"}
            paddingTop={"20px"}
            paddingBottom={"20px"}
            justifyContent={"center"}
            background={"gray.400"}
            marginTop={"70px"}
            marginBottom={"100px"}
            borderRadius={"10px"}
          >
            <FormLabel
              htmlFor="billing-type"
              mb="0"
              mr={"10"}
              color={
                form.values.billingType === "monthly" ? "blue.100" : "gray.100"
              }
              fontWeight={"semibold"}
            >
              Monthly
            </FormLabel>
            <Switch
              id="billing-type"
              size={"lg"}
              sx={{
                "& .chakra-switch__track[data-checked]": {
                  background: "blue.100",
                },
              }}
              {...field}
              onChange={(value) =>
                value.target.checked
                  ? form.setFieldValue("billingType", "yearly")
                  : form.setFieldValue("billingType", "monthly")
              }
            />
            <FormLabel
              htmlFor="billing-type"
              mb="0"
              ml={"10"}
              color={
                form.values.billingType === "yearly" ? "blue.100" : "gray.100"
              }
              fontWeight={"semibold"}
            >
              Yearly
            </FormLabel>
          </FormControl>
        )}
      </Field>
    </Box>
  );
};

export default FormTwo;

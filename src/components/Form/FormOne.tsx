import React from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field } from "formik";
import { AppFieldPropsType } from "@src/utils/types";
import { validateField } from "@src/utils/helpers";

const FormOne = () => {
  return (
    <Box>
      <Heading color={"blue.100"} fontWeight={"bold"}>
        Personal info
      </Heading>
      <Text
        fontSize="lg"
        fontWeight={"medium"}
        marginTop={"20px"}
        marginBottom={"40px"}
        color={"gray.100"}
      >
        Please provide your name, email address, and phone number.
      </Text>

      <Field
        name="name"
        validate={(value: string) => validateField("Name", value)}
      >
        {({ field, form }: AppFieldPropsType) => (
          <FormControl
            isInvalid={!!form.errors.name && form.touched.name}
            marginBottom={"20px"}
          >
            <FormLabel color={"blue.100"}>Name</FormLabel>
            <Input type="text" {...field} placeholder="e.g Tommy AJ" />
            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field
        name="email"
        validate={(value: string) => validateField("Email Address", value)}
      >
        {({ field, form }: AppFieldPropsType) => (
          <FormControl
            isInvalid={!!form.errors.email && form.touched.email}
            marginBottom={"20px"}
          >
            <FormLabel color={"blue.100"}>Email Address</FormLabel>
            <Input
              type="email"
              {...field}
              placeholder="e.g tommyaj@lorem.com"
            />
            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field
        name="phoneNumber"
        validate={(value: string) => validateField("Phone Number", value)}
      >
        {({ field, form }: AppFieldPropsType) => (
          <FormControl
            isInvalid={!!form.errors.phoneNumber && form.touched.phoneNumber}
            marginBottom={"20px"}
          >
            <FormLabel color={"blue.100"}>Phone Number</FormLabel>
            <Input type="phone" {...field} placeholder="e.g +1 234 567 890" />
            <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </Box>
  );
};

export default FormOne;

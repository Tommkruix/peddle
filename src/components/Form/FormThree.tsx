import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const FormThree: React.FC = () => {
  return (
    <Box>
      <Heading color={"blue.100"} fontWeight={"bold"}>
        Pick add-ons
      </Heading>
      <Text
        fontSize="lg"
        fontWeight={"medium"}
        marginTop={"20px"}
        marginBottom={"40px"}
        color={"gray.100"}
      >
        Add-ons help enhance your gaming experience.
      </Text>
    </Box>
  );
};

export default FormThree;

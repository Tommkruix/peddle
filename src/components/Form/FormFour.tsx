import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const FormFour: React.FC = () => {
  return (
    <Box>
      <Heading color={"blue.100"} fontWeight={"bold"}>
        Finishing up
      </Heading>
      <Text
        fontSize="lg"
        fontWeight={"medium"}
        marginTop={"20px"}
        marginBottom={"40px"}
        color={"gray.100"}
      >
        Double-check everything looks OK before confirming.
      </Text>
    </Box>
  );
};

export default FormFour;

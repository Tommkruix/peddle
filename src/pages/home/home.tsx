"use client";

import VerticalStep from "@src/components/VerticalStep/VerticalStep";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

function Home() {
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
      <VerticalStep />
    </Flex>
  );
}

export default Home;

import React from "react";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  useBreakpointValue,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
  useSteps,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FormikProps } from "formik";
import FormOne from "@src/components/Form/FormOne";
import FormTwo from "@src/components/Form/FormTwo";
import FormThree from "@src/components/Form/FormThree";
import FormFour from "@src/components/Form/FormFour";
import {
  AppFormType,
  UseStepReturnPropsType,
  FormsType,
} from "@src/utils/types";

import { icon } from "@public/assets";
import VerticalStepStyle from "./VerticalStep.style";

const steps: { title: string; description: string }[] = [
  { title: "STEP 1", description: "YOUR INFO" },
  { title: "STEP 2", description: "SELECY PLAN" },
  { title: "STEP 3", description: "ADD-ONS" },
  { title: "STEP 4", description: "SUMMARY" },
];

const forms: FormsType = {
  0: <FormOne />,
  1: <FormTwo />,
  2: <FormThree />,
  3: <FormFour />,
};

interface Props {
  formikProp: FormikProps<AppFormType>;
}

const VerticalStep: React.FC<Props> = ({ formikProp }: Props) => {
  const {
    activeStep,
    goToNext,
    goToPrevious,
    setActiveStep,
  }: UseStepReturnPropsType = useSteps({
    index: 0,
    count: steps.length,
  });
  const hasCompletedAllSteps = activeStep === steps.length - 1;
  const isLastStep = activeStep === steps.length - 2;
  const isMobile = useBreakpointValue({
    lg: false,
    md: false,
    base: true,
  });
  const orientation = isMobile ? "horizontal" : "vertical";

  const renderNavigationButtons = () => {
    return (
      <Flex
        width="100%"
        justify="flex-end"
        gap={4}
        position={"relative"}
        bottom={"0px"}
        marginTop={isMobile ? "30px" : "-20px"}
        background={isMobile ? "gray.400" : "white"}
        borderBottomRightRadius={isMobile ? "0px" : "10px"}
        paddingBottom={isMobile ? "10px" : "60px"}
        paddingTop={isMobile ? "10px" : "0px"}
        paddingRight={isMobile ? "10px" : "100px"}
      >
        {hasCompletedAllSteps ? (
          <>
            {formikProp.errors && (
              <Button
                isDisabled={activeStep === 0}
                onClick={() => setActiveStep(0)}
                size="md"
                variant="ghost"
                marginRight={isMobile ? "0px" : "30px"}
                background={"gray.400"}
                color={"gray.100"}
                fontWeight={"bold"}
                _hover={{ color: "blue.100", background: "gray.400" }}
              >
                Go to Beginning
              </Button>
            )}
            {!formikProp.isSubmitting && (
              <Button
                type="submit"
                isLoading={formikProp.isSubmitting}
                size="md"
                background={"blue.200"}
                color={"gray.200"}
                _hover={{ color: "gray.200", background: "blue.300" }}
              >
                Confirm
              </Button>
            )}
          </>
        ) : (
          <>
            <Button
              isDisabled={activeStep === 0}
              onClick={goToPrevious}
              size="md"
              variant="ghost"
              marginRight={isMobile ? "0px" : "30px"}
              background={"gray.400"}
              color={"gray.100"}
              fontWeight={"bold"}
              _hover={{ color: "blue.100", background: "gray.400" }}
            >
              Go Back
            </Button>
            <Button
              size="md"
              onClick={goToNext}
              background={"blue.100"}
              color={"gray.200"}
              _hover={{ color: "blue.100", background: "gray.300" }}
            >
              {isLastStep ? "Finish" : "Next Step"}
            </Button>
          </>
        )}
      </Flex>
    );
  };

  return (
    <>
      <Flex
        backgroundColor="white"
        padding={isMobile ? "0px" : "20px"}
        width={"100%"}
        borderRadius={"10px"}
      >
        <Grid
          templateColumns={isMobile ? "" : "repeat(5, 1fr)"}
          gap={isMobile ? 3 : 0}
          width={"100%"}
          background={isMobile ? "gray.200" : "none"}
        >
          <GridItem
            style={{
              backgroundImage: `url(${
                isMobile ? icon.bgSidebarMobile.src : icon.bgSidebarDesktop.src
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              flex: "1 1 50%",
            }}
            colSpan={isMobile ? 2 : 1}
            paddingLeft={isMobile ? "65px" : "72px"}
            paddingRight={isMobile ? "65px" : "72px"}
            paddingTop={isMobile ? "30px" : "30px"}
            paddingBottom={isMobile ? "100px" : "30px"}
            height={isMobile ? "auto" : "auto"}
            borderTopLeftRadius={isMobile ? "0px" : "10px"}
            borderTopRightRadius={isMobile ? "0px" : "10px"}
            borderBottomLeftRadius={isMobile ? "0px" : "10px"}
            borderBottomRightRadius={isMobile ? "0px" : "10px"}
          >
            <Stepper
              index={activeStep}
              colorScheme="blue"
              orientation={orientation}
              width="auto"
              height={isMobile ? "50px" : "300px"}
              gap="0"
              sx={VerticalStepStyle.stepper}
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepNumber />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>

                  <Box flexShrink="0">
                    {!isMobile && (
                      <>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                      </>
                    )}
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </GridItem>
          <GridItem
            colSpan={isMobile ? 2 : 4}
            paddingLeft={isMobile ? "30px" : "100px"}
            paddingRight={isMobile ? "30px" : "100px"}
            paddingTop={isMobile ? "30px" : "50px"}
            paddingBottom={isMobile ? "100px" : "0px"}
            marginRight={isMobile ? "10px" : "-20px"}
            marginLeft={isMobile ? "10px" : "0px"}
            marginTop={isMobile ? "-67px" : "0px"}
            background={"white"}
            borderTopLeftRadius={isMobile ? "10px" : "10px"}
            borderBottomLeftRadius={isMobile ? "10px" : "10px"}
            borderTopRightRadius={isMobile ? "10px" : "10px"}
            borderBottomRightRadius={isMobile ? "10px" : "10px"}
          >
            <Flex flexDir={"column"}>
              {!formikProp.isValid && (
                <Text color={"red.100"} fontWeight={"semibold"}>
                  Error in the form, go back to check your form!
                </Text>
              )}
              {formikProp.isSubmitting ? (
                <>
                  <Box>
                    <Heading color={"blue.100"} fontWeight={"bold"}>
                      Thank you!
                    </Heading>
                    <Text>
                      Thanks for confirming your subscription! We hope you have
                      fun using our platform.
                    </Text>
                  </Box>
                </>
              ) : (
                forms[activeStep]
              )}
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
      {renderNavigationButtons()}
    </>
  );
};

export default VerticalStep;

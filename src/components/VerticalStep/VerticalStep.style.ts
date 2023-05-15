const VerticalStepStyle = {
  stepper: {
    "& .chakra-step__title": {
      color: "gray.100",
    },
    "& .chakra-step__description": {
      color: "white",
      fontWeight: "bold",
    },
    "& .chakra-step__separator": {
      background: "none",
      "&[data-status='complete']": {
        background: "none",
      },
    },
    "& .chakra-step__indicator": {
      borderWidth: "2px",
      borderColor: "gray.100",
      color: "white",
      "&[data-status='complete']": {
        background: "none",
      },
      "&[data-status='active']": {
        background: "blue.400",
        color: "blue.100",
        borderColor: "gray.100",
        borderWidth: "1px",
      },
    },
  },
};

export default VerticalStepStyle;

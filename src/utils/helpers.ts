export const validateField = (
  fieldName: string,
  value: string
): string | undefined => {
  let error;

  if (typeof value === "boolean") return error;

  if (!value) {
    error = `${fieldName} is required`;
  } else if (value.toLowerCase().length < 3) {
    error = `${fieldName} too short 😱`;
  }
  if (
    fieldName.toLowerCase() === "Email Address" &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
  ) {
    error = "Invalid email address";
  }

  return error;
};

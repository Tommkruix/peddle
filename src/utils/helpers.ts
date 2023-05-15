export const validateField = (fieldName: string, value: string) => {
  let error;
  if (!value) {
    error = `${fieldName} is required`;
  } else if (value.toLowerCase().length < 3) {
    error = `${fieldName} too short 😱`;
  }
  return error;
};

export const useValidator = () => {
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  function isEmptyString(value: string | null | undefined): boolean {
  return value === undefined || value === null || value.length === 0;
}

  return {
    validateEmail, isEmptyString
  };
};

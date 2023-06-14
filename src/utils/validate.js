const validate = ({ email, password }) => {
  const emailValid = email.includes('@');
  const passwordValid = password.length >= 8;

  return [emailValid, passwordValid];
};

export default validate;

const validate = ({ email, password }) => {
  if (!email || !password) {
    return false;
  }

  return email.includes('@') && password.length >= 8;
};

export default validate;

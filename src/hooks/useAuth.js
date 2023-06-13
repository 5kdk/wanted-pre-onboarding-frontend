import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNIN_URL, TODO_URL, TOKEN_KEY } from '../constants';
import { signIn, signUp } from '../apis/auth';

const useAuth = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleValueChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    try {
      await signUp(formValues);
      navigate(SIGNIN_URL);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignInSubmit = async e => {
    e.preventDefault();
    try {
      const { access_token: accessToken } = await signIn(formValues);
      localStorage.setItem(TOKEN_KEY, accessToken);
      navigate(TODO_URL);
    } catch (error) {
      console.error(error);
    }
  };

  return { formValues, handleValueChange, handleSignUpSubmit, handleSignInSubmit };
};

export default useAuth;

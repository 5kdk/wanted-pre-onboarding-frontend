import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { rem, validate } from '../utils';
import { Button, Container, Input, Label, SubTitle } from '../components';
import { SIGNIN_URL } from '../constants';
import { signUp } from '../apis/auth';

const SignUp = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const isDisabled = !validate(formValues);

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await signUp(formValues);
      navigate(SIGNIN_URL);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container w={rem(400)}>
      <SubTitle>회원가입</SubTitle>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email address</Label>
        <Input
          type="email"
          name="email"
          value={formValues.email}
          data-testid="email-input"
          onChange={handleFormChange}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={formValues.password}
          data-testid="password-input"
          onChange={handleFormChange}
        />
        <Button type="submit" data-testid="signup-button" disabled={isDisabled}>
          Sign up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;

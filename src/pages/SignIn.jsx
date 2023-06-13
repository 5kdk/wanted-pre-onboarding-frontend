import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { rem, validate } from '../utils';
import { Button, Container, Input, Label, SubTitle } from '../components';
import { signIn } from '../apis/auth';
import { TODO_URL } from '../constants';

const SignIn = () => {
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
      const { access_token: accessToken } = await signIn(formValues);
      localStorage.setItem('access_token', accessToken);
      navigate(TODO_URL);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container w={rem(400)}>
      <SubTitle>로그인</SubTitle>
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
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;

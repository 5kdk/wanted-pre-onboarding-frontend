import { useState } from 'react';
import { rem, validate } from '../utils';
import { Button, Container, Input, Label } from '../components';

const SignUp = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });

  const isDisabled = !validate(formValues);

  const handleFormChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('hi');
    // api 로직 추가
  };

  return (
    <Container w={rem(400)}>
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
        <Button data-testid="signup-button" disabled={isDisabled}>
          회원가입
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;

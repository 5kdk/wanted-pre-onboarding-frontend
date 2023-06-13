import { rem, validate } from '../utils';
import { Button, Container, Input, Label, SubTitle } from '../components';
import { useAuth } from '../hooks';

const SignUp = () => {
  const { formValues, handleValueChange, handleSignUpSubmit } = useAuth();
  const isDisabled = !validate(formValues);

  return (
    <Container w={rem(400)}>
      <SubTitle>회원가입</SubTitle>
      <form onSubmit={handleSignUpSubmit}>
        <Label htmlFor="email">Email address</Label>
        <Input
          type="email"
          name="email"
          value={formValues.email}
          data-testid="email-input"
          onChange={handleValueChange}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          name="password"
          value={formValues.password}
          data-testid="password-input"
          onChange={handleValueChange}
        />
        <Button type="submit" data-testid="signup-button" disabled={isDisabled}>
          Sign up
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;

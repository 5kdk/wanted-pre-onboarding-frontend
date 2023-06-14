import { rem, validate } from '../utils';
import { Button, Container, Input, Label, LinkText, SubTitle } from '../components';
import { useAuth } from '../hooks';
import { SIGNUP_URL } from '../constants';

const SignIn = () => {
  const { formValues, handleValueChange, handleSignInSubmit } = useAuth();
  const isDisabled = !validate(formValues);

  return (
    <>
      <Container w={rem(400)}>
        <SubTitle>로그인</SubTitle>
        <form onSubmit={handleSignInSubmit}>
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
            Sign In
          </Button>
        </form>
      </Container>
      <Container w={rem(400)} mt="lg">
        <p>
          처음 오셨나요?
          <LinkText to={SIGNUP_URL}> Sign up</LinkText>
        </p>
      </Container>
    </>
  );
};

export default SignIn;

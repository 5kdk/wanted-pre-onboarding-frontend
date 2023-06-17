import { rem, validate } from '../utils';
import { Button, Container, Error, Input, Label, LinkText, SubTitle } from '../components';
import { useAuth } from '../hooks';
import { SIGNUP_URL } from '../constants';

const SignIn = () => {
  const { formValues, error, handleValueChange, handleSignInSubmit } = useAuth();
  const [emailValid, passwordValid] = validate(formValues);
  const allValid = emailValid && passwordValid;

  return (
    <>
      <Container w={rem(400)}>
        <SubTitle>로그인</SubTitle>
        {error && <Error>{error.response.data.message}</Error>}
        <form onSubmit={handleSignInSubmit}>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            valid={emailValid}
            data-testid="email-input"
            onChange={handleValueChange}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            valid={passwordValid}
            data-testid="password-input"
            onChange={handleValueChange}
          />
          <Button type="submit" data-testid="signin-button" disabled={!allValid}>
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

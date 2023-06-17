import { rem, validate } from '../utils';
import { Button, Container, Error, Input, Label, LinkText, SubTitle } from '../components';
import { useAuth } from '../hooks';
import { SIGNIN_URL } from '../constants';

const SignUp = () => {
  const { formValues, error, handleValueChange, handleSignUpSubmit } = useAuth();
  const [emailValid, passwordValid] = validate(formValues);
  const allValid = emailValid && passwordValid;

  return (
    <>
      <Container w={rem(400)}>
        <SubTitle>회원가입</SubTitle>
        {error && <Error>{error.response.data.message}</Error>}
        <form onSubmit={handleSignUpSubmit}>
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
          <Button type="submit" data-testid="signup-button" disabled={!allValid}>
            Sign up
          </Button>
        </form>
      </Container>
      <Container w={rem(400)} mt="lg">
        <p>
          이미 회원이신가요?
          <LinkText to={SIGNIN_URL}> Sign in</LinkText>
        </p>
      </Container>
    </>
  );
};

export default SignUp;

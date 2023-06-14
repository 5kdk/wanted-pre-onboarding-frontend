import { rem, validate } from '../utils';
import { Button, Container, Input, Label, LinkText, SubTitle } from '../components';
import { useAuth } from '../hooks';
import { SIGNIN_URL } from '../constants';

const SignUp = () => {
  const { formValues, handleValueChange, handleSignUpSubmit } = useAuth();
  const isDisabled = !validate(formValues);

  return (
    <>
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

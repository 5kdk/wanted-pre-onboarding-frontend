import { rem, validate } from '../utils';
import { Button, Container, Error, LinkText, SignInput, SubTitle } from '../components';
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
          <SignInput
            id="email"
            value={formValues.email}
            valid={emailValid}
            onChange={handleValueChange}
            dataTestId="email-input"
            errorMessage="아이디는 @를 포함해야합니다."
          />
          <SignInput
            id="password"
            value={formValues.password}
            valid={passwordValid}
            onChange={handleValueChange}
            dataTestId="password-input"
            errorMessage="비밀번호는 8자 이상이여야 합니다."
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

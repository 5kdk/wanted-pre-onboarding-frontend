import { rem, validate } from '../utils';
import { Button, Container, Error, LinkText, SignInput, SubTitle } from '../components';
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

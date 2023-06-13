import { useState } from 'react';
import styled from 'styled-components';
import { rem, validate } from '../utils';

const Container = styled.div`
  width: ${({ w }) => w || '100%'};
  padding: ${({ p, theme }) => p || theme.spacing.md};
  border: ${rem(1)} solid ${({ theme }) => theme.colors.gray};
  margin: 0 auto;
  border-radius: ${rem(5)};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Input = styled.input.attrs(props => ({ type: props.type || 'text' }))`
  display: inline-block;
  width: ${({ w }) => w || '100%'};
  height: ${rem(32)};
  margin-bottom: ${({ p, theme }) => p || theme.spacing.lg};
  border: ${rem(1)} solid ${({ theme }) => theme.colors.gray};
  border-radius: ${rem(5)};
  outline: none;
  padding-left: ${({ p, theme }) => p || theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: ${rem(2)} solid ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: ${rem(15)} ${rem(32)};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: ${rem(5)};
  font-weight: ${({ theme }) => theme.fontWeight.md};
  font-size: ${rem(16)};
  transition: 0.3s ease-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.colors.primaryFocus};
  }
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${rem(8)};
  font-weight: ${({ theme }) => theme.fontWeight.md};
  text-align: left;
`;

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

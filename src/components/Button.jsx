import styled from 'styled-components';
import { rem } from '../utils';

const StyledButton = styled.button`
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

const Button = ({ children, type = 'button', disabled }) => (
  <StyledButton type={type} disabled={disabled}>
    {children}
  </StyledButton>
);

export default Button;

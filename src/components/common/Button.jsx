import styled from 'styled-components';
import { rem } from '../../utils';

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  width: 100%;
  border: none;
  color: ${props => props.theme.colors.white};
  padding: ${rem(15)} ${rem(32)};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: ${rem(5)};
  font-weight: ${props => props.theme.fontWeight.md};
  font-size: ${rem(16)};
  transition: 0.3s ease-out;
  &:hover {
    box-shadow: ${props => props.theme.shadow};
    background-color: ${props => props.theme.colors.primaryFocus};
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

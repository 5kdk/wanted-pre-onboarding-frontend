import styled, { css } from 'styled-components';
import { rem } from '../../utils';

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  width: ${props => props.w || '100%'};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${rem(5)};
  font-size: ${props => props.theme.fontSize.md};
  color: ${props => props.theme.colors.white};

  &:hover {
    background-color: ${props => props.theme.colors.primaryFocus};
  }

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const Button = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

export default Button;

import styled from 'styled-components';
import { rem } from '../utils';

const StyledInput = styled.input.attrs(props => ({ type: props.type || 'text' }))`
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

const Input = ({ ...rest }) => <StyledInput {...rest} />;

export default Input;

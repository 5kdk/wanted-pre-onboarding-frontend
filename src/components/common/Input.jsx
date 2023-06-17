import styled from 'styled-components';
import { forwardRef } from 'react';
import { rem } from '../../utils';

const StyledInput = styled.input.attrs(props => ({ type: props.type || 'text' }))`
  display: ${props => props.display || 'inline-block'};
  width: ${props => props.w || '100%'};
  height: ${rem(32)};
  border: ${rem(1)} solid
    ${props => (props.value && !props.valid ? props.theme.colors.caution : props.theme.colors.gray)};
  border-radius: ${rem(5)};
  outline: none;
  padding-left: ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.white};

  &:focus {
    outline: ${rem(2)} solid
      ${props => (props.value && !props.valid ? props.theme.colors.caution : props.theme.colors.primary)};
  }
`;

const Input = forwardRef(({ valid = true, ...rest }, ref) => <StyledInput ref={ref} valid={valid} {...rest} />);

export default Input;

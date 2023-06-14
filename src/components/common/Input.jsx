import styled, { css } from 'styled-components';
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
  padding-left: ${props => props.p || props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.white};
  margin-bottom: ${props => (props.mb ? props.theme.spacing[props.mb] : props.theme.spacing.lg)};
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.theme.spacing[props.mt]};
    `};
  ${props =>
    props.ml &&
    css`
      margin-left: ${props.theme.spacing[props.ml]};
    `};
  ${props =>
    props.mr &&
    css`
      margin-right: ${props.theme.spacing[props.mr]};
    `}

  &:focus {
    outline: ${rem(2)} solid
      ${props => (props.value && !props.valid ? props.theme.colors.caution : props.theme.colors.primary)};
  }
`;

const Input = forwardRef(({ valid = true, ...rest }, ref) => <StyledInput ref={ref} valid={valid} {...rest} />);

export default Input;

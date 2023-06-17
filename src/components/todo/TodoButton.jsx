import styled, { css } from 'styled-components';
import { rem } from '../../utils';

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.gray};
  height: ${rem(32)};
  padding: ${props => props.theme.spacing.xs};
  border-radius: ${rem(5)};
  font-size: ${props => props.theme.fontSize.sm};
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.theme.spacing[props.mt]};
    `};
  ${props =>
    props.mb &&
    css`
      margin-bottom: ${props.theme.spacing[props.mb]};
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
    `};
  ${props =>
    props.caution &&
    css`
      background-color: ${props => props.theme.colors.gray};
      color: ${props => props.theme.colors.caution};

      &:hover {
        background-color: ${props => props.theme.colors.caution};
        color: ${props => props.theme.colors.white};
      }
    `}

  &:hover {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
  }
`;

const TodoButton = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

export default TodoButton;

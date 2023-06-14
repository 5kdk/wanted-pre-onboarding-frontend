import styled, { css } from 'styled-components';
import { rem } from '../../utils';

const StyledContainer = styled.div`
  width: ${props => props.w || '100%'};
  padding: ${props => props.theme.spacing[props.p] || props.theme.spacing.md};
  border: ${rem(1)} solid ${props => props.theme.colors.gray};
  margin: 0 auto;
  border-radius: ${rem(5)};
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadow};
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
`;

const Container = ({ children, ...rest }) => <StyledContainer {...rest}>{children}</StyledContainer>;

export default Container;

import styled, { css } from 'styled-components';

const Text = styled.p`
  text-align: ${props => props.textAlign || 'left'};
  color: ${props => props.theme.colors.caution};
  ${props =>
    props.size &&
    css`
      font-size: ${props => props.theme.fontSize[props.size]};
    `}
`;

const Error = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;

export default Error;

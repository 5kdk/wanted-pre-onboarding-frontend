import styled, { css } from 'styled-components';

const Text = styled.p`
  text-align: left;
  color: ${props => props.theme.colors.caution};
  ${props =>
    props.size &&
    css`
      font-size: ${props => props.theme.fontSize[props.size]};
    `}
`;

const Error = ({ size, children }) => <Text size={size}>{children}</Text>;

export default Error;

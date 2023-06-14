import styled from 'styled-components';
import { rem } from '../../utils';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: ${rem(8)};
  font-weight: ${props => props.theme.fontWeight.md};
  text-align: left;
`;

const Label = ({ children, htmlFor }) => <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;

export default Label;

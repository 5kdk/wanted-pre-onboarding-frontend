import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;
const LinkText = ({ to, children }) => <StyledLink to={to}>{children}</StyledLink>;

export default LinkText;

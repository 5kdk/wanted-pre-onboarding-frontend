import styled from 'styled-components';
import { rem } from '../utils';

const StyledContainer = styled.div`
  width: ${({ w }) => w || '100%'};
  padding: ${({ p, theme }) => p || theme.spacing.md};
  border: ${rem(1)} solid ${({ theme }) => theme.colors.gray};
  margin: 0 auto;
  border-radius: ${rem(5)};
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Container = ({ children, ...rest }) => <StyledContainer {...rest}>{children}</StyledContainer>;

export default Container;

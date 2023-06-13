import styled from 'styled-components';

const StyledSubTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.black};
  text-align: ${props => props.align || 'center'};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;

const SubTitle = ({ children }) => <StyledSubTitle>{children}</StyledSubTitle>;

export default SubTitle;

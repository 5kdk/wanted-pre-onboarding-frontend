import styled from 'styled-components';

const StyledSubTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.black};
  text-align: ${props => props.align || 'center'};
  font-size: ${props => props.theme.fontSize.lg};
`;

const SubTitle = ({ children }) => <StyledSubTitle>{children}</StyledSubTitle>;

export default SubTitle;

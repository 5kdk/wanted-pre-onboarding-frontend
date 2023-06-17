import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;
const Text = styled.p`
  color: ${props => props.theme.colors.caution};
`;

const Error = ({ children }) => (
  <Wrapper>
    <Text>{children}</Text>
  </Wrapper>
);

export default Error;

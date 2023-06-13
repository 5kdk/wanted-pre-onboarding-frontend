import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  margin: ${({ theme }) => theme.spacing.xl} 0;
  color: ${({ theme }) => theme.colors.black};
`;

const Root = () => (
  <Container>
    <Title>Wanted Pre-onboarding</Title>
    <Outlet />
  </Container>
);

export default Root;

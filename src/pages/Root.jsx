import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
`;

const Root = () => (
  <Container>
    <Title>원티드 프리온보딩 프론트엔드 - 선발 과제</Title>
    <Outlet />
  </Container>
);

export default Root;

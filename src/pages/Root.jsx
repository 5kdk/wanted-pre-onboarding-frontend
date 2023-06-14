import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { ROOT_URL, SIGNIN_URL } from '../constants';

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

const Title = styled.h1`
  margin: ${props => props.theme.spacing.xl} 0;
  color: ${props => props.theme.colors.black};
`;

const Root = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === ROOT_URL) {
      navigate(SIGNIN_URL);
    }
  }, [navigate, pathname]);

  return (
    <Container>
      <Title>Wanted Pre-onboarding</Title>
      <Outlet />
    </Container>
  );
};

export default Root;

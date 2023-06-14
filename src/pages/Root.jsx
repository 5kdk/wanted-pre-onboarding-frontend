import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect } from 'react';
import { getToken } from '../utils';
import { SIGNIN_URL, SIGNUP_URL, TODO_URL } from '../constants';

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
  const isLogin = getToken();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isLogin) {
      navigate(TODO_URL);
    } else if (pathname === SIGNIN_URL) {
      navigate(SIGNIN_URL);
    } else {
      navigate(SIGNUP_URL);
    }
  }, [isLogin, navigate, pathname]);

  return (
    <Container>
      <Title>Wanted Pre-onboarding</Title>
      <Outlet />
    </Container>
  );
};

export default Root;

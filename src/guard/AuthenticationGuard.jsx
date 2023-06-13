import { Navigate } from 'react-router-dom';
import { getToken } from '../utils';

const AuthenticationGuard = ({ redirectTo, element }) => {
  const isLogin = getToken();

  if (redirectTo === '/todo' && isLogin) {
    return <Navigate to={redirectTo} />;
  }

  if (redirectTo === '/signin' && !isLogin) {
    return <Navigate to={redirectTo} />;
  }

  return element;
};

export default AuthenticationGuard;

import { Navigate } from 'react-router-dom';
import { TOKEN_KEY } from '../constants';

const AuthenticationGuard = ({ redirectTo, element }) => {
  const isLogin = localStorage.getItem(TOKEN_KEY);

  if (redirectTo === '/todo' && isLogin) {
    return <Navigate to={redirectTo} />;
  }

  if (redirectTo === '/signin' && !isLogin) {
    return <Navigate to={redirectTo} />;
  }

  return element;
};

export default AuthenticationGuard;

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { ROOT_URL, SIGNIN_URL, SIGNUP_URL, TODO_URL } from './constants';
import { Root, SignIn, SignUp, Todo } from './pages';
import AuthenticationGuard from './guard/AuthenticationGuard';

const routerConfig = createBrowserRouter([
  {
    path: ROOT_URL,
    element: <Root />,
    children: [
      {
        path: SIGNIN_URL,
        element: <AuthenticationGuard redirectTo={TODO_URL} element={<SignIn />} />,
      },
      {
        path: SIGNUP_URL,
        element: <AuthenticationGuard redirectTo={TODO_URL} element={<SignUp />} />,
      },
      {
        path: TODO_URL,
        element: <AuthenticationGuard redirectTo={SIGNIN_URL} element={<Todo />} />,
      },
    ],
  },
]);

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={routerConfig} />
  </ThemeProvider>
);

export default App;

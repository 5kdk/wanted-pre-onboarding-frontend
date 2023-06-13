import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { Root, SignIn, SignUp, Todo } from './pages';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'todo',
        element: <Todo />,
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

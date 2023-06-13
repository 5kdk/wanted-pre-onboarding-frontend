import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import { ROOT_URL, SIGNIN_URL, SIGNUP_URL, TODO_URL } from './constants';

const lazyLoadRoutes = pageName => {
  const LazyElement = lazy(() => import(`./pages/${pageName}.jsx`));

  return (
    <Suspense fallback={<div>...loading</div>}>
      <LazyElement />
    </Suspense>
  );
};

const routerConfig = createBrowserRouter([
  {
    path: ROOT_URL,
    element: lazyLoadRoutes('Root'),
    children: [
      {
        path: SIGNIN_URL,
        element: lazyLoadRoutes('SignIn'),
      },
      {
        path: SIGNUP_URL,
        element: lazyLoadRoutes('SignUp'),
      },
      {
        path: TODO_URL,
        element: lazyLoadRoutes('Todo'),
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

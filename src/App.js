import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';

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
    path: '/',
    element: lazyLoadRoutes('Root'),
    children: [
      {
        path: 'signin',
        element: lazyLoadRoutes('SignIn'),
      },
      {
        path: 'signup',
        element: lazyLoadRoutes('SignUp'),
      },
      {
        path: 'todo',
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

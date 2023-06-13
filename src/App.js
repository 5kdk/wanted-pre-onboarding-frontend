import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;

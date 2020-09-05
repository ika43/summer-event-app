import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Footer } from './components/layout/Footer';
import { ContentWrapper } from './components/content/ContentWrapper';
import './App.scss';

export const App = () => {
  const palletType = 'dark';
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <ContentWrapper />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

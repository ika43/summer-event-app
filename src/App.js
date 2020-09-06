import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { NotFound } from './components/layout/NotFound';
import { ContentWrapper } from './components/content/ContentWrapper';
import { Switch, Route } from 'react-router-dom';
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
      <Switch>
        <Route path="/" component={ContentWrapper} exact />
        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;

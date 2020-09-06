import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { NotFound } from './components/layout/NotFound';
import { ContentWrapper } from './components/content/ContentWrapper';
import { Switch, Route } from 'react-router-dom';
import { darkTheme } from './theme-styles';
import './App.scss';

export const App = () => {
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

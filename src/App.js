import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { NotFound } from './components/layout/NotFound';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { darkTheme } from './theme-styles';
import './App.scss';
import { Home } from './components/layout/Home';

export const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

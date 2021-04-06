import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Navigation from './components/Navigation/Navigation';
import SignIn from './pages/SignIn/SignIn';
import StickyFooter from './components/StickyFooter/StickyFooter'

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />

      <Switch>
        <Route exact from='/login' render={(props) => <SignIn {...props} />} />
      </Switch>
      <StickyFooter />
    </>
  );
}

export default App;

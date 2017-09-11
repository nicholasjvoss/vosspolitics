import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import ComponentLibrary from './pages/ui-component-library/ComponentLibrary';
import NotFound from './pages/ui-not-found/NotFound';

const Routes = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/component-library" component={ComponentLibrary} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

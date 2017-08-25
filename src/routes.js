import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Foo from './pages/ui-foo/Foo';
import NotFound from './pages/ui-not-found/NotFound';

const Routes = (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/foo" component={Foo} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

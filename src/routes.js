import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import politicsStore from './store.js';

import HomePageWithStore from './pages/ui-homepage/HomePageWithStore';
import Dashboard from './pages/ui-dashboard/Dashboard';
import ComponentLibrary from './pages/ui-component-library/ComponentLibrary';
import NotFound from './pages/ui-not-found/NotFound';

const stores = { politicsStore };

const Routes = (props) => (
    <Provider {...stores}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ HomePageWithStore } />
            <Route path="/:query" component={ Dashboard } />
            <Route path="/component-library" component={ComponentLibrary} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </Provider>
);

export default Routes;

import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
                <Route path="/dashboard/" component={ DashboardSubLayout } />
                <Route path="/component-library" component={ComponentLibrary} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

const DashboardSubLayout = (props) => (
    <Provider {...stores}>
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={ Dashboard } />
                <Route path="/dashboard/:address" component={ Dashboard } />
                {/* <Route path="*" component={NotFound} /> */}
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default Routes;

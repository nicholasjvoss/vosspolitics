import React, { Component } from 'react';
import store from '../../store';

// ===== Components =====
import Dashboard from './Dashboard';

export default class DashboardWithStore extends Component {
  render() {
      const { match } = this.props;
    return (
      <div>
        <Dashboard
            match={ match }
            store={ store } />
      </div>
    );
  }
}

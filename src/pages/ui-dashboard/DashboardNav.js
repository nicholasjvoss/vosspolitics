import React, { Component } from 'react';
import { observer } from 'mobx-react';

// ===== components =====
import DashboardTabs from './DashboardTabs';

@observer
export default class DashboardNav extends Component {
    render() {
        const { store } = this.props;
        const { currentTab } = store;
        // console.log(store, currentTab);
        return (
            <ul>{ DashboardTabs.map(this.renderDashboardTabs.bind(this)) }</ul>
        )
    }

    renderDashboardTabs(tab, idx) {
        return (
            <li>
                <a href="#" onClick={ this.onNavTabDidClick.bind(this, idx) }>
                    <span className="nav-menu-icon p-icon-user-circle-o"/>
                    { tab.props.children }
                </a>
            </li>
        )
    }

    onNavTabDidClick(idx) {
        this.props.store.currentTab = idx;
    }
}

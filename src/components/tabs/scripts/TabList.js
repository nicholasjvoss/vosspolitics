import React, { Component } from 'react';

export default class TabList extends Component {
    render() {
        const { children } = this.props;

        return (
            <ul className="tab-list">{ children.map(this.renderTabList.bind(this)) }</ul>
        )
    }

    renderTabList(tab, idx) {
        return (
            <li key={`tab-${ idx }`} onClick={ this.handleTabDidClick.bind(this, idx) }>{ tab }</li>
        )
    }

    handleTabDidClick(idx) {
        const { tabIndex } = this.props;
        // If clicked tab is not the currently active one, set new tabIndex
        tabIndex !== idx && this.props.onTabClick(idx);
    }
}

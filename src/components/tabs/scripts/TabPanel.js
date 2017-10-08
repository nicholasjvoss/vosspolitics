import React, { Component } from 'react';

export default class TabPanel extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="tab-panel-wrapper">{ children.map(this.renderTabPanels.bind(this)) }</div>
        )
    }

    renderTabPanels(tabPanel, idx) {
        const { tabIndex } = this.props;
        const isActive = idx === tabIndex

        return (
            <div
                className="tab-panel"
                key={`tabPanel-${ idx }`}>

                { isActive && tabPanel }
            </div>
        )
    }
}

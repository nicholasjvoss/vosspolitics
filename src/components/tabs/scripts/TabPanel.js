import React, { Component } from 'react';
import cx from 'classnames';

export default class TabPanel extends Component {
    render() {
        const { children, wrapperCls } = this.props;

        return (
            <div className={ cx('tab-panel-wrapper', wrapperCls) }>
                { children.map(this.renderTabPanels.bind(this)) }
            </div>
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

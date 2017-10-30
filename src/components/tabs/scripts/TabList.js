import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

@observer
export default class TabList extends Component {
    render() {
        const { children, politicsStore, wrapperCls } = this.props;

        return (
            <div className={ cx('tab-list', wrapperCls) }>
                <ul className="tab-list__container">{ children.map(this.renderTabList.bind(this)) }</ul>
            </div>
        )
    }

    renderTabList(tab, idx) {
        return (
            <li
                className="tab-list__item"
                key={`tab-${ idx }`}
                onClick={ this.handleTabDidClick.bind(this, idx) }>

                { tab }
            </li>
        )
    }

    handleTabDidClick(idx) {
        const { tabIndex } = this.props;
        // If clicked tab is not the currently active one, set new tabIndex
        tabIndex !== idx && this.props.onTabClick(idx);
    }
}

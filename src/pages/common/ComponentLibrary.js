import React, { Component } from 'react';
import cx from 'classnames';
import './index.scss';

// ===== Components =====
import Icons from './components/Icons';

export default class ComponentLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        }
    }

    render() {
      const { activeTab } = this.state;
      const libraryComponents = [
          { 'name': 'Icons', 'component': <Icons /> },
          { 'name': 'Icons2', 'component': <div>another component</div> },
      ];

        return (
          <div className="component-library">
            <div className="cl-accordion">
              <ul className="cl-accordion-tabs">{ libraryComponents.map(this.renderTabs.bind(this)) }</ul>

              <div className="cl-accordion-content">
                { libraryComponents[activeTab].component }
              </div>
            </div>
          </div>
        )
    }

    renderTabs(tab, idx, self) {
      const { activeTab } = this.state;
      const tabId = `tabId-${ idx }`;
      const { name } = tab;
      console.log(idx, activeTab);
      const selectedCls = idx === activeTab ? 'mod-selected' : '';

      return (
        <li key={ tabId }>
          <button
            className={ cx('cl-accordion-tabs__tab', selectedCls) }
            onClick={ this.handleTabDidClick.bind(this, idx) }>
            { name }
          </button>
        </li>
      )
    }

    handleTabDidClick = (index)=> {
      console.log('clicked tab: ', index)
      this.setState({ activeTab: index });
    }
}

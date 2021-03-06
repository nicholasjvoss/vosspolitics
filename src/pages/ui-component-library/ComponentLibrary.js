import React, { Component } from 'react';
import cx from 'classnames';

// ===== Components =====
import ButtonPage from './scripts/ButtonPage';
import ColorPage from './scripts/ColorPage';
import FormPage from './scripts/FormPage';
import IconPage from './scripts/IconPage';

export default class ComponentLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            menuIsActive: false,
        }
    }

    render() {
      const { activeTab, menuIsActive } = this.state;
      const libraryComponents = [
          { 'name': 'Buttons', 'component': <ButtonPage /> },
          { 'name': 'Colors', 'component': <ColorPage /> },
          { 'name': 'Form Elements', 'component': <FormPage /> },
          { 'name': 'Icons', 'component': <IconPage /> },
      ];
      const menuActiveCls = menuIsActive ? 'mod-active' : '';

      return (
        <div className="component-library">
          <div className="component-library-header">
            <button
              className={ cx('menu-toggle', 'p-icon-navicon', menuActiveCls) }
              onClick={ this.handleToggleDidClick.bind(this) }
            />
          </div>

          <div className="cl-accordion">
            <ul className={ cx('cl-accordion-tabs', menuActiveCls) }>{ libraryComponents.map(this.renderTabs.bind(this)) }</ul>

            <div className="cl-accordion-content">
              <h1>{ libraryComponents[activeTab].name }</h1>
                { libraryComponents[activeTab].component }
            </div>
          </div>
        </div>
      )
    }

    handleToggleDidClick() {
      const { menuIsActive } = this.state;
      this.setState({ menuIsActive: !menuIsActive });
    }

    renderTabs(tab, idx, self) {
      const { activeTab } = this.state;
      const tabId = `tabId-${ idx }`;
      const { name } = tab;
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
      const { menuIsActive } = this.state;

      this.setState({
        activeTab: index,
        menuIsActive: !menuIsActive
      });
    }
}

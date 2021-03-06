import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static defaultProps = {
    action: ()=> {},
    buttonType: 2, // defaults to button-secondary
    type: 'button',
  }

  render() {
    const { action, buttonType, children, icon, loading, type, wrapperCls } = this.props;
    const buttonTypeCls = {
      'nv-button button-primary': buttonType === 1,
      'nv-button button-secondary': buttonType === 2,
      'nv-button button-tertiary': buttonType === 3,
      'nv-button button-transparent': buttonType === 4,
      'nv-button button-error': buttonType === 5,
    };

    const loadingCls = loading ? 'loading' : '';

    return (
      <button
          className={ cx(buttonTypeCls, icon, loadingCls, wrapperCls) }
          onClick={ action }
          type={ type }>
          { (!loading && children) && children }
      </button>
    );
  }
}

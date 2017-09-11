import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static defaultProps = {
    action: ()=> {},
    buttonType: 2, // defaults to button-secondary
  }

  render() {
    const { action, buttonType, children, icon, loading } = this.props;
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
        className={ cx(buttonTypeCls, icon, loadingCls) }
        onClick={ action }>
        { (!loading && children) && children }
      </button>
    );
  }
}

import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static defaultProps = {
    buttonType: 2, // defaults to button-secondary
  }

  render() {
    const { buttonType, children, icon } = this.props;
    const buttonTypeCls = {
      'nv-button button-primary': buttonType === 1,
      'nv-button button-secondary': buttonType === 2,
      'nv-button button-tertiary': buttonType === 3,
      'nv-button button-transparent': buttonType === 4,
      'nv-button button-error': buttonType === 5,
    };

    return (
      <button
        className={ cx(buttonTypeCls, icon) }>
        { children && children }
      </button>
    );
  }
}

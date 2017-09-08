import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static defaultProps = {
    children: 1,
  }

  render() {
    const { children } = this.props;

    return (
      <button
        className={ cx('nv-button') }>{ children && children }</button>
    );
  }
}

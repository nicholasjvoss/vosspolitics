import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static defaultProps = {
    dark: false,
  }

  render() {
    const { dark } = this.props;
    const loadingCls = dark ? 'mod-dark' : '';

    return (
      <span className={ cx('loader', loadingCls) } />
    );
  }
}

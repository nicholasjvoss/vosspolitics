import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOnChange: ()=> {},
    }
  }

  static defaultProps = {
    onFormSubmit:()=> {},
    wrapperCls: '',
  }

  render() {
    const { children, wrapperCls } = this.props;
    return (
      <form
        className={ cx('nv-form', wrapperCls)}
        onSubmit={ this.handleFormSubmitDidClick.bind(this) }
      >{ children }</form>
    );
  }

  handleFormSubmitDidClick(e) {
    e.preventDefault();
    const { formData, onFormSubmit } = this.props;
    onFormSubmit(formData); // submit all collected input values
  }
}

import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      inputOnChange: ()=> {},
    }
  }

  static defaultProps = {
    onFormSubmit:()=> {},
    wrapperCls: '',
  }

  render() {
    const { children, inputOnChange, onFormSubmit, wrapperCls } = this.props;
    return (
      <form
        className={ cx('nv-form', wrapperCls)}
        onSubmit={ this.handleFormSubmitDidClick.bind(this) }
      >{ children }</form>
    );
  }

  handleFormSubmitDidClick(e) {
    e.preventDefault();
    const { onFormSubmit } = this.props;
    const { formData } = this.state;
    onFormSubmit(formData); // will need to pass-in the state that contains all collected form data
  }
}

import React, { Component } from 'react';
import cx from 'classnames';

export default class Button extends Component {
  static defaultProps = {
    inputOnChange: ()=> {},
    inputRequired: false,
  }

  render() {
    const { inputId, inputName, inputPlaceholder, inputOnChange, inputRequired, label, wrapperCls } = this.props;
    return (
      <span className="form-element">
        <input
          className="form-field"
          placeholder={ inputPlaceholder }
          id={ inputId }
          name={ inputName }
          onChange={ inputOnChange }
          required={ inputRequired }
          type="text"
        />

        <label
          className="form-label"
          htmlFor={ inputName }>
          { label }
        </label>
      </span>
    );
  }

  handleInputChange() {

  }
}

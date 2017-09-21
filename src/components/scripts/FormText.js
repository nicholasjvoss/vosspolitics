import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export default class Button extends Component {
  static defaultProps = {
    inputOnChange: ()=> {},
    inputRequired: false,
  }

  static propTypes = {
    // inputOnChange: PropTypes.object.required,
  }

  render() {
    const { inputId, inputName, inputPlaceholder, inputOnChange, inputRequired, label, wrapperCls } = this.props;

    return (
      <span className={ cx('form-element', wrapperCls) }>
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
}

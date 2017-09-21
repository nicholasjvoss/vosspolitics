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

  constructor(props) {
    super(props);
    this.state = {
      inputData: {},
    }
  }

  render() {
    const { inputId, inputName, inputPlaceholder, inputOnChange, inputRequired, label, wrapperCls } = this.props;
    const { inputData } = this.state;
    // console.log(inputData);

    return (
      <span className={ cx('form-element', wrapperCls) }>
        <input
          className="form-field"
          placeholder={ inputPlaceholder }
          id={ inputId }
          name={ inputName }
          onChange={ this.handleInputDidChange.bind(this) }
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

  handleInputDidChange(e) {
    //   this.props.inputOnChange('123');

      const { inputData } = this.state;
      const name = e.target.name;
      const val = e.target.value;
      const updatedinputData = Object.assign(inputData, { [name]: val });

      this.setState({ inputData: updatedinputData });
      this.props.inputOnChange(inputData);
  }
}

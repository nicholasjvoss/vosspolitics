import React, { Component } from 'react';
// import cx from 'classnames';
// import Form from '../../../components/scripts/Form';
import FormText from '../../../components/scripts/FormText';
import Button from '../../../components/scripts/Button';

export default class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
    }
  }

  render() {
    const { formData } = this.state;
    console.log(formData);

    return (
      <section className="library-page__buttons">
        <form onSubmit={ this.handleFormSubmit.bind(this) }>
          <div className="demo-component">
            <h2 className="demo-component__title">Text</h2>
            <FormText
              inputId="firstName"
              inputName="address"
              inputPlaceholder="Address"
              inputOnChange={ this.handleInputDidChange.bind(this) }
              inputRequired={ false }
              label="Address"
            />

            <FormText
              inputId="city"
              inputName="city"
              inputPlaceholder="City"
              inputOnChange={ this.handleInputDidChange.bind(this) }
              inputRequired={ false }
              label="City"
            />

            <FormText
              inputId="state"
              inputName="State"
              inputPlaceholder="State"
              inputOnChange={ this.handleInputDidChange.bind(this) }
              inputRequired={ false }
              label="State"
            />

            <FormText
              inputId="zipCode"
              inputName="zip"
              inputPlaceholder="Zip code"
              inputOnChange={ this.handleInputDidChange.bind(this) }
              inputRequired={ false }
              label="Zip"
            />

            <Button
              buttonType={ 1 }
              icon="p-icon-chevron-right"
              type="submit"
            />
          </div>
        </form>
      </section>
    );
  }

  handleInputDidChange(e) {
    const { formData } = this.state;
    const name = e.target.name;
    const val = e.target.value;
    const updatedFormData = Object.assign(formData, { [name]: val });

    this.setState({ formData: updatedFormData });
  }

  handleFormSubmit(e) {
      e.preventDefault();
      const { formData } = this.state;
      console.log('submitted: ', formData);
  }
}

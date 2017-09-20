import React, { Component } from 'react';
// import cx from 'classnames';
import Form from '../../../components/scripts/Form';
import FormText from '../../../components/scripts/FormText';
import Button from '../../../components/scripts/Button';

export default class FormPage extends Component {
  static defaultProps = {

  }

  render() {
    // const { children } = this.props;

    return (
      <section className="library-page__buttons">
        <Form onFormSubmit={ this.handleFormSubmit }>
          <div className="demo-component">
            <h2 className="demo-component__title">Text</h2>
            <FormText
              inputId="firstName"
              inputName="name"
              inputPlaceholder="Address"
              inputOnChange={ this.handleInputDidChange }
              inputRequired={ false }
              label="Address"
            />

            <FormText
              inputId="city"
              inputName="city"
              inputPlaceholder="City"
              inputOnChange={ this.handleInputDidChange }
              inputRequired={ false }
              label="City"
            />

            <FormText
              inputId="state"
              inputName="State"
              inputPlaceholder="State"
              inputOnChange={ this.handleInputDidChange }
              inputRequired={ false }
              label="State"
            />

            <FormText
              inputId="zipCode"
              inputName="zip"
              inputPlaceholder="Zip code"
              inputOnChange={ this.handleInputDidChange }
              inputRequired={ false }
              label="Address"
            />

            <Button
              buttonType={ 1 }
              icon="p-icon-chevron-right"
              type="submit"
            />
          </div>
        </Form>
      </section>
    );
  }

  handleInputDidChange(e) {
    console.log(e.target);
  }

  handleFormSubmit(data) {
    // e.preventDefault();
    console.log('form submitted!', data);
  }
}

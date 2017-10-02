import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

// Components
import Button from './Button.js';
import FormText from './FormText.js';

export default class FindRepsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressQueryString: '',
      formData: {},
    }
  }

  render() {
    const { addressQueryString, formData } = this.state;
    const dashboardURL = addressQueryString ? `dashboard/?${addressQueryString}` : '';

    return (
      <form onSubmit={ this.handleFindRepButtonDidClick.bind(this) }>
        <FormText
          inputId="address"
          inputName="address"
          inputOnChange={ this.handleInputDidChange.bind(this) }
          inputPlaceholder="Address"
          inputRequired={ false }
          label="Address"
        />

        <FormText
          inputId="city"
          inputName="city"
          inputOnChange={ this.handleInputDidChange.bind(this) }
          inputPlaceholder="City"
          inputRequired={ false }
          label="City"
        />

        <FormText
          inputId="state"
          inputName="State"
          inputOnChange={ this.handleInputDidChange.bind(this) }
          inputPlaceholder="State"
          inputRequired={ false }
          label="State"
        />

        <FormText
          inputId="zipCode"
          inputName="zip"
          inputOnChange={ this.handleInputDidChange.bind(this) }
          inputPlaceholder="Zip"
          inputRequired={ false }
          label="Address"
        />

        <Link onClick={ this.handleFindRepButtonDidClick.bind(this)} to={ dashboardURL }>
          <Button buttonType={ 1 }>
            See what they're up to <span className="p-icon-chevron-right" />
          </Button>
        </Link>
      </form>
    );
  }

  handleInputDidChange(data) {
    const { formData } = this.state;
    const updatedFormData = { ...formData, ...data };
    this.setState({ formData: updatedFormData });
  }

  handleFindRepButtonDidClick(e) {
    // e.preventDefault();
      const { formData } = this.state;
      const address =  queryString.stringify(formData);
      this.setState({ addressQueryString: address });
      // this.props.politicsStore.userData = formData;
  }

  // // ===== api call =====
  //
  // componentDidMount() {
  //
  //
  //   const myRequest = new Request('https://www.googleapis.com/civicinfo/v2/representatives?address=5925+Weddington+Dr&includeOffices=true&levels=country&key=' + civicInfoApiKey);
  //   const myInit = {
  //     method: 'GET',
  //     cache: 'default',
  //   };
  //
  //   fetch(myRequest, myInit).then((response)=> {
  //     let test = response;
  //     console.log(response);
  //   });
  // }
  //
  // // ==========
}
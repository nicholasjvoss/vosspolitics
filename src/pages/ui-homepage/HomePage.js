import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
// import { civicInfoApiKey } from '../../secret/APIKeys';

// Components
import Button from '../../components/scripts/Button.js';
import FormText from '../../components/scripts/FormText.js';

@inject('politicsStore') @observer
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
    }
  }

  render() {
    const { formData } = this.state;
    // console.log(this.props.politicsStore);

    return (
      <section className="homepage">
        <main className="nv-main">
          <div className="masthead">
            <h1>Your representatives work for <i>you!</i></h1>

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

              <Link onClick={ this.handleFindRepButtonDidClick.bind(this)} to="/dashboard">
                  <Button buttonType={ 1 }>
                    See what they're up to <span className="p-icon-chevron-right" />
                  </Button>
              </Link>
            </form>
          </div>
        </main>
      </section>
    );
  }

  handleInputDidChange(data) {
    const { formData } = this.state;
    const updatedFormData = { ...formData, ...data };
    this.setState({ formData: updatedFormData });
  }

  handleFindRepButtonDidClick() {
      const { formData } = this.state;
      this.props.politicsStore.userData = formData;
  }

  // ===== api call =====

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
  //     console.log(test);
  //   });
  // }

  // ==========
}

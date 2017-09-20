import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { civicInfoApiKey } from '../../secret/APIKeys';

// Components
import Button from '../../components/scripts/Button.js';
import Form from '../../components/scripts/Form.js';
import FormText from '../../components/scripts/FormText.js';

@observer
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: [],
    }
  }

  render() {
    console.log(this.props.store.userData);

    return (
      <section className="homepage">
        <main className="nv-main">
          <div className="masthead">
            <h1>Your representatives work for <i>you!</i></h1>

            <Form>
              <FormText
                inputId="address"
                inputName="address"
                inputPlaceholder="Address"
                inputRequired={ false }
                label="Address"
              />

              <FormText
                inputId="city"
                inputName="city"
                inputPlaceholder="City"
                inputRequired={ false }
                label="City"
              />

              <FormText
                inputId="state"
                inputName="State"
                inputPlaceholder="State"
                inputRequired={ false }
                label="State"
              />

              <FormText
                inputId="zipCode"
                inputName="zip"
                inputPlaceholder="Zip"
                inputRequired={ false }
                label="Address"
              />

              <Button
                action={ this.handleFindRepButtonDidClick.bind(this) }
                buttonType={ 1 }
                type="submit">
                See what they're up to <span className="p-icon-chevron-right" />
              </Button>
            </Form>
          </div>
        </main>
      </section>
    );
  }

  handleFindRepButtonDidClick(e) {
    console.log('form submitted!');
    e.preventDefault();
    this.setState({ test: 123 });

    this.props.store.userData = {
      address: '5925 Weddington Dr',
    };
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

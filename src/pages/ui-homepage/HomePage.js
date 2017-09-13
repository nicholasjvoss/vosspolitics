import React, { Component } from 'react';
import { civicInfoApiKey } from '../../secret/APIKeys';

// Components
import Button from '../../components/scripts/Button.js';

export default class HomePage extends Component {
  render() {
    return (
      <section className="homepage">
        <main className="nv-main">
          <div className="masthead">
            <h1>Your representatives work for <i>you!</i></h1>

            <input type="text" placeholder="Address" />
            <Button
              action={ ()=>{console.log('clicked')} }
              buttonType={ 1 }>
              See what they're up to <span className="p-icon-chevron-right" />
            </Button>

          </div>
        </main>
      </section>
    );
  }

  // ===== api call =====

  componentDidMount() {
    const myRequest = new Request('https://www.googleapis.com/civicinfo/v2/representatives?address=5925+Weddington+Dr&includeOffices=true&levels=country&key=' + civicInfoApiKey);
    const myInit = {
      method: 'GET',
      cache: 'default',
    };

    fetch(myRequest, myInit).then((response)=> {
      let test = response;
      console.log(test);
    });
  }

  // ==========
}

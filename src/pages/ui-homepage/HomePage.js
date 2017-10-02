import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

// Components
import FindRepsForm from '../../components/scripts/FindRepsForm.js';

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

            <FindRepsForm />
          </div>
        </main>
      </section>
    );
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

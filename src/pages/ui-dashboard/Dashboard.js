import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import queryString from 'query-string';

@inject('politicsStore') @observer
export default class Dashboard extends Component {
  render() {
      console.log(this.props.politicsStore.userData);

    return (
      <div>
        <h2>This is a dashboard template</h2>
      </div>
    );
  }
}

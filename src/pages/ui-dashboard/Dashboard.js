import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import queryString from 'query-string';

@inject('politicsStore') @observer
export default class Dashboard extends Component {
  render() {
    const { location } = this.props;
    const { search } = location;
    const address = queryString.parse(search);
    console.log(address);

    return (
      <div>
        <h2>This is a dashboard template</h2>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { observer } from 'mobx-react';


@observer
export default class List extends React.Component {
  render() {
    return (
      <div>{ this.props.store.todos[0] }</div>
    )
  }
}

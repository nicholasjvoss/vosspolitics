import React, { Component } from 'react';
import './index.scss';
import ComponentLibrary from './components/ComponentLibrary';

export default class Common extends React.Component {
  render() {
    return (
      <section className="common">
        <h1>Component Library</h1>
        <h2>Where global components and styles live</h2>

        <ComponentLibrary />
      </section>
    )
  }
}

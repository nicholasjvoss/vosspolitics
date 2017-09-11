import React, { Component } from 'react';
import cx from 'classnames';

import Button from '../components/Button'

export default class ButtonPage extends Component {
  static defaultProps = {
    children: 1,
  }

  render() {
    const { children } = this.props;

    return (
      <section className="library-page__buttons">
        <div className="demo-component">
          <h2 className="demo-component__title">Primary</h2>
          <Button buttonType={ 1 } wrapperCls="wrapperCls" >Primary</Button>
        </div>

        <div className="demo-component">
          <h2 className="demo-component__title">Secondary</h2>
          <Button buttonType={ 2 }>Secondary</Button>
        </div>

        <div className="demo-component">
          <h2 className="demo-component__title">Tertiary</h2>
          <Button buttonType={ 3 }>Tertiary</Button>
        </div>

        <div className="demo-component">
          <h2 className="demo-component__title">Transparent</h2>
          <Button buttonType={ 4 }>Transparent</Button>
        </div>

        <div className="demo-component">
          <h2 className="demo-component__title">Error</h2>
          <Button buttonType={ 5 }>Error</Button>
        </div>

        <div className="demo-component">
          <h2 className="demo-component__title">With Icon</h2>
          <Button icon="p-icon-gear" />
        </div>

        <div className="demo-component">
          <h2 className="demo-component__title">Loading</h2>
          <Button loading>Text</Button>
        </div>
      </section>
    );
  }
}

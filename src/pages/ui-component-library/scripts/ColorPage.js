import React, { Component } from 'react';

export default class ButtonPage extends Component {
  render() {
    // const { children } = this.props;

    return (
      <section className="library-page__color">
        <div className="demo-component">
          <h2 className="demo-component__title">Primary Theme Colors</h2>

          <div className="color-sample grn-1"><span>#0ca773</span></div>
          <div className="color-sample wht-1"><span>#f7f0e9</span></div>
          <div className="color-sample red-1"><span>#ffaf9B</span></div>
          <div className="color-sample red-2"><span>#df5333</span></div>
          <div className="color-sample blue-1"><span>#267fb8</span></div>
          <div className="color-sample dark-gry-1"><span>#424242</span></div>
        </div>

        <div className="demo-component">
          <h2 className="demo-component__title">Grayscale</h2>

          <div className="color-sample wht-1"><span>#f7f0e9</span></div>
          <div className="color-sample gry-4"><span>#c4bdb6</span></div>
          <div className="color-sample gry-3"><span>#8c8b89</span></div>
          <div className="color-sample dark-gry-1"><span>#424242</span></div>
          <div className="color-sample dark-gry-2"><span>#242323</span></div>
        </div>

      </section>
    );
  }
}

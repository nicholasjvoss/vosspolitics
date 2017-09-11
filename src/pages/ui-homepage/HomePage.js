import React, { Component } from 'react';

// Components
import Button from '../../components/scripts/Button.js';

export default class HomePage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        coords: {},
        geoEnabled: true,
      }
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(this.showPosition.bind(this), this.geoNotAvailable.bind(this));
  }

  render() {
    const { coords, geoEnabled } = this.state;

    return (
      <section className="homepage">
        <main className="nv-main">
          <div className="masthead">
            <h1>Your representatives work for <i>you!</i></h1>

            { geoEnabled ?
              <Button
                action={ this.handleFindRepDidClick.bind(this, coords) }
                buttonType={ 1 }>
                See what they're up to <span className="p-icon-chevron-right" />
              </Button> :

              <span>zip here instead...</span>
            }

          </div>
        </main>
      </section>
    );
  }

  showPosition(pos) {
    this.setState({ coords: pos.coords });
  }

  geoNotAvailable() {
    this.setState({ geoEnabled: false })
  }

  handleFindRepDidClick(coords) {
    const { latitude, longitude } = coords;
    console.log(coords);
  }
}

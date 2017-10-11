import React, { Component } from 'react';

export default class RepCard extends Component {
    render() {
        const { office, repData } = this.props;
        const { address, channels, name, party, phones, photoUrl, urls } = repData;
        // console.log(this.props);

        const styles = {
            backgroundImage: `url(${photoUrl})`,
        }

        return (
            <div className="rep-card" onClick={ () => {console.log(name)} }>
                <div
                    className="rep-card__photo"
                    style={ styles } />
                <div className="rep-card__info">
                    <h3>{ name }</h3>
                    <span>{office.name}</span>
                    <h4>{ party }</h4>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';

export default class RepCard extends Component {
    render() {
        const { repData } = this.props;
        console.log(repData);

        return (
            <div className="rep-card">
                test
                {/* <div
                    className="rep-card__photo"
                    style={ styles } />
                    <h3>{ name }</h3>
                <h4>{ party }</h4> */}
            </div>
        )
    }
}

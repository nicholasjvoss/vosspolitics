import React, { Component } from 'react';

export default class RepDetails extends Component {
    render() {
        const { repData } = this.props;
        const { address, channels, name, party, phones, photoUrl, urls } = repData;
        console.log(repData);
        const styles = {
            backgroundImage: `url(${photoUrl})`,
        }

        return (
            <div className="rep-detail-inner__content">
                <div
                    className="rep-detail__photo"
                    style={ styles } />
                <div className="rep-detail__info">
                    <h3 className="rep-name">{ name }</h3>
                    <span className="party-affiliation">{ party }</span>
                </div>
            </div>
        )
    }
}

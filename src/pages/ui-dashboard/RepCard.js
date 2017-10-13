import React, { Component } from 'react';

// ===== components =====

export default class RepCard extends Component {
    static defaultProps = {
    //   onCardClick: ()=> {},
    }

    render() {
        const { office, onCardClick, repData } = this.props;
        const { address, channels, name, party, phones, photoUrl, urls } = repData;

        const styles = {
            backgroundImage: `url(${photoUrl})`,
        }

        return (
            <div className="rep-card" onClick={ onCardClick }>
                <div
                    className="rep-card__photo"
                    style={ styles } />
                <div className="rep-card__info">
                    <h3 className="rep-name">{ name }</h3>
                    <span className="office-name">{office.name}</span>
                    <span className="party-affiliation">{ party }</span>
                </div>
                <span className="more-arrow p-icon-chevron-right"/>
            </div>
        )
    }
}

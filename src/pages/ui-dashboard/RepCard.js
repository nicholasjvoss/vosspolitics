import React, { Component } from 'react';

// ===== components =====

export default class RepCard extends Component {
    static defaultProps = {
    //   onCardClick: ()=> {},
    }

    render() {
        const { repData } = this.props;
        const { name, id } = repData;

        const repImageUrl = `https://theunitedstates.io/images/congress/225x275/${ id }.jpg`;
        const styles = {
            backgroundImage: `url(${repImageUrl})`,
            backgroundColor: 'gold',
        }

        console.log(repData);

        return (
            <div className="rep-card">
                <div
                    className="rep-card__photo"
                    style={ styles } />
                <h3>{ name }</h3>
            </div>
        )
    }
}

import React, { Component } from 'react';

// ===== components =====
import RepCard from './RepCard';

export default class RepList extends Component {
    render() {
        const { repListData } = this.props;
        const { officials } = repListData;


        return (
            <div>{ officials.map(this.renderRepCards.bind(this)) }</div>
        )
    }

    renderRepCards(rep, idx) {
        const { repListData } = this.props;
        const id = `rep${idx}`;

        const usOfficeIndeces = repListData.divisions["ocd-division/country:us"].officeIndices;
        const repOffice = usOfficeIndeces.filter((index) => {
            return index === idx;
        });
        console.log(repOffice);

        // console.log('rep idx:', idx);

        return (
            <RepCard
                key={ id }
            />
        )
    }
}

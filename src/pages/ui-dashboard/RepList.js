import React, { Component } from 'react';

// ===== components =====
import RepCard from './RepCard';

export default class RepList extends Component {
    render() {
        const { repListData } = this.props;
        const { offices } = repListData;
        // console.log(offices);
        // const { officials } = repListData;


        return (
            <div>{ offices.map(this.renderOffices.bind(this)) }</div>
        )
    }

    renderOffices(office, idx) {
        const { repListData } = this.props;
        const { officials } = repListData;
        const { officialIndices, name } = office;

        const repCard = officialIndices.map((index) => {
            const rep = (officials[index]);

            return (
                <li>
                    <RepCard repData={ rep } office={ office } />
                </li>
            );
        });

        return (
            <div key={ `rep-${idx}` }>
                <h3>{ name }</h3>
                <ul>{ repCard }</ul>
            </div>
        )
    }
}

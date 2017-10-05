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
        const { officialIndices } = office;

        const test = officialIndices.map((index) => {
            const rep = (officials[index]);
            return <div>TEST123</div>;
        });

        console.log(office.name, test);

        return (
            <div key={ `rep-${idx}` }>
                <h2>{ test }</h2>
            </div>
        )
    }

    // renderRepCards(rep, idx) {
    //     const { repListData } = this.props;
    //     const { offices } = repListData;
    //     const id = `rep${idx}`;
    //
    //     // const countryIndices = repListData.divisions["ocd-division/country:us"].officeIndices;
    //     // const stateIndices = repListData.divisions["ocd-division/country:us/state:ga"].officeIndices;
    //     // const districtIndices = repListData.divisions["ocd-division/country:us/state:ga/cd:7"].officeIndices;
    //     console.log('=============================');
    //     const test = offices.map((office) => {
    //         const { officialIndices } = office;
    //
    //         const matchingIndices = officialIndices.map((index) => {
    //             // console.log('index:', index, 'current rep idx:', idx);
    //             if(index === idx) {
    //                 return index;
    //             } else {
    //                 return 'does not match'
    //             }
    //         });
    //
    //         console.log(matchingIndices);
    //         // console.log('rep idx:', idx, 'matching index:', matchingIndices);
    //
    //         return matchingIndices;
    //     });
    //     // console.log(idx, test);
    //
    //
    //
    //     // if(this.getOffice(idx, countryIndices)) {
    //     //     console.log(rep.name + ' is national');
    //     // } else if(this.getOffice(idx, stateIndices)) {
    //     //     console.log(rep.name + ' is senator');
    //     // } else if(this.getOffice(idx, districtIndices)) {
    //     //     console.log(rep.name + ' is congress');
    //     // }
    //
    //     return (
    //         <RepCard
    //             key={ id }
    //         />
    //     )
    // }
    //
    // getOffice(idx, indices) {
    //     const test = indices.filter((index) => {
    //         return index === idx;
    //     });
    //
    //     return !!test.length;
    // }
}

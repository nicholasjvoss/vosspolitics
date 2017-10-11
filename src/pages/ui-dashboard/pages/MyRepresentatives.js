import React, { Component } from 'react';

// ===== components =====
import RepList from '../RepList';

export default class MyRepresentatives extends Component {
    render() {
        const { repData } = this.props;
        const userAddress = `${repData.normalizedInput.line1}, ${repData.normalizedInput.city}, ${repData.normalizedInput.state} ${repData.normalizedInput.zip}`;

        return (
            <div className="my-representatives">
                <h2>Here are your representatives for <span className="user-address">{ userAddress }</span></h2>
                <RepList repListData={ repData } />
            </div>
        )
    }
}

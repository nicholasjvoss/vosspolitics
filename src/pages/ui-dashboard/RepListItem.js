import React, { Component } from 'react';

export default class RepListItem extends Component {
    render() {
        const { politicsStore, repData } = this.props;
        const { name, party } = repData;

        return (
            <div>{ name }</div>
        )
    }
}

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import queryString from 'query-string';

// ===== components =====
import Loader from '../../components/scripts/Loader';

@inject('politicsStore') @observer
export default class Dashboard extends Component {
    render() {
        const { repsLoaded, politicsStore } = this.props;
        const { fetched } = politicsStore;

        return (
            <div>
                { fetched ? this.renderReps() : this.renderLoader() }
            </div>
        );
    }

    componentDidMount() {
        const { location } = this.props;
        const { search } = location;
        const userLocation = queryString.parse(search);
        const address = encodeURI(userLocation.address);
        this.props.politicsStore.fetchReps(address);
    }

    renderLoader() {
        return <Loader />
    }

    renderReps() {
        const repData = this.props.politicsStore.repData;
        const userAddress = `${repData.normalizedInput.line1}, ${repData.normalizedInput.city}, ${repData.normalizedInput.state} ${repData.normalizedInput.zip}`;

        console.log(repData.officials[0]);

        return <div><h2>Here are your representatives for <div>{ userAddress }</div></h2></div>
    }
}

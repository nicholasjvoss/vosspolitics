import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import queryString from 'query-string';

// ===== components =====
import Loader from '../../components/scripts/Loader';

@inject('politicsStore') @observer
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasResults: false,
        }
    }

    render() {
        const { politicsStore } = this.props;
        const { fetched } = politicsStore;
        const { hasResults } = this.state;

        return (
            <div>
                { hasResults && this.renderRepSearch() }
                { fetched ? this.renderReps() : this.renderLoader() }
            </div>
        );
    }

    componentDidMount() {
        const { location } = this.props;
        const { search } = location;
        const userLocation = queryString.parse(search);
        const address = encodeURI(userLocation.address);

        if(search.length > 0) {
            this.props.politicsStore.fetchReps(address);
            this.setState({ hasResults: false });
        } else {
            this.setState({ hasResults: true });
        }
    }

    renderLoader() {
        return <Loader />
    }

    renderRepSearch() {
        return <div>rep search here</div>
    }

    renderReps() {
        const repData = this.props.politicsStore.repData;
        const userAddress = `${repData.normalizedInput.line1}, ${repData.normalizedInput.city}, ${repData.normalizedInput.state} ${repData.normalizedInput.zip}`;

        console.log(repData.officials[0]);

        return (
            <div>
                <h2>Here are your representatives for <span className="user-address">{ userAddress }</span></h2>
            </div>)
    }
}

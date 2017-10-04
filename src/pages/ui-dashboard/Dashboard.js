import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import queryString from 'query-string';

// ===== components =====
import Loader from '../../components/scripts/Loader';
import PrimaryHeader from '../../components/scripts/PrimaryHeader';
import FindRepsForm from '../../components/scripts/FindRepsForm';
import RepList from './RepList';
import RepCard from './RepCard';

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
            <div className="page-dashboard">
                <PrimaryHeader />
                <main>
                    { !hasResults && this.renderRepSearch() }
                    { fetched ? this.renderReps() : <Loader /> }
                </main>
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
            this.setState({ hasResults: true });
        } else {
            this.setState({ hasResults: false });
        }
    }

    renderRepSearch() {
        return <FindRepsForm />
    }

    renderReps() {
        const repData = this.props.politicsStore.repData;
        const userAddress = `${repData.normalizedInput.line1}, ${repData.normalizedInput.city}, ${repData.normalizedInput.state} ${repData.normalizedInput.zip}`;

        return (
            <div>
                <h2>Here are your representatives for <span className="user-address">{ userAddress }</span></h2>
                <RepList repListData={ repData } />
            </div>
        )
    }
}

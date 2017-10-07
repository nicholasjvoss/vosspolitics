import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import queryString from 'query-string';

// ===== components =====
import DashboardNav from './DashboardNav';
import DashboardHeader from './DashboardHeader';
import FindRepsForm from '../../components/scripts/FindRepsForm';
import Loader from '../../components/scripts/Loader';
import RepList from './RepList';
import RepCard from './RepCard';
import DashboardTabs from './DashboardTabs';

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
                <nav className="page-dashboard__nav">
                    <DashboardNav store={ politicsStore } />
                </nav>

                <main className="page-dashboard__main">
                    <DashboardHeader />

                    { !hasResults && this.renderRepSearch() }
                    { fetched ? this.renderTabContent() : <Loader /> }
                    {/* { fetched ? this.renderReps() : <Loader /> } */}
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

    renderTabContent() {
        const { politicsStore } = this.props;
        const { currentTab } = politicsStore;
        return DashboardTabs[currentTab];
    }

    renderRepSearch() {
        return <FindRepsForm />
    }

    renderReps() {
        const repData = this.props.politicsStore.repData;
        const userAddress = `${repData.normalizedInput.line1}, ${repData.normalizedInput.city}, ${repData.normalizedInput.state} ${repData.normalizedInput.zip}`;

        return (
            <div className="dashboard-content">
                <h2>Here are your representatives for <span className="user-address">{ userAddress }</span></h2>
                <RepList repListData={ repData } />
            </div>
        )
    }
}

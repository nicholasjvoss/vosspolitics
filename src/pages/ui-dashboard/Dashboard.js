import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import queryString from 'query-string';

// ===== components =====
import DashboardHeader from './DashboardHeader';
import FindRepsForm from '../../components/scripts/FindRepsForm';
import Loader from '../../components/scripts/Loader';
import RepList from './RepList';

import TabWrapper from '../../components/tabs/scripts/TabWrapper';
import TabList from '../../components/tabs/scripts/TabList'
import TabPanel from '../../components/tabs/scripts/TabPanel'
import Tab from '../../components/tabs/scripts/Tab';

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
                { fetched ? this.renderTabContent() : <Loader /> }
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
        const repData = this.props.politicsStore.repData;

        return (
            <TabWrapper wrapperCls="page-dashboard-layout" tabIdx={ 0 }>
                <TabList wrapperCls="page-dashboard-layout__nav">
                    <Tab>My Representatives</Tab>
                    <span>link 2</span>
                </TabList>

                <TabPanel>
                    <div>{ this.renderReps() }</div>
                    <div>more content</div>
                </TabPanel>
            </TabWrapper>
        )
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

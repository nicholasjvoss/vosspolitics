import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import queryString from 'query-string';

// ===== components =====
import DashboardHeader from './DashboardHeader';
import FindRepsForm from '../../components/scripts/FindRepsForm';
import Loader from '../../components/scripts/Loader';
import MyRepresentatives from './pages/MyRepresentatives';

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
        const { location, politicsStore } = this.props;
        const { search } = location;
        const userLocation = queryString.parse(search);
        const address = encodeURI(userLocation.address);

        if(search.length > 0) {
            politicsStore.fetchDataFromAddress(address);

            this.setState({ hasResults: true });
        } else {
            this.setState({ hasResults: false });
        }

        console.log(politicsStore);
    }

    renderTabContent() {
        const { politicsStore } = this.props;

        return (
            <TabWrapper wrapperCls="page-dashboard-layout" tabIdx={ 0 }>
                <TabList wrapperCls="page-dashboard-layout__nav">
                    <Tab wrapperCls="page-dashboard-layout__tab">
                        <span className="nav-menu-icon p-icon-user-circle-o" />My Representatives
                    </Tab>

                    <Tab wrapperCls="page-dashboard-layout__tab">
                        <span className="nav-menu-icon p-icon-pie-chart" />Stats
                    </Tab>
                </TabList>

                <TabPanel wrapperCls="page-dashboard-layout__main">
                    <MyRepresentatives politicsStore={ politicsStore } />
                    <div>tab panel content here...</div>
                </TabPanel>
            </TabWrapper>
        )
    }

    renderRepSearch() {
        return <FindRepsForm />
    }
}

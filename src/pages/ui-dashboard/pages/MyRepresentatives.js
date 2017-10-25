import React, { Component } from 'react';
import { observer } from 'mobx-react';

// ===== components =====
import DashboardHeader from '../DashboardHeader';
import PanelsTwoCol from '../../../components/panels/scripts/PanelsTwoCol';
import RepList from '../RepList';
import RepDetails from '../RepDetails';

@observer
export default class MyRepresentatives extends Component {
    render() {
        const { politicsStore } = this.props;
        const { repData, userData, myRepresentatives } = politicsStore;
        const { showRepDetail } = myRepresentatives;
        const userAddress = `${userData.line1}, ${userData.city}, ${userData.state} ${userData.zip}`;

        return (
            <div className="my-representatives">
                <DashboardHeader>My Representatives</DashboardHeader>

                {/* <h2 className="my-representatives__title">
                    Here are your representatives for <span className="user-address">{ userAddress }</span>
                </h2> */}

                <PanelsTwoCol
                    showSecondary={ showRepDetail }
                    wrapperCls="rep-content">

                    <RepList
                        politicsStore={ politicsStore }
                        wrapperCls="rep-list" />

                    <RepDetails politicsStore={ politicsStore } />
                </PanelsTwoCol>
            </div>
        )
    }

    
}

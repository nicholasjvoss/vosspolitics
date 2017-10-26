import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { congressApiKey } from 'secret/APIKeys';

// ===== components =====
import Button from '../../components/button/scripts/Button';

@observer
export default class RepDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repData: {},
        }
    }

    componentWillReceiveProps() {
        const { politicsStore, } = this.props;
        const { selectedRep } = politicsStore;

        this.setState({ repData: selectedRep });
    }

    render() {
        const { politicsStore, repData } = this.props;
        const { selectedRep } = politicsStore;

        return (
            <div className="rep-detail">
                <div className="rep-detail__header">
                    <Button
                        action={ this.handleBackToRepListDidClick.bind(this) }
                        buttonType={ 4 }>
                        <span className="p-icon-chevron-left" />
                        <span className="back-text">back to list</span>
                    </Button>
                </div>

                <div className="rep-detail__content">
                    <div className="rep-detail__photo" />
                    <div className="rep-detail__info">
                        <h3 className="rep-name">{ this.state.repData.name }</h3>
                        <span className="party-affiliation">party</span>
                        <ul className="phone-numbers">
                            {/* { phones.length && phones.map(this.renderPhoneNumbers) } */}
                        </ul>
                        <ul className="rep-channels">
                            {/* { channels.length && channels.map(this.renderChannels) } */}
                        </ul>
                        <ul className="rep-urls">
                            {/* { urls.length && urls.map(this.renderUrls) } */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    renderPhoneNumbers(number, idx) {
        return (
            <li
                className="phone-numbers__number"
                key={ `channel-${idx}` }>
                { number }
            </li>)
    }

    renderChannels(channel, idx) {
        return (
            <li
                className="rep-channels_channel"
                key={ `channel-${idx}` }>
                { channel.id }
            </li>)
    }

    renderUrls(url, idx) {
        return (
            <li
                className="rep-channels_channel"
                key={ `channel-${idx}` }>
                { url }
            </li>)
    }

    handleBackToRepListDidClick() {
        this.props.politicsStore.myRepresentatives.showRepDetail = false;
    }
}

import React, { Component } from 'react';

export default class RepDetails extends Component {
    render() {
        const { repData } = this.props;
        const { address, channels, name, party, phones, photoUrl, urls } = repData;
        // console.log(this.props);
        const styles = {
            backgroundImage: `url(${photoUrl})`,
        }

        return (
            <div className="rep-detail-inner__content">
                <div
                    className="rep-detail__photo"
                    style={ styles } />
                <div className="rep-detail__info">
                    <h3 className="rep-name">{ name }</h3>
                    <span className="party-affiliation">{ party }</span>
                    <ul className="phone-numbers">
                        { phones.length && phones.map(this.renderPhoneNumbers) }
                    </ul>
                    <ul className="rep-channels">
                        { channels.length && channels.map(this.renderChannels) }
                    </ul>
                    <ul className="rep-urls">
                        { urls.length && urls.map(this.renderUrls) }
                    </ul>

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
}

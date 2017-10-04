import React, { Component } from 'react';

export default class RepCard extends Component {
    render() {
        const { office } = this.props;
        // const { address, channels, emails, name, party, phones, photoUrl, urls } = repCardData.rep;
        // // const { divisionId } = repCardData.office;
        // const styles = {
        //     backgroundImage: `url(${photoUrl})`,
        // }
        // console.log(this.props.office[0]);

        return (
            <div className="rep-card">
                test
                {/* <div
                    className="rep-card__photo"
                    style={ styles } />
                    <h3>{ name }</h3>
                <h4>{ party }</h4> */}
            </div>
        )
    }
}

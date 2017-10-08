import React, { Component } from 'react';

export default class Tab extends Component {
    render() {
        return (
            <span>tab here</span>
        )
    }

    handleTabDidClick(idx) {
        this.setState({ tabIndex:idx });
    }
}

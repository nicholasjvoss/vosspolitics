import React, { Component } from 'react';

// ===== components =====
import Button from '../../scripts/Button';

export default class Tab extends Component {
    render() {
        const { children } = this.props;

        return (
            <Button
                buttonType={ 4 }
                wrapperCls="tab"
            >
                { children }
            </Button>
        )
    }

    handleTabDidClick(idx) {
        this.setState({ tabIndex:idx });
    }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// ===== Components =====
import Button from '../../components/button/scripts/Button';

export default class PrimaryHeader extends Component {
    render() {
        const { children } = this.props;

        return (
            <header className="dashboard-header">
                <Button
                    buttonType={ 4 }
                    wrapperCls="nav-toggle p-icon-navicon"
                />

                <h1>{ children ? children : 'Dashboard' }</h1>
            </header>
        )
    }
}

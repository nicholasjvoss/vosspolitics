import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// ===== Components =====
import Button from '../../components/button/scripts/Button';

export default class PrimaryHeader extends Component {
    render() {
        return (
            <header className="dashboard-header">
                <Button
                    buttonType={ 4 }
                    wrapperCls="nav-toggle p-icon-navicon"
                />
                <nav>
                    <Link to="./..">Home</Link>
                </nav>

                <h1>Dashboard</h1>
            </header>
        )
    }
}

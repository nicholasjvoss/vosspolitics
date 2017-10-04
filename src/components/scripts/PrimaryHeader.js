import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PrimaryHeader extends Component {
    render() {
        return (
            <div className="primary-header">
                <header>header</header>
                <nav>
                    <Link to="./..">Home</Link>
                </nav>
            </div>
        )
    }
}

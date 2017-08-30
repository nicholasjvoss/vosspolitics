import React, { Component } from 'react';
import '../styles/library-ui.scss';

export default class ComponentLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: {},
        }
    }

    render() {
        const testData = [
            'test', 'test2'
        ];

        return (
            <div className="component-library">
                <div className="cl-accordion">
                    <div className="cl-accordion-tab-list">
                        <ul>{ testData.map(this.renderTabs) }</ul>
                    </div>

                    <div className="cl-accordion-content">
                        <div className="cl-accordion-tabs__content">content</div>
                    </div>
                </div>
            </div>
        )
    }

    renderTabs(tab) {
        console.log(tab);
    }
}

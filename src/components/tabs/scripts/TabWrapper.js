import React, { Component } from 'react';
import cx from 'classnames';

export default class TabWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: this.props.tabIdx,
        }
    }

    static defaultProps = {
        tabIdx: 0, // allows component option for what tab is opened first by default
    }

    render() {
        const { children, wrapperCls } = this.props;
        const { tabIndex } = this.state;

        return (
            <div className={ cx('tab-wrapper', wrapperCls) }>
                {
                    React.cloneElement(children[0], {
                        onTabClick: this.handleTabDidClick.bind(this),
                        tabIndex: tabIndex,
                    })
                }

                {
                    React.cloneElement(children[1], {
                        tabIndex: tabIndex,
                    })
                }
            </div>
        )
    }

    handleTabDidClick(tabIdx) {
        this.setState({ tabIndex: tabIdx });
    }
}

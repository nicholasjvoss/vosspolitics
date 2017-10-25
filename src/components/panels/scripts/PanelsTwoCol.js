import React, { Component } from 'react';
import cx from 'classnames';

// ===== components =====


export default class PanelsTwoCol extends Component {
    static defaultProps = {
        showSecondary: false,
    }

    render() {
        const { children, showSecondary, wrapperCls } = this.props;
        const showSecondaryCls = showSecondary ? 'mod-show-secondary' : '';

        return (
            <div className={ cx('panels-two-col', showSecondaryCls, wrapperCls) }>
                <div className="panels-two-col__one">
                    { children[0] }
                </div>
                <div className="panels-two-col__two">
                    { children[1] }
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import cx from 'classnames';

// ===== components =====
import Button from '../../button/scripts/Button';

export default class Tab extends Component {
    render() {
        const { children, wrapperCls } = this.props;

        return (
            <Button
                buttonType={ 4 }
                wrapperCls={ cx('tab', wrapperCls) }>
                { children }
            </Button>
        )
    }

    handleTabDidClick(idx) {
        this.setState({ tabIndex:idx });
    }
}

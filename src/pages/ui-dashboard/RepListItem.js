import React, { Component } from 'react';
import cx from 'classnames';

// ===== components =====
import RepCard from './RepCard';

export default class RepListItem extends Component {
    render() {
        const { onRepClick, repData, wrapperCls } = this.props;
        const { id } = repData;

        return (
            <li
                className={ cx('rep-list-item', wrapperCls) }
                onClick={ onRepClick } >
                <RepCard repData={ repData } />
            </li>
        )
    }
}

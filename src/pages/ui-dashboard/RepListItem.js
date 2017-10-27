import React, { Component } from 'react';
import cx from 'classnames';

// ===== components =====
import RepCard from './RepCard';

export default class RepListItem extends Component {
    render() {
        const { onRepClick, politicsStore, repData, wrapperCls } = this.props;
        const { name, party } = repData;

        const partyCls = {
            'republican': party === "R",
            'democratic': party === "D",
            'independent': party === "I",
        };

        return (
            <li
                className={ cx('rep-list-item', wrapperCls) }
                onClick={ onRepClick } >
                <RepCard repData={ repData } />
                {/* <h3 className="rep-name">{ name }</h3>
                <span className={ cx('party', partyCls) }>{ party }</span> */}
            </li>
        )
    }
}

import React, { Component } from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

// ===== components =====
import PanelsTwoCol from '../../components/panels/scripts/PanelsTwoCol';
import RepCard from './RepCard';
import RepDetails from './RepDetails';
import RepListItem from './RepListItem';

@observer
export default class RepList extends Component {
    render() {
        return (
            <div
                className="rep-list-wrapper"
                onClick={ this.onTextDidClick.bind(this) }>

                { this.renderMyReps() }
            </div>
        )
    }

    onTextDidClick() {
        const { politicsStore } = this.props;
        politicsStore.myRepresentatives.showRepDetail = true;
    }

    renderMyReps() {
        const { politicsStore } = this.props;
        const { repData } = politicsStore;
        const { myReps } = repData;
        const { house, senate } = myReps;

        return (
            <ul className="rep-list">
                { house.map(this.renderRepListItem.bind(this)) }
                { senate.map(this.renderRepListItem.bind(this)) }
            </ul>
        )
    }

    renderRepListItem(rep, idx) {
        const politicsStore = this.props.politicsStore;
        const repListItemKey = `rep-${idx}`;

        return (
            <RepListItem
                key={ repListItemKey }
                onRepClick={ this.handleRepDidSelect.bind(this, rep) }
                politicsStore={ politicsStore }
                repData={ rep } />
        );
    }

    handleRepDidSelect(rep) {
        this.props.politicsStore.selectedRepId = rep.id;
    }
}

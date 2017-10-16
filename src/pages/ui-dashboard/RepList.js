import React, { Component } from 'react';
import cx from 'classnames';

// ===== components =====
import Button from '../../components/button/scripts/Button';
import RepCard from './RepCard';
import RepDetails from './RepDetails';

export default class RepList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCompact: false,
            selectedRep: null,
        }
    }

    render() {
        const { repListData } = this.props;
        const { offices, officials } = repListData;
        const { isCompact, selectedRep } = this.state;

        const isCompactCls = isCompact ? 'mod-compact' : '';

        const repDetails = selectedRep ?
            <RepDetails
                repData={ selectedRep } /> :
            <div>Select a representative to see details</div>;


        return (
            <div className="rep-info-wrapper">
                <div className={ cx('rep-offices', isCompactCls) }>
                    <Button
                        action={ this.onToggleCompactList.bind(this) }
                        buttonType={ 4 }
                    wrapperCls="rep-list-toggle">

                        <span className="p-icon-chevron-right" />
                    </Button>

                    { offices.map(this.renderOffices.bind(this)) }
                </div>
                <div className={ cx('rep-detail') }>
                    <div className="rep-detail__inner">{ repDetails }</div>
                </div>
            </div>
        )
    }

    renderOffices(office, idx) {
        const { repListData } = this.props;
        const { officials } = repListData;
        const { officialIndices, name } = office;

        const repCard = officialIndices.map((index) => {
            const rep = (officials[index]);

            return (
                <li className="rep-list__item" key={`rep-list-item-${index}`}>
                    <RepCard
                        onCardClick={ this.onCardDidClick.bind(this, rep) }
                        repData={ rep }
                        office={ office } />
                </li>
            );
        });

        return (
            <div className="rep-offices__office" key={ `rep-${idx}` }>
                <ul className="rep-list">{ repCard }</ul>
            </div>
        )
    }

    onCardDidClick(data) {
        console.log(data);
        this.setState({ selectedRep: data, isCompact: true });
    }

    onToggleCompactList() {
        const { isCompact } = this.state;

        this.setState({ isCompact: !isCompact });
    }
}
